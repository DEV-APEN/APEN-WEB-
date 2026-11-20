"""Pruebas stdlib: python -B scripts/test_review_leads.py."""

import contextlib
import csv
import importlib.util
import io
import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest


sys.dont_write_bytecode = True
SCRIPT = Path(__file__).with_name("review-leads.py")
SPEC = importlib.util.spec_from_file_location("review_leads", SCRIPT)
leads = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(leads)


class ReviewTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.directory = Path(self.temp.name)
        self.output = self.directory / "revision.csv"

    def fixture(self, name, rows, headers=None, bom=False):
        path = self.directory / name
        if headers is None:
            headers = list(dict.fromkeys(key for row in rows for key in row))
        with path.open("w", encoding="utf-8-sig" if bom else "utf-8", newline="") as stream:
            writer = csv.DictWriter(stream, fieldnames=headers)
            writer.writeheader()
            writer.writerows(rows)
        return path

    def output_rows(self):
        with self.output.open(encoding="utf-8-sig", newline="") as stream:
            return list(csv.DictReader(stream))

    def test_bom_unicode_quotes_newlines_aliases_and_preserved_inputs(self):
        raw = {"Nombre": "Mar\u00eda \u674e", "Tel\u00e9fono": "55 1234 5678",
               "Mensaje": 'Una "cotizacion", por favor\nSegunda linea',
               "Email": " MARIA@EXAMPLE.COM ", "extra": "\U0001f331", "source": "contacto"}
        contact = self.fixture("contacto.csv", [raw], bom=True)
        chat = self.fixture("chat.csv", [{"name": "Ana", "phone": "+5215512345678",
                                         "message": "Otro dia", "from_name": "Asistente ChatBot"}])
        before = {p: p.read_bytes() for p in (contact, chat)}
        counts = leads.review([contact, chat], self.output)
        rows = self.output_rows()
        self.assertEqual(rows[0]["nombre"], raw["Nombre"])
        self.assertEqual(rows[0]["mensaje"], raw["Mensaje"])
        self.assertEqual(json.loads(rows[0]["datos_originales"]), raw)
        self.assertEqual(rows[0]["email_normalizado"], "maria@example.com")
        self.assertEqual(rows[1]["fuente"], "Asistente ChatBot")
        self.assertEqual(rows[0]["identificador_contacto"], rows[1]["identificador_contacto"])
        self.assertEqual(counts["filas"], 2)
        for path, data in before.items():
            self.assertEqual(path.read_bytes(), data)

    def test_source_evidence_not_filename(self):
        path = self.fixture("chat.csv", [
            {"source": "explicita", "from_name": "robot", "subject": "asunto"},
            {"from_name": "robot", "subject": "asunto"},
            {"subject": "asunto"}, {}], headers=["source", "from_name", "subject"])
        leads.review([path], self.output)
        rows = self.output_rows()
        self.assertEqual([r["fuente"] for r in rows], ["explicita", "robot", "asunto", "desconocida"])
        self.assertEqual([r["criterio_fuente"] for r in rows],
                         ["campo_explicito", "from_name", "asunto", "sin_evidencia"])

    def test_current_capture_metadata_is_visible_without_losing_legacy(self):
        path = self.fixture("current.csv", [{
            "nombre-empresa": "Example Company", "origen_formulario": "diagnostico",
            "servicio-id": "H54", "motivo_comercial": "ofrecer_coque",
            "pagina_entrada": "/consultas/registro-achilles", "pagina": "/contacto",
            "utm_source": "linkedin", "utm_medium": "social", "utm_campaign": "noviembre",
        }])
        leads.review([path], self.output)
        row = self.output_rows()[0]
        self.assertEqual(row["nombre"], "Example Company")
        self.assertEqual(row["empresa"], "Example Company")
        self.assertEqual(row["fuente"], "diagnostico")
        self.assertEqual(row["servicio_id"], "H54")
        self.assertEqual(row["motivo_comercial"], "ofrecer_coque")
        self.assertEqual(row["pagina_envio"], "/contacto")
        self.assertEqual(row["utm_source"], "linkedin")

    def test_identical_payload_separate_from_repeat_different_day_subject(self):
        first = {"nombre": "Ana", "email": "ana@example.com", "mensaje": "Proyecto A",
                 "fecha": "2026-01-01", "asunto": "A"}
        a = self.fixture("a.csv", [first, first])
        b = self.fixture("b.csv", [dict(first, fecha="2026-01-02", asunto="B")])
        counts = leads.review([a, b], self.output)
        rows = self.output_rows()
        self.assertEqual(len(rows), 3)
        self.assertEqual([r["duplicado_identico"] for r in rows], ["si", "si", "no"])
        self.assertTrue(all(r["contacto_repetido"] == "si" for r in rows))
        self.assertTrue(all("email_coincidente" in r["motivos"] for r in rows))
        self.assertTrue(all("contacto_entre_archivos" in r["motivos"] for r in rows))
        self.assertEqual(rows[0]["lead_id"], rows[1]["lead_id"])
        self.assertNotEqual(rows[0]["lead_id"], rows[2]["lead_id"])
        self.assertEqual(counts["identicos"], 2)

    def test_transitive_contacts_and_order_independent_ids(self):
        records = [{"email": "a@example.com", "mensaje": "A"},
                   {"email": " A@EXAMPLE.COM ", "telefono": "5512345678", "mensaje": "B"},
                   {"email": "b@example.com", "telefono": "+525512345678", "mensaje": "C"},
                   {"email": "b@example.com", "mensaje": "D"}]
        path = self.fixture("a.csv", records)
        leads.review([path], self.output)
        first = self.output_rows()
        self.assertEqual(len({r["identificador_contacto"] for r in first}), 1)
        self.assertTrue(all(r["posible_duplicado"] == "si" for r in first))
        other = self.fixture("renamed.csv", list(reversed(records)))
        leads.review([other], self.output, force=True)
        second = self.output_rows()
        self.assertEqual({r["lead_id"]: r["identificador_contacto"] for r in first},
                         {r["lead_id"]: r["identificador_contacto"] for r in second})

    def test_blank_pii_never_clusters_even_identical_payload(self):
        path = self.fixture("a.csv", [{"nombre": "Igual"}, {"nombre": "Igual"}, {"nombre": "Otro"}])
        leads.review([path], self.output)
        rows = self.output_rows()
        self.assertEqual(len({r["identificador_contacto"] for r in rows}), 3)
        self.assertTrue(all(r["contacto_repetido"] == "no" for r in rows))
        self.assertEqual([r["duplicado_identico"] for r in rows], ["si", "si", "no"])

    def test_phone_country_codes(self):
        for value in ("5512345678", "+52 (55) 1234-5678", "+5215512345678",
                      "00525512345678", "525512345678", "5215512345678"):
            self.assertEqual(leads.normalize_phone(value), "+525512345678", value)
        self.assertEqual(leads.normalize_phone("+1 5512345678"), "+15512345678")
        self.assertNotEqual(leads.normalize_phone("+44 5512345678"),
                            leads.normalize_phone("5512345678"))
        self.assertNotEqual(leads.normalize_phone("+1 5512345678"),
                            leads.normalize_phone("+44 5512345678"))
        for value in ("", " ", "5512345678 ext 2", "++525512345678", "123", "\uff15512345678"):
            self.assertEqual(leads.normalize_phone(value), "", value)
        path = self.fixture("foreign.csv", [{"phone": value} for value in
                            ("5512345678", "+15512345678", "+445512345678")])
        leads.review([path], self.output)
        self.assertTrue(all(r["posible_duplicado"] == "no" for r in self.output_rows()))

    def test_non_email_placeholders_and_names_do_not_cluster(self):
        path = self.fixture("a.csv", [{"nombre": "Ana", "email": email}
                                      for email in ("sin correo", "sin correo", "@", "a@", "a b@c")])
        leads.review([path], self.output)
        rows = self.output_rows()
        self.assertEqual(len({r["identificador_contacto"] for r in rows}), len(rows))
        self.assertTrue(all(r["contacto_repetido"] == "no" for r in rows))
        self.assertEqual(leads.normalize_email(" A+tag@Example.com "), "a+tag@example.com")
        self.assertNotEqual(leads.normalize_email("a+tag@example.com"),
                            leads.normalize_email("a@example.com"))

    def test_aliases_preserve_id_and_payload_conflicts(self):
        a = self.fixture("a.csv", [{"nombre": "Ana", "telefono": "5512345678", "mensaje": "Hola"}])
        b = self.fixture("b.csv", [{"name": "Ana", "phone": "5512345678", "message": "Hola"}])
        leads.review([a, b], self.output)
        rows = self.output_rows()
        self.assertEqual(rows[0]["lead_id"], rows[1]["lead_id"])
        c = self.fixture("c.csv", [{"nombre": "Ana", "name": "Otra"}])
        leads.review([c], self.output, force=True)
        self.assertEqual(json.loads(self.output_rows()[0]["datos_originales"])["name"], "Otra")

    def test_states_and_manual_tracking_only_by_lead_id(self):
        path = self.fixture("a.csv", [{"email": "a@example.com", "mensaje": str(i)}
                                      for i in range(len(leads.STATES) + 1)])
        leads.review([path], self.output)
        rows = self.output_rows()
        self.assertTrue(all(r["estado"] == "nuevo" for r in rows))
        states = self.fixture("estados.csv", [
            {"lead_id": row["lead_id"], "estado": state, "notas": "Llamar\nPronto", "responsable": "Ana"}
            for row, state in zip(rows, leads.STATES)])
        before = states.read_bytes()
        leads.review([path], self.output, states, force=True)
        current = self.output_rows()
        self.assertEqual([r["estado"] for r in current], list(leads.STATES) + ["nuevo"])
        self.assertEqual(current[0]["notas"], "Llamar\nPronto")
        self.assertEqual(current[-1]["notas"], "")
        self.assertEqual(states.read_bytes(), before)
        # Un CSV de revision completo tambien sirve como archivo de estados.
        previous = self.directory / "previo.csv"
        self.output.rename(previous)
        leads.review([path], self.output, previous)
        self.assertEqual(self.output_rows(), current)

    def test_invalid_and_conflicting_states_do_not_write(self):
        path = self.fixture("a.csv", [{"email": "a@example.com"}])
        for records in ([{"lead_id": "a", "estado": "vendido"}],
                        [{"lead_id": "", "estado": "nuevo"}],
                        [{"lead_id": "a", "estado": ""}],
                        [{"lead_id": "a", "estado": "nuevo"}, {"lead_id": "a", "estado": "ganado"}],
                        [{"estado": "nuevo"}]):
            with self.subTest(records=records):
                states = self.fixture("estados.csv", records)
                with self.assertRaises(ValueError):
                    leads.review([path], self.output, states)
                self.assertFalse(self.output.exists())

    def test_identical_state_rows_allowed_but_conflicting_notes_rejected(self):
        path = self.fixture("a.csv", [{"name": "Ana"}])
        leads.review([path], self.output)
        lead_id = self.output_rows()[0]["lead_id"]
        record = {"lead_id": lead_id, "estado": "contactado", "notas": "Pendiente"}
        states = self.fixture("states.csv", [record, record])
        leads.review([path], self.output, states, force=True)
        self.assertEqual(self.output_rows()[0]["estado"], "contactado")
        before = self.output.read_bytes()
        self.fixture("states.csv", [record, dict(record, notas="Distinto")])
        with self.assertRaises(ValueError):
            leads.review([path], self.output, states, force=True)
        self.assertEqual(self.output.read_bytes(), before)

    def test_formula_injection_all_output_columns_and_headers(self):
        dangerous = ("=1+1", "+cmd", "-2+3", "@SUM(1)", " \t=1", "\n=1", "\ufeff=1", "\x00=1")
        path = self.fixture("a.csv", [{"name": value, "message": value, "source": value}
                                      for value in dangerous])
        leads.review([path], self.output)
        rows = self.output_rows()
        for value, row in zip(dangerous, rows):
            self.assertEqual(row["nombre"], "'" + value)
            self.assertEqual(row["mensaje"], "'" + value)
            self.assertEqual(json.loads(row["datos_originales"])["name"], value)
        states = self.fixture("states.csv", [{"lead_id": rows[0]["lead_id"], "estado": "nuevo",
                                              "=header": "=formula"}])
        leads.review([path], self.output, states, force=True)
        self.assertEqual(self.output_rows()[0]["'=header"], "'=formula")

    def test_refuse_input_states_existing_and_hardlink_overwrites(self):
        path = self.fixture("a.csv", [{"email": "a@example.com"}])
        original = path.read_bytes()
        for force in (False, True):
            with self.assertRaises(ValueError):
                leads.review([path], path, force=force)
        states = self.fixture("states.csv", [{"lead_id": "unused", "estado": "ganado"}])
        with self.assertRaises(ValueError):
            leads.review([path], states, states, force=True)
        leads.review([path], self.output)
        before = self.output.read_bytes()
        with self.assertRaises(ValueError):
            leads.review([path], self.output)
        self.assertEqual(self.output.read_bytes(), before)
        leads.review([path], self.output, force=True)
        self.assertEqual(path.read_bytes(), original)
        link = self.directory / "hardlink.csv"
        try:
            os.link(path, link)
        except OSError:
            return
        with self.assertRaises(ValueError):
            leads.review([path], link, force=True)
        self.assertEqual(path.read_bytes(), original)

    def test_duplicate_input_refused(self):
        path = self.fixture("a.csv", [{"name": "Ana"}])
        with self.assertRaises(ValueError):
            leads.review([path, path], self.output)
        self.assertFalse(self.output.exists())

    def test_output_symlink_refused(self):
        path = self.fixture("a.csv", [{"name": "Ana"}])
        target = self.fixture("target.csv", [{"name": "No tocar"}])
        before = target.read_bytes()
        try:
            self.output.symlink_to(target)
        except OSError:
            self.skipTest("El sistema no permite crear enlaces simbolicos.")
        with self.assertRaises(ValueError):
            leads.review([path], self.output, force=True)
        self.assertEqual(target.read_bytes(), before)

    def test_input_order_does_not_change_ids(self):
        a = self.fixture("a.csv", [{"email": "a@example.com", "message": "A"}])
        b = self.fixture("b.csv", [{"email": "a@example.com", "message": "B"}])
        leads.review([a, b], self.output)
        first = {r["lead_id"]: r["identificador_contacto"] for r in self.output_rows()}
        leads.review([b, a], self.output, force=True)
        self.assertEqual(first, {r["lead_id"]: r["identificador_contacto"] for r in self.output_rows()})

    def test_invalid_csv_and_encoding_no_output(self):
        for content in (b"", b"email,email\na,b\n", b",name\na,b\n",
                        b"name,email\na\n", b"name\na,b\n", b'name\n"unterminated',
                        b"name\n\xff\n"):
            path = self.directory / "bad.csv"
            path.write_bytes(content)
            with self.subTest(content=content):
                with self.assertRaises((ValueError, csv.Error, UnicodeError)):
                    leads.review([path], self.output)
                self.assertFalse(self.output.exists())

    def test_empty_export(self):
        path = self.fixture("a.csv", [], headers=["name", "email"])
        counts = leads.review([path], self.output)
        self.assertEqual(counts["filas"], 0)
        self.assertEqual(self.output_rows(), [])

    def test_cli_counts_only_no_pii_or_extra_files(self):
        path = self.fixture("privado.csv", [{"name": "Persona Privada", "email": "secreto@example.com",
                                            "message": "Datos sensibles"}])
        result = subprocess.run([sys.executable, "-B", str(SCRIPT), "--input", str(path),
                                 "--output", str(self.output)], capture_output=True, text=True,
                                cwd=self.directory, check=False)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(result.stdout,
                         "filas=1 contactos=1 candidatos=0 identicos=0 seguimientos=0\n")
        self.assertEqual(result.stderr, "")
        self.assertEqual({p.name for p in self.directory.iterdir()}, {path.name, self.output.name})
        stdout, stderr = io.StringIO(), io.StringIO()
        with contextlib.redirect_stdout(stdout), contextlib.redirect_stderr(stderr):
            code = leads.main(["--input", str(path), "--output", str(self.output)])
        self.assertEqual(code, 1)
        self.assertEqual(stdout.getvalue(), "")
        self.assertNotIn("secreto", stderr.getvalue())
        self.assertNotIn(str(self.directory), stderr.getvalue())

    def test_help_spanish(self):
        result = subprocess.run([sys.executable, "-B", str(SCRIPT), "--help"],
                                capture_output=True, text=True, check=False)
        self.assertEqual(result.returncode, 0)
        for phrase in ("LOCAL offline", "--input", "--states", "--force", "no_apto", "transitivamente"):
            self.assertIn(phrase, result.stdout)


if __name__ == "__main__":
    unittest.main()
