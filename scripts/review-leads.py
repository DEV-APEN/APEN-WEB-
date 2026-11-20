"""Revision local de CSV exportados; no accede a Formspree ni a la red."""

import argparse
import csv
import hashlib
import json
from pathlib import Path
import sys
import unicodedata


STATES = ("nuevo", "contactado", "calificado", "cotizado", "ganado", "no_apto")
ALIASES = {
    "nombre": ("nombre", "name", "nombre-empresa"),
    "empresa": ("empresa", "nombre-empresa"),
    "email": ("email", "correo", "correo_electronico", "_replyto"),
    "telefono": ("telefono", "phone", "tel"),
    "mensaje": ("mensaje", "message"),
    "asunto": ("asunto", "subject", "_subject"),
    "fecha": ("fecha", "created_at", "submitted_at", "timestamp", "date", "_date"),
    "fuente": ("origen_formulario", "fuente", "source", "origen", "form_name", "form_id"),
    "servicio_id": ("servicio_id", "servicio-id"),
    "servicio": ("servicio",),
    "motivo_comercial": ("motivo_comercial",),
    "pagina_entrada": ("pagina_entrada",),
    "pagina_envio": ("pagina_envio", "pagina"),
    "utm_source": ("utm_source",),
    "utm_medium": ("utm_medium",),
    "utm_campaign": ("utm_campaign",),
}
FIELDS = (
    "lead_id", "identificador_contacto", "payload_hash", "estado",
    "posible_duplicado", "duplicado_identico", "contacto_repetido", "motivos",
    "nombre", "empresa", "email", "telefono", "mensaje", "asunto", "fecha", "fuente",
    "servicio_id", "servicio", "motivo_comercial", "pagina_entrada", "pagina_envio",
    "utm_source", "utm_medium", "utm_campaign",
    "criterio_fuente", "email_normalizado", "telefono_normalizado",
    "archivo_origen", "fila_origen", "datos_originales",
)


def header_key(value):
    value = unicodedata.normalize("NFKD", value.strip().casefold())
    return "".join(c for c in value if not unicodedata.combining(c))


def digest(value):
    serialized = json.dumps(value, ensure_ascii=True, sort_keys=True, separators=(",", ":"))
    return hashlib.sha256(serialized.encode("utf-8")).hexdigest()


def normalize_email(value):
    # No se eliminan puntos ni etiquetas '+': pueden ser buzones distintos.
    value = unicodedata.normalize("NFC", value.strip()).casefold()
    parts = value.split("@")
    if (len(parts) != 2 or not all(parts)
            or any(c.isspace() or unicodedata.category(c).startswith("C") for c in value)):
        return ""
    return value


def normalize_phone(value):
    value = value.strip()
    if not value or any(c not in "0123456789+().- \t\r\n" for c in value):
        return ""
    compact = "".join(c for c in value if c in "+0123456789")
    if compact.startswith("00"):
        compact = "+" + compact[2:]
    explicit = compact.startswith("+")
    digits = compact[1:] if explicit else compact
    if not digits.isascii() or not digits.isdigit() or not 7 <= len(digits) <= 15:
        return ""
    if len(digits) == 13 and digits.startswith("521"):
        return "+52" + digits[3:]
    if len(digits) == 12 and digits.startswith("52"):
        return "+" + digits
    if len(digits) == 10 and not explicit:
        return "+52" + digits
    return ("+" if explicit else "sin_pais:") + digits


def safe_cell(value):
    value = str(value)
    visible = value.lstrip()
    # Ignorar tambien controles invisibles antes del operador de formula.
    while visible and unicodedata.category(visible[0]).startswith("C"):
        visible = visible[1:].lstrip()
    if value.startswith(("\t", "\r", "\n")) or visible.startswith(("=", "+", "-", "@")):
        return "'" + value
    return value


def read_csv(path):
    with path.open("r", encoding="utf-8-sig", newline="") as stream:
        reader = csv.DictReader(stream, strict=True)
        headers = reader.fieldnames
        if not headers or any(not h.strip() for h in headers):
            raise ValueError("CSV sin encabezados validos.")
        keys = [header_key(h) for h in headers]
        if len(set(keys)) != len(keys):
            raise ValueError("CSV con encabezados repetidos.")
        rows = []
        for number, row in enumerate(reader, start=2):
            if None in row or any(value is None for value in row.values()):
                raise ValueError("CSV con cantidad de columnas inconsistente.")
            rows.append((number, row))
        return headers, rows


