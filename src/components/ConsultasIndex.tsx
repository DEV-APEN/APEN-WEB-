"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowLeftRight, ArrowRight, BatteryCharging, BookOpenCheck, BriefcaseBusiness, Building2, CalendarClock, ChartNoAxesCombined, CircleDollarSign, ClipboardList, Compass, Database, Factory, FileCheck2, FileSearch, Flame, Fuel, Gauge, Gavel, HandCoins, HardHat, IdCard, Landmark, Leaf, ListChecks, LockOpen, Network, OctagonAlert, PlugZap, RadioTower, ReceiptText, Recycle, RefreshCw, Scale, Search, ShieldAlert, ShieldCheck, Sun, TestTubeDiagonal, TriangleAlert, Zap } from "lucide-react";
import type { Consultation } from "@/data/consultas";

const consultationIcons = {
  "que-es-pronagas": ShieldAlert,
  "lista-l-cne-timbrado": ReceiptText,
  "que-es-el-sasisopa": FileCheck2,
  "como-abrir-una-gasolinera": Building2,
  "permiso-cne-gasolinera": Fuel,
  "que-es-la-cne": Landmark,
  "permiso-cre-sigue-vigente": RefreshCw,
  "que-es-la-mia": Leaf,
  "amparo-multa-asea": Scale,
  "bitacoras-asea": ClipboardList,
  "que-es-el-codigo-de-red": Network,
  "cenace-y-mem": RadioTower,
  "que-es-la-asea": ShieldCheck,
  "cuanto-cuesta-abrir-gasolinera": CircleDollarSign,
  "cesion-permiso-cne": ArrowLeftRight,
  "controles-volumetricos-sat": Database,
  "clausura-gasolinera-asea": OctagonAlert,
  "permiso-generacion-electrica": Zap,
  "checklist-cumplimiento-gasolinera": ListChecks,
  "convocatoria-permisos-generacion-2026": CalendarClock,
  "permiso-autoconsumo-electrico": Gauge,
  "que-es-la-sener": Compass,
  "que-es-el-informe-preventivo": FileSearch,
  "estudio-riesgo-ambiental": TriangleAlert,
  "permiso-expendio-petroliferos": Fuel,
  "reabrir-gasolinera-clausurada": LockOpen,
  "calidad-combustibles-cne": TestTubeDiagonal,
  "nom-005-asea-2016": HardHat,
  "renagas-vs-pronagas": ArrowLeftRight,
  "permisos-gas-lp": Flame,
  "registro-achilles": IdCard,
  "permiso-distribucion-gas-lp": Factory,
  "permiso-carburacion-gas-lp": Fuel,
  "cogeneracion-permiso-cne": Recycle,
  "generacion-distribuida": Sun,
  "almacenamiento-energia-permiso": BatteryCharging,
  "cumplimiento-codigo-de-red": Activity,
  "interconexion-cenace": PlugZap,
  "impugnar-resolucion-cne": Gavel,
  "juicio-tfja-energia": Landmark,
  "financiamiento-gasolinera": HandCoins,
  "project-finance-energia": ChartNoAxesCombined,
  "proveedor-pemex": BriefcaseBusiness,
};

