"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Zap, ShieldCheck, HardHat, TowerControl, Briefcase, FileText, FileSearch } from "lucide-react";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AboutContact from "@/components/AboutContact";
import MobileMenu from "@/components/MobileMenu";

export default function EnergiaPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Header visible={true} onOpenMenu={() => setIsMenuOpen(true)} />

      {/* Hero Sector */}
      <section className="relative min-h-[70vh] pt-40 pb-32 flex items-center overflow-hidden bg-[#0B2341]">
        <Image
          src="/visual/imagenes/ener.jpg"
          className="object-cover opacity-50 scale-105"
          fill
          sizes="100vw"
          priority
          alt="Sector Energético"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2341] via-[#0B2341]/80 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full mt-20">
          <Link href="/servicios" className="inline-flex items-center gap-2 text-white/50 hover:text-amber-500 transition-colors mb-8 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Volver a Unidades Estratégicas</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 rounded-2xl bg-amber-500 flex items-center justify-center text-white shadow-2xl shadow-amber-900/50">
                <Zap size={28} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-400">Expediente 02 / Energía</span>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Sector eléctrico<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">consultoría regulatoria.</span>
            </h1>
            <p className="max-w-2xl text-blue-50/70 text-sm md:text-base font-medium leading-relaxed mb-10 border-l-2 border-amber-500 pl-6">
              Ante CNE y CENACE. Gestionamos permisos de generación, interconexión y cumplimiento regulatorio para participantes del mercado eléctrico mexicano.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="relative z-30 -mt-12 mx-auto max-w-7xl px-6">
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-10">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <div className="flex items-center gap-5 md:px-4">
                 <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                    <HardHat className="text-amber-500" size={28} />
                 </div>
                 <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Gestión Verificada</h3>
                    <p className="text-lg font-black text-[#0B2341] tracking-tight">+1,000 trámites</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">eléctricos resueltos</p>
                 </div>
              </div>

              <div className="flex items-center gap-5 md:px-8 pt-6 md:pt-0">
                 <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                    <Zap className="text-amber-500" size={28} />
                 </div>
                 <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Autoridades Cubiertas</h3>
                    <p className="text-lg font-black text-[#0B2341] tracking-tight">CNE · CENACE</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">sector eléctrico</p>
                 </div>
              </div>

              <div className="flex items-center gap-5 md:px-8 pt-6 md:pt-0">
                 <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-amber-500" size={28} />
                 </div>
                 <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Impacto Federal</h3>
                    <p className="text-lg font-black text-[#0B2341] tracking-tight">Cobertura Nacional</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">República Mexicana</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Pilares de Regularización — diseño estilo hidrocarburos */}
      <section className="py-24 md:py-32 bg-[#F8FAFC] relative z-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">

          {/* Encabezado centrado */}
          <div className="text-center mb-16 md:mb-24">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500 mb-4">Intervención Especializada</p>
            <h2 className="text-4xl md:text-6xl font-black text-[#0B2341] uppercase tracking-tighter leading-[0.9]">
              Pilares de <span className="text-slate-400">Regularización</span>
            </h2>
          </div>

          <div className="flex flex-col gap-16">

            {/* BLOQUE 1: CNE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-200 shadow-sm relative group hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10 text-[#0B2341]">
                <FileText size={200} strokeWidth={1} />
              </div>

              <div className="mb-10 flex flex-col md:flex-row md:items-center gap-6 justify-between relative z-10">
                <div className="flex items-center gap-6">
                  <div className="h-20 w-auto bg-white rounded-xl p-2 shadow-sm border border-slate-100 overflow-hidden">
                    <img
                      src="https://static.wixstatic.com/media/d7dd69_b17eb0aa35b74631b02ed91a303012f3~mv2.jpeg/v1/fill/w_568,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7dd69_b17eb0aa35b74631b02ed91a303012f3~mv2.jpeg"
                      alt="CNE"
                      className="h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-[#0B2341] uppercase tracking-tight leading-none mb-2">
                      Permisos & Consultoría <span className="text-amber-500">CNE</span>
                    </h3>
                    <p className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-400">
                      Tramitación, vigencia y cumplimiento ante la Comisión Nacional de Energía
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-slate-500 text-sm md:text-base font-bold leading-relaxed mb-12 max-w-4xl relative z-10">
                Gestionamos cada permiso y trámite ante la CNE para que operes con plena certeza regulatoria — desde el primer permiso hasta el cumplimiento continuo de obligaciones durante toda la vida del proyecto.
              </p>

              <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <div>
                  <h4 className="text-sm font-black text-[#0B2341] uppercase tracking-widest mb-2 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-amber-500" /> Permisos para operar
                  </h4>
                  <p className="text-[11px] text-slate-400 font-bold mb-6 italic">Lo que necesitas antes de iniciar operaciones o para regularizarte.</p>
                  <ul className="space-y-4">
                    {[
                      "Generación eléctrica — renovable, convencional y cogeneración",
                      "Autoabasto y uso propio",
                      "Comercialización y suministro eléctrico",
                      "Importación y exportación de energía eléctrica",
                    ].map((n) => (
                      <li key={n} className="flex flex-col gap-1 pb-3 border-b border-slate-50 last:border-0">
                        <span className="text-[13px] font-black text-slate-700 uppercase tracking-tight">{n}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-black text-[#0B2341] uppercase tracking-widest mb-2 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-amber-500" /> Cumplimiento y vigencia
                  </h4>
                  <p className="text-[11px] text-slate-400 font-bold mb-6 italic">Lo que necesitas para mantener tu permiso activo y sin observaciones.</p>
                  <ul className="space-y-4">
                    {[
                      { n: "Reporte de obligaciones periódicas ante CNE", t: "Continuo" },
                      { n: "Cumplimiento de términos y condiciones del permiso vigente", t: "Permanente" },
                      { n: "Seguimiento ante modificaciones regulatorias del sector", t: "Continuo" },
                      { n: "Modificaciones y actualizaciones de permisos vigentes", t: "A solicitud" },
                    ].map((i) => (
                      <li key={i.n} className="flex flex-col gap-1 pb-3 border-b border-slate-50 last:border-0">
                        <span className="text-[13px] font-black text-slate-700 uppercase tracking-tight">{i.n}</span>
                        <span className="text-[11px] font-bold text-amber-500 tracking-widest uppercase flex items-center gap-1">
                          - Gestión: {i.t}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                <p className="text-[13px] font-bold text-[#0B2341] max-w-xl">
                  ¿Tienes un permiso CNE pendiente de resolución o una observación sin atender?
                </p>
                <Link href="/contacto" className="shrink-0 flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#0B2341] text-white group/btn hover:bg-amber-500 transition-all duration-300 shadow-lg shadow-amber-900/10">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Diagnóstico Express</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* BLOQUE 2: CENACE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-200 shadow-sm relative group hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10 text-[#0B2341]">
                <TowerControl size={200} strokeWidth={1} />
              </div>

              <div className="mb-10 flex flex-col md:flex-row md:items-center gap-6 justify-between relative z-10">
                <div className="flex items-center gap-6">
                  <div className="h-20 w-auto bg-white rounded-xl p-2 shadow-sm border border-slate-100 overflow-hidden">
                    <img src="/Logo_CENACE.png" alt="CENACE" className="h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-[#0B2341] uppercase tracking-tight leading-none mb-2">
                      Interconexión & Mercado <span className="text-amber-500">CENACE</span>
                    </h3>
                    <p className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-400">
                      Acceso al Mercado Eléctrico Mayorista y gestión de interconexión al SEN
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-slate-500 text-sm md:text-base font-bold leading-relaxed mb-12 max-w-4xl relative z-10">
                Representamos a generadores y usuarios calificados ante el CENACE para asegurar el acceso al Sistema Eléctrico Nacional y la participación en el Mercado Eléctrico Mayorista con pleno cumplimiento del Código de Red.
              </p>

              <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <div>
                  <h4 className="text-sm font-black text-[#0B2341] uppercase tracking-widest mb-2 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-amber-500" /> Gestión de interconexión
                  </h4>
                  <p className="text-[11px] text-slate-400 font-bold mb-6 italic">Lo que necesitas para conectarte al Sistema Eléctrico Nacional.</p>
                  <ul className="space-y-4">
                    {[
                      { n: "Estudios de interconexión y conexión al SEN", t: "A solicitud" },
                      { n: "Contratos de Interconexión en Mediana y Alta Tensión", t: "Variable" },
                      { n: "Coordinación con CFE Transmisión y Distribución", t: "Continuo" },
                      { n: "Código de Red 2.0 — representación y cumplimiento", t: "Permanente" },
                    ].map((i) => (
                      <li key={i.n} className="flex flex-col gap-1 pb-3 border-b border-slate-50 last:border-0">
                        <span className="text-[13px] font-black text-slate-700 uppercase tracking-tight">{i.n}</span>
                        <span className="text-[11px] font-bold text-amber-500 tracking-widest uppercase flex items-center gap-1">
                          - Gestión: {i.t}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-black text-[#0B2341] uppercase tracking-widest mb-2 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-amber-500" /> Mercado Eléctrico Mayorista
                  </h4>
                  <p className="text-[11px] text-slate-400 font-bold mb-6 italic">Lo que necesitas para operar como participante del MEM.</p>
                  <ul className="space-y-4">
                    {[
                      { n: "Registro y acceso al MEM como participante calificado", t: "15 a 30 días" },
                      { n: "Estrategia de despacho y ofertas de energía", t: "Continuo" },
                      { n: "Certificados de Energías Limpias (CELs) — gestión y seguimiento", t: "A solicitud" },
                      { n: "Representación técnica ante CENACE en disputas y ajustes", t: "A solicitud" },
                    ].map((i) => (
                      <li key={i.n} className="flex flex-col gap-1 pb-3 border-b border-slate-50 last:border-0">
                        <span className="text-[13px] font-black text-slate-700 uppercase tracking-tight">{i.n}</span>
                        <span className="text-[11px] font-bold text-amber-500 tracking-widest uppercase flex items-center gap-1">
                          - Tiempo estimado: {i.t}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                <p className="text-[13px] font-bold text-[#0B2341] max-w-xl">
                  ¿Necesitas acceder al MEM, gestionar una interconexión o resolver un conflicto ante el CENACE?
                </p>
                <Link href="/contacto" className="shrink-0 flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#0B2341] text-white group/btn hover:bg-amber-500 transition-all duration-300 shadow-lg shadow-amber-900/10">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Diagnóstico Express</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* BLOQUE 3: CFE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-200 shadow-sm relative group hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10 text-[#0B2341]">
                <HardHat size={200} strokeWidth={1} />
              </div>

              <div className="mb-10 flex flex-col md:flex-row md:items-center gap-6 justify-between relative z-10">
                <div className="flex items-center gap-6">
                  <div className="h-20 w-auto bg-white rounded-xl p-2 shadow-sm border border-slate-100 overflow-hidden shrink-0">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Logo_neutral_de_la_Comisi%C3%B3n_Federal_de_Electricidad.svg"
                      alt="CFE"
                      className="h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-[#0B2341] uppercase tracking-tight leading-none mb-2">
                      Ingeniería, Obra & Licitaciones <span className="text-amber-500">CFE</span>
                    </h3>
                    <p className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-400">
                      Ejecución certificada — Padrón CFE No. 4493015 activo
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-slate-500 text-sm md:text-base font-bold leading-relaxed mb-12 max-w-4xl relative z-10">
                Ejecutamos obras de infraestructura eléctrica hasta 230 kV bajo dirección técnica propia y normativas estrictas de la CFE. Con habilitación activa en el Padrón de Contratistas, participamos y ganamos licitaciones de obra pública eléctrica a nivel nacional.
              </p>

              <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <div>
                  <h4 className="text-sm font-black text-[#0B2341] uppercase tracking-widest mb-2 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-amber-500" /> Ingeniería & Obra Eléctrica
                  </h4>
                  <p className="text-[11px] text-slate-400 font-bold mb-6 italic">Ejecución en campo bajo normativas CFE y dirección técnica certificada.</p>
                  <ul className="space-y-4">
                    {[
                      "Subestaciones hasta 230 kV — obra integral",
                      "Tableros de control y distribución eléctrica",
                      "Montaje electromecánico y líneas de transmisión",
                      "Normas DCCSED01 y DCCSET01 — apego normativo total",
                    ].map((n) => (
                      <li key={n} className="flex flex-col gap-1 pb-3 border-b border-slate-50 last:border-0">
                        <span className="text-[13px] font-black text-slate-700 uppercase tracking-tight">{n}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-black text-[#0B2341] uppercase tracking-widest mb-2 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-amber-500" /> Habilitación & Licitaciones CFE
                  </h4>
                  <p className="text-[11px] text-slate-400 font-bold mb-6 italic">Lo que necesitas para participar y adjudicarte contratos de obra pública eléctrica.</p>
                  <ul className="space-y-4">
                    {[
                      { n: "Padrón CFE No. 4493015 — habilitación activa", t: "Vigente" },
                      { n: "Normativa PYCON-SE-01 — cumplimiento certificado", t: "Vigente" },
                      { n: "Licitaciones CFE — estructura, presentación y seguimiento", t: "A solicitud" },
                      { n: "Dirección técnica con ingenieros certificados en campo", t: "Permanente" },
                    ].map((i) => (
                      <li key={i.n} className="flex flex-col gap-1 pb-3 border-b border-slate-50 last:border-0">
                        <span className="text-[13px] font-black text-slate-700 uppercase tracking-tight">{i.n}</span>
                        <span className="text-[11px] font-bold text-amber-500 tracking-widest uppercase flex items-center gap-1">
                          - Estado: {i.t}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                <p className="text-[13px] font-bold text-[#0B2341] max-w-xl">
                  ¿Tienes una obra eléctrica por ejecutar o una licitación CFE en puerta?
                </p>
                <Link href="/contacto" className="shrink-0 flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#0B2341] text-white group/btn hover:bg-amber-500 transition-all duration-300 shadow-lg shadow-amber-900/10">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Diagnóstico Express</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Golpe de Autoridad — Scroll 4 */}
      <section className="relative bg-[#0B2341] py-28 md:py-40 overflow-hidden">
        <Image
          src="/visual/imagenes/ener2.jpg"
          alt=""
          fill
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2341] via-[#0B2341]/75 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500 mb-10">Más que consultoría</p>

            <h2 className="text-5xl md:text-7xl lg:text-[90px] font-black text-white uppercase tracking-tighter leading-[0.88] mb-14 max-w-5xl">
              Cuando el permiso está resuelto,{" "}
              <span className="text-amber-500">APEN puede quedarse.</span>
            </h2>

            <div className="w-full h-px bg-white/10 mb-14" />

            <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-0">

              {/* Subtítulo */}
              <p className="text-blue-100/60 text-sm md:text-base font-bold leading-relaxed max-w-md lg:pr-16 lg:border-r lg:border-white/10 shrink-0">
                Ejecutamos proyectos de infraestructura eléctrica hasta 230 kV y participamos en licitaciones CFE con Padrón No. 4493015 activo. El empresario que llega por un permiso descubre que tiene un socio para todo el proyecto.
              </p>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row gap-8 lg:gap-0 lg:divide-x lg:divide-white/10 lg:pl-16 w-full">
                {[
                  { value: "230 kV", label: "Potencia máxima\nen obra eléctrica" },
                  { value: "4493015", label: "Padrón CFE\nhabilitación activa" },
                  { value: "Nacional", label: "Cobertura\nRepública Mexicana" },
                ].map(({ value, label }) => (
                  <div key={value} className="lg:px-10 first:lg:pl-0">
                    <p className="text-amber-400 text-3xl md:text-4xl font-black tracking-tight mb-2">{value}</p>
                    <p className="text-white/30 text-[10px] font-black uppercase tracking-widest leading-relaxed whitespace-pre-line">{label}</p>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-8 p-8 md:p-12 rounded-[2.5rem] bg-slate-50 border border-slate-200/60"
          >
            <div className="max-w-3xl">
              <h3 className="text-xl md:text-2xl font-black text-[#0B2341] uppercase tracking-tight mb-4">
                ¿Tu proyecto requiere más que consultoría regulatoria?
              </h3>
              <p className="text-sm md:text-base font-medium text-slate-500 leading-relaxed">
                APEN integra capacidad jurídica, financiera, tecnológica y de ejecución para proyectos del sector eléctrico de mayor escala.
              </p>
            </div>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-amber-500 hover:text-[#0B2341] transition-all group shrink-0"
            >
              Conoce nuestra capacidad completa
              <div className="h-10 w-10 rounded-full border border-amber-500/30 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-all">
                <ArrowRight size={18} />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      <AboutContact />
      <Footer />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