def prepare_row(raw, path, number):
    keyed = {header_key(k): v for k, v in raw.items()}
    row = {}
    canonical_names = {}
    for field, aliases in ALIASES.items():
        row[field] = next((keyed[a] for a in aliases if keyed.get(a, "").strip()), "")
        canonical_names.update((alias, field) for alias in aliases)
    explicit = row["fuente"]
    if explicit:
        row["criterio_fuente"] = "campo_explicito"
    elif keyed.get("from_name", "").strip():
        row["fuente"] = keyed["from_name"]
        row["criterio_fuente"] = "from_name"
    elif row["asunto"]:
        row["fuente"] = row["asunto"]
        row["criterio_fuente"] = "asunto"
    else:
        row["fuente"] = "desconocida"
        row["criterio_fuente"] = "sin_evidencia"

    # El payload incluye fecha y todos los campos, pero nunca ruta ni orden.
    # Alias equivalentes no cambian la identidad; conflictos se conservan.
    payload = {}
    for key, value in keyed.items():
        key = canonical_names.get(key, key)
        payload.setdefault(key, set()).add(unicodedata.normalize("NFC", value))
    row["payload_hash"] = digest({k: sorted(v) for k, v in payload.items()})
    row["lead_id"] = "lead_" + row["payload_hash"]
    row["email_normalizado"] = normalize_email(row["email"])
    row["telefono_normalizado"] = normalize_phone(row["telefono"])
    row["archivo_origen"] = path.name
    row["fila_origen"] = str(number)
    row["datos_originales"] = json.dumps(raw, ensure_ascii=True, sort_keys=True)
    row["_file"] = str(path)
    return row


def mark_matches(rows):
    parents = list(range(len(rows)))

    def root(index):
        while parents[index] != index:
            parents[index] = parents[parents[index]]
            index = parents[index]
        return index

    identities = {}
    payloads = {}
    for index, row in enumerate(rows):
        payloads.setdefault(row["payload_hash"], []).append(index)
        for field in ("email_normalizado", "telefono_normalizado"):
            value = row[field]
            if value:
                token = (field, value)
                matches = identities.setdefault(token, [])
                if matches:
                    parents[root(index)] = root(matches[0])
                matches.append(index)

    groups = {}
    for index in range(len(rows)):
        groups.setdefault(root(index), []).append(index)
    for members in groups.values():
        tokens = sorted({(field, rows[i][field]) for i in members
                         for field in ("email_normalizado", "telefono_normalizado")
                         if rows[i][field]})
        if tokens:
            contact_id = "contacto_" + digest(tokens)
        else:
            row = rows[members[0]]
            contact_id = "sin_contacto_" + digest(
                [row["lead_id"], row["_file"], row["fila_origen"]])
        cross_file = len({rows[i]["_file"] for i in members}) > 1
        for index in members:
            row = rows[index]
            identical = len(payloads[row["payload_hash"]]) > 1
            repeated = len(members) > 1
            reasons = []
            if identical:
                reasons.append("payload_identico")
            if repeated:
                reasons.append("contacto_repetido_no_implica_solicitud_duplicada")
                for field, reason in (("email_normalizado", "email_coincidente"),
                                      ("telefono_normalizado", "telefono_coincidente")):
                    if row[field] and len(identities[(field, row[field])]) > 1:
                        reasons.append(reason)
                if cross_file:
                    reasons.append("contacto_entre_archivos")
            row.update(identificador_contacto=contact_id,
                       posible_duplicado="si" if identical or repeated else "no",
                       duplicado_identico="si" if identical else "no",
                       contacto_repetido="si" if repeated else "no",
                       motivos=";".join(reasons))


def load_states(path):
    if path is None:
        return {}, []
    headers, records = read_csv(path)
    if "lead_id" not in headers or "estado" not in headers:
        raise ValueError("El CSV de estados requiere lead_id y estado.")
    manual = [key for key in headers if key not in FIELDS]
    reserved = {header_key(key) for key in FIELDS}
    if any(header_key(key) in reserved for key in manual):
        raise ValueError("Columna manual en conflicto con una columna reservada.")
    safe_headers = [safe_cell(key) for key in list(FIELDS) + manual]
    if len(set(safe_headers)) != len(safe_headers):
        raise ValueError("Encabezados ambiguos tras proteger formulas CSV.")
    states = {}
    for _, record in records:
        lead_id = record["lead_id"].strip()
        state = record["estado"].strip()
        if not lead_id or state not in STATES:
            raise ValueError("Identificador vacio o estado no permitido.")
        tracking = {key: record[key] for key in manual}
        tracking["estado"] = state
        if lead_id in states and states[lead_id] != tracking:
            raise ValueError("Seguimiento contradictorio para un mismo lead_id.")
        states[lead_id] = tracking
    return states, manual