export default function ConsultasIndex({ items }: { items: Consultation[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase("es-MX");

  const filteredItems = useMemo(() => {
    if (!normalizedQuery) return items;
    return items.filter((item) =>
      [item.title, item.sector, item.extract, ...item.keywords]
        .join(" ")
        .toLocaleLowerCase("es-MX")
        .includes(normalizedQuery),
    );
  }, [items, normalizedQuery]);

  return (
    <>
      <section className="border-b border-slate-200 bg-white pb-14 pt-28 md:pb-20 md:pt-32">
        <div className="mx-auto max-w-7xl px-6">
          <nav aria-label="Migas de pan" className="mx-auto mb-6 max-w-[1180px] text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <Link href="/" className="hover:text-[#00AEEF]">Inicio</Link>
            <span aria-hidden="true" className="px-2">/</span>
            <span className="text-[#0D3D8E]">Energy Explica</span>
          </nav>
          <div className="relative mx-auto aspect-[2/1] w-full max-w-[1180px] overflow-hidden bg-white">
            <Image
              src="/visual/imagenes/energy-explica-banner.webp"
              alt="Energy Explica, guía de regulación energética de APEN"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1180px"
              className="object-contain"
            />
          </div>

          <div className="mx-auto mt-2 max-w-3xl text-center">
            <h1 className="sr-only">Energy Explica</h1>
            <p className="text-lg font-bold text-slate-600 md:text-2xl">
              Respuestas claras a la regulación energética de México.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
              Fichas técnicas para entender obligaciones, riesgos y rutas de acción ante ASEA, CNE y SAT.
            </p>

            <label className="relative mx-auto mt-8 block max-w-2xl">
              <span className="sr-only">Buscar una consulta regulatoria</span>
              <Search aria-hidden="true" className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#00AEEF]" size={20} />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Busca SASISOPA, PRONAGAS o timbrado..."
                className="h-14 w-full rounded-lg border border-slate-200 bg-white pl-14 pr-5 text-sm font-semibold text-[#0D3D8E] shadow-[0_12px_35px_rgba(11,35,65,0.08)] outline-none transition focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/10"
              />
            </label>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F9FC] py-16 md:py-24" aria-labelledby="consultas-title">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between gap-6 border-b border-slate-200 pb-6">
            <div>
              <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.35em] text-[#00AEEF]">Índice técnico</span>
              <h2 id="consultas-title" className="text-3xl font-black uppercase tracking-tight text-[#0D3D8E] md:text-4xl">Consultas prioritarias</h2>
            </div>
            <BookOpenCheck aria-hidden="true" className="hidden text-[#00AEEF] md:block" size={34} />
          </div>

          {filteredItems.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3">
              {filteredItems.map((item) => {
                const Icon = consultationIcons[item.slug as keyof typeof consultationIcons] ?? BookOpenCheck;
                return (
                  <article key={item.slug} className="flex min-h-[330px] flex-col rounded-lg border border-slate-200 bg-white p-7 shadow-[0_16px_45px_rgba(11,35,65,0.06)]">
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EAF8FF] text-[#00AEEF]">
                        <Icon aria-hidden="true" size={24} />
                      </div>
                      <span className={`rounded-full border px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em] ${
                        item.badgeTone === "critical"
                          ? "border-rose-200 bg-rose-50 text-rose-600"
                          : "border-sky-200 bg-sky-50 text-sky-700"
                      }`}>
                        {item.badge}
                      </span>
                    </div>
                    <p className="mb-3 text-[9px] font-black uppercase tracking-[0.24em] text-slate-400">{item.code} · {item.sector}</p>
                    <h3 className="text-xl font-black leading-tight text-[#0D3D8E]">{item.shortTitle}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-500">{item.extract}</p>
                    {!item.revisado && (
                      <p className="mt-5 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.14em] text-amber-700">
                        <TriangleAlert aria-hidden="true" size={14} /> Pendiente de revisión oficial
                      </p>
                    )}
                    <Link href={`/consultas/${item.slug}`} className="mt-auto inline-flex items-center gap-2 pt-8 text-[10px] font-black uppercase tracking-[0.22em] text-[#0D3D8E] transition-colors hover:text-[#00AEEF]">
                      Abrir ficha <ArrowRight aria-hidden="true" size={16} />
                    </Link>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
              <p className="font-bold text-[#0D3D8E]">No encontramos una ficha con ese término.</p>
              <p className="mt-2 text-sm text-slate-500">Prueba con “ASEA”, “gasolina”, “SASISOPA” o “timbrado”.</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#0D3D8E] py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#72D5FF]">Gabinete Técnico APEN</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-black uppercase leading-tight text-white md:text-3xl">Una ficha orienta. Un diagnóstico define la ruta.</h2>
          </div>
          <Link href="/contacto" className="inline-flex min-h-12 items-center gap-3 rounded-lg bg-[#00AEEF] px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#0D3D8E] transition-colors hover:bg-white hover:text-[#0D3D8E]">
            Contactar al Gabinete Técnico <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
