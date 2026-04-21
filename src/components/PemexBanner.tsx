"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const bullets = [
  'Registro Extendido Achilles · ID 00249023 · Vigente 2026',
  'Contratos ejecutados en suministro y servicios energéticos ante PEMEX',
  '+120 categorías habilitadas: electricidad, hidrocarburos, obra civil, ingeniería',
];

export default function PemexBanner() {
  return (
    <section className="relative overflow-hidden bg-[#040D1D] py-24 md:py-32">
      <div className="absolute inset-0">
        <img
          src="/visual/imagenes/metricas.jpg"
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,13,29,0.98)_0%,rgba(4,13,29,0.75)_50%,rgba(4,13,29,0.98)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,140,222,0.08),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-6 block text-[10px] font-black uppercase tracking-[0.5em] text-[#008CDE]">
              Ecosistema PEMEX
            </span>
            <h2 className="mb-8 text-3xl font-black uppercase leading-[0.92] tracking-tighter text-white md:text-5xl">
              Operamos dentro del ecosistema PEMEX.{' '}
              <span className="text-[#008CDE]">No aspiramos a entrar.</span>
            </h2>
            <p className="mb-10 max-w-xl border-l-2 border-[#008CDE] pl-5 text-sm font-medium leading-relaxed text-slate-400">
              APEN tiene contratos ejecutados con Petróleos Mexicanos y registro Achilles activo en más de 120 categorías certificadas. Eso nos posiciona como operador integral — no como intermediario — en la cadena de valor del sector energético mexicano.
            </p>

            <div className="mb-10 space-y-3">
              {bullets.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#008CDE]" />
                  <span className="text-[12px] font-bold uppercase tracking-tight text-slate-300">{b}</span>
                </div>
              ))}
            </div>

            <Link
              href="/capacidad-ejecutiva"
              className="group inline-flex items-center gap-4 rounded-full bg-[#008CDE] px-10 py-4 text-[11px] font-black uppercase tracking-[0.3em] text-white shadow-xl transition-all duration-300 hover:bg-white hover:text-[#0B2341]"
            >
              Ver Capacidad Ejecutiva
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,140,222,0.12),transparent_50%)]" />
            <div className="relative">
              <div className="mb-8 flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-green-400">Proveedor Activo — No Aspirante</span>
              </div>

              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.4em] text-[#008CDE]">Registro Achilles PEMEX</p>
              <p className="mb-8 text-5xl font-black italic tracking-widest text-white">00249023</p>

              <div className="space-y-4 border-t border-white/10 pt-8">
                {[
                  { label: 'Tipo de Registro', value: 'Extendido — Clase A' },
                  { label: 'Vigencia', value: '25 Noviembre 2026' },
                  { label: 'Categorías activas', value: '+120 habilitadas' },
                  { label: 'Estado', value: 'Contratos ejecutados' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between gap-4 border-b border-white/5 pb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{row.label}</span>
                    <span className="text-[11px] font-black uppercase tracking-tight text-white">{row.value}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-[11px] font-bold italic leading-relaxed text-slate-500">
                "No partimos de cero en ninguna licitación PEMEX. La estructura ya está activa. Los contratos ya se ejecutaron."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