def same_path(first, second):
    return first.resolve() == second.resolve() or (
        first.exists() and second.exists() and first.samefile(second))


def review(inputs, output, states_path=None, force=False):
    inputs = [Path(path).resolve() for path in inputs]
    output = Path(output)
    states_path = Path(states_path).resolve() if states_path is not None else None
    protected = inputs + ([states_path] if states_path is not None else [])
    if output.is_symlink() or any(same_path(output, path) for path in protected):
        raise ValueError("La salida no puede ser una entrada, estados o enlace simbolico.")
    if output.exists() and not force:
        raise ValueError("La salida ya existe; use --force para reemplazarla.")
    for index, path in enumerate(inputs):
        if any(same_path(path, previous) for previous in inputs[:index]):
            raise ValueError("No repita el mismo archivo de entrada.")
    states, manual = load_states(states_path)
    rows = []
    for path in inputs:
        _, records = read_csv(path)
        rows.extend(prepare_row(raw, path, number) for number, raw in records)
    mark_matches(rows)
    for row in rows:
        row["estado"] = "nuevo"
        row.update(states.get(row["lead_id"], {}))

    # Sin temporales, caches, carpetas auxiliares ni archivos de seguimiento.
    with output.open("w" if force else "x", encoding="utf-8-sig", newline="") as stream:
        fields = list(FIELDS) + manual
        writer = csv.writer(stream)
        writer.writerow([safe_cell(field) for field in fields])
        writer.writerows([safe_cell(row.get(field, "")) for field in fields] for row in rows)
    return {
        "filas": len(rows),
        "contactos": len({row["identificador_contacto"] for row in rows}),
        "candidatos": sum(row["posible_duplicado"] == "si" for row in rows),
        "identicos": sum(row["duplicado_identico"] == "si" for row in rows),
        "seguimientos": sum(row["lead_id"] in states for row in rows),
    }


def parser():
    result = argparse.ArgumentParser(
        description="Revision LOCAL offline de exportaciones CSV UTF-8 de leads. "
                    "No consulta Formspree, APIs ni red; no infiere ventas.",
        epilog="Conserva todas las filas y los datos originales en JSON. "
               "Fuente: campo explicito, from_name, asunto o desconocida; "
               "el nombre del archivo no prueba la fuente. "
               "10 digitos sin prefijo se interpretan como Mexico; +52 y +521 son compatibles. "
               "No recorta telefonos extranjeros; extensiones no reconocidas no se agrupan. "
               "Agrupa transitivamente por email/telefono, nunca por nombre ni campos vacios. "
               "El identificador_contacto es estable para el mismo conjunto de identidades; "
               "puede cambiar al incorporar nuevas identidades al grupo. "
               "lead_id deriva del payload completo (incluye fecha si existe, sin inventarla); "
               "payloads identicos comparten lead_id y seguimiento. "
               "Un contacto repetido es solo candidato, aun con distinto asunto/dia. "
               "No elimina ni fusiona solicitudes. Protege formulas CSV con apostrofo. "
               "Solo escribe la salida elegida; su directorio debe existir.")
    result.add_argument("--input", action="append", required=True, metavar="CSV",
                        help="Exportacion local; repetir para contacto y chat.")
    result.add_argument("--output", required=True, metavar="CSV", help="CSV de revision de destino.")
    result.add_argument("--states", metavar="CSV", help="CSV previo con lead_id y estado; conserva "
                        "columnas manuales adicionales. Estados: " + ", ".join(STATES) + ".")
    result.add_argument("--force", action="store_true", help="Reemplaza una salida existente, "
                        "nunca entradas ni el CSV de estados.")
    return result


def main(argv=None):
    args = parser().parse_args(argv)
    try:
        counts = review(args.input, args.output, args.states, args.force)
    except (OSError, UnicodeError, csv.Error, ValueError):
        # No imprimir excepciones: pueden incluir datos personales o rutas privadas.
        print("Error: revise CSV UTF-8, encabezados, estados y rutas; "
              "no se permite sobrescribir entradas/estados ni salida existente sin --force.",
              file=sys.stderr)
        return 1
    print(" ".join(f"{key}={value}" for key, value in counts.items()))
    return 0


if __name__ == "__main__":
    sys.exit(main())
