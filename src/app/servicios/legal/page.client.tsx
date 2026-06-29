"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Gavel, ShieldCheck, Scale, Landmark, Briefcase, FileSearch, AlertCircle, CheckSquare, Hammer, Search, ShieldAlert, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AboutContact from "@/components/AboutContact";
import MobileMenu from "@/components/MobileMenu";

export default function LegalPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Header visible={true} onOpenMenu={() => setIsMenuOpen(true)} />

      {/* Hero Sector */}
      <section className="relative min-h-[70vh] pt-40 pb-32 flex items-center overflow-hidden bg-[#0B2341]">
        <Image
          src="/visual/imagenes/legal.jpg"
          className="object-cover opacity-50 scale-105"
          fill
          sizes="100vw"
          priority
          alt="Defensa Legal y Técnica"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2341] via-[#0B2341]/80 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full mt-20">
          <Link href="/servicios" className="inline-flex items-center gap-2 text-white/50 hover:text-rose-500 transition-colors mb-8 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Volver a Unidades Estratégicas</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 rounded-2xl bg-rose-600 flex items-center justify-center text-white shadow-2xl shadow-rose-900/50">
                <Gavel size={28} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-rose-400">Expediente 03 / Legal</span>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Defensa Legal<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600">& Técnica</span>
            </h1>
            <p className="max-w-2xl text-blue-50/70 text-sm md:text-base font-medium leading-relaxed mb-10 border-l-2 border-rose-500 pl-6">
              Respuesta integral, contención jurídica e ingeniería correctiva para proyectos del sector hidrocarburos y eléctrico en proceso de sanción o normalización técnica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="relative z-30 -mt-12 mx-auto max-w-7xl px-6">
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-10">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <div className="flex items-center gap-5 md:px-4">
                 <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                    <Scale className="text-rose-600" size={28} />
                 </div>
                 <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Casos Resueltos</h3>
                    <p className="text-lg font-black text-[#0B2341] tracking-tight">+500 juicios</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">materia energética</p>
                 </div>
              </div>

              <div className="flex items-center gap-5 md:px-8 pt-6 md:pt-0">
                 <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-rose-600" size={28} />
                 </div>
                 <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Instancias de Litigio</h3>
                    <p className="text-lg font-black text-[#0B2341] tracking-tight">PJF · TFJA</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">amparo y contencioso</p>
                 </div>
              </div>

              <div className="flex items-center gap-5 md:px-8 pt-6 md:pt-0">
                 <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                    <Hammer className="text-rose-600" size={28} />
                 </div>
                 <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Autoridades Reguladoras</h3>
                    <p className="text-lg font-black text-[#0B2341] tracking-tight">ASEA · CNE · SENER</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">defensa especializada</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
      {/* Bloque principal — estilo hidrocarburos */}
      <section className="py-24 md:py-32 bg-[#F8FAFC] relative z-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center mb-16 md:mb-24">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-rose-600 mb-4">Respuesta legal especializada ante actos de autoridad</p>
            <h2 className="text-4xl md:text-6xl font-black text-[#0B2341] uppercase tracking-tighter leading-[0.9]">
              Pilares de <span className="text-slate-400">Regularización</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-200 shadow-sm relative group hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10 text-[#0B2341]">
              <Scale size={200} strokeWidth={1} />
            </div>

            <div className="mb-10 flex flex-col md:flex-row md:items-center gap-6 relative z-10">
              <div className="flex items-center gap-6">
                <div className="h-16 w-16 bg-rose-50 border border-rose-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Scale className="text-rose-600" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-[#0B2341] uppercase tracking-tight leading-none mb-2">
                    Defensa Legal <span className="text-rose-600">Especializada</span>
                  </h3>
                  <p className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-400">
                    Ante ASEA · CNE · SENER · PJF · TFJA
                  </p>
                </div>
              </div>
            </div>

            <p className="text-slate-500 text-sm md:text-base font-bold leading-relaxed mb-12 max-w-4xl relative z-10">
              Respuesta integral y multidisciplinaria ante actos de autoridad en el sector energético — desde la prevención hasta el litigio federal. Combinamos dominio regulatorio, estrategia jurídica y capacidad técnica en un solo equipo.
            </p>

            <div className="grid md:grid-cols-2 gap-12 relative z-10">

              {/* Columna izquierda: Prevención + Crisis */}
              <div className="space-y-10">
                <div>
                  <h4 className="text-sm font-black text-[#0B2341] uppercase tracking-widest mb-2 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-rose-500" /> Prevención y cumplimiento
                  </h4>
                  <p className="text-[11px] text-slate-400 font-bold mb-5 italic">Antes de que llegue la sanción.</p>
                  <ul className="space-y-4">
                    {[
                      "Autorización de impacto ambiental ante ASEA con garantía de resolución — informe preventivo, MIA y activación de afirmativa ficta cuando aplica",
                      "Atención a prevenciones y requerimientos administrativos ante ASEA, CNE y SENER",
                    ].map((n) => (
                      <li key={n} className="flex flex-col gap-1 pb-4 border-b border-slate-50 last:border-0">
                        <span className="text-[13px] font-black text-slate-700 uppercase tracking-tight leading-snug">{n}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-black text-[#0B2341] uppercase tracking-widest mb-2 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-rose-500" /> Crisis activa
                  </h4>
                  <p className="text-[11px] text-slate-400 font-bold mb-5 italic">Cuando la autoridad ya actuó.</p>
                  <ul className="space-y-4">
                    {[
                      { n: "Levantamiento de clausuras y regularización técnico-jurídica inmediata", t: "Urgente" },
                      { n: "Solución y respuesta jurídica a emplazamientos de autoridad", t: "Inmediato" },
                    ].map((i) => (
                      <li key={i.n} className="flex flex-col gap-1 pb-4 border-b border-slate-50 last:border-0">
                        <span className="text-[13px] font-black text-slate-700 uppercase tracking-tight leading-snug">{i.n}</span>
                        <span className="text-[11px] font-bold text-rose-500 tracking-widest uppercase flex items-center gap-1">
                          - Respuesta: {i.t}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Columna derecha: Defensa y litigio */}
              <div className="md:border-l md:border-slate-100 md:pl-12">
                <h4 className="text-sm font-black text-[#0B2341] uppercase tracking-widest mb-2 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-rose-500" /> Defensa y litigio
                </h4>
                <p className="text-[11px] text-slate-400 font-bold mb-5 italic">Representación especializada ante instancias regulatorias y federales.</p>
                <ul className="space-y-4">
                  {[
                    "Representación ante procedimientos administrativos de sanción — ASEA, CNE y SENER",
                    "Defensa jurídica contra multas e impugnación de resoluciones ante ASEA, CNE y SENER",
                    "Juicio de amparo contra actos de autoridad ante el Poder Judicial de la Federación",
                    "Demanda de nulidad ante el Tribunal Federal de Justicia Administrativa",
                  ].map((n) => (
                    <li key={n} className="flex flex-col gap-1 pb-4 border-b border-slate-50 last:border-0">
                      <span className="text-[13px] font-black text-slate-700 uppercase tracking-tight leading-snug">{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              <p className="text-[13px] font-bold text-[#0B2341] max-w-xl">
                ¿Tienes una clausura activa, una sanción sin resolver o un procedimiento administrativo en curso?
              </p>
              <Link href="/contacto" className="shrink-0 flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#0B2341] text-white group/btn hover:bg-rose-600 transition-all duration-300 shadow-lg shadow-rose-900/10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Diagnóstico Express</span>
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Diferenciador — Afirmativa Ficta */}
      <section id="garantia" className="bg-[#0B2341] py-28 md:py-40 relative overflow-hidden">
        <Image
          src="/visual/imagenes/legal2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2341] via-[#0B2341]/85 to-[#0B2341]/50" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-rose-400 mb-8">Ventaja procesal exclusiva</p>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-10 max-w-5xl">
              La única garantía legal en materia{" "}
              <span className="text-rose-400">ambiental energética.</span>
            </h2>

            <div className="w-full h-px bg-white/10 mb-12" />

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <p className="text-blue-100/60 text-sm md:text-base font-bold leading-relaxed">
                  La Ley Federal de Procedimiento Administrativo establece que si ASEA no resuelve una solicitud de autorización de impacto ambiental dentro del plazo legal, la autorización se tiene por otorgada por ministerio de ley — sin posibilidad de negativa posterior. Esto se llama <strong className="text-white">afirmativa ficta</strong>.
                </p>
                <p className="text-blue-100/60 text-sm md:text-base font-bold leading-relaxed mt-6">
                  APEN domina este mecanismo. Con más de 200 autorizaciones gestionadas ante ASEA, conocemos los plazos exactos, los requisitos que activan el procedimiento y la forma de blindar el expediente para que la afirmativa ficta opere sin objeción de la autoridad.
                </p>
                <p className="text-white text-sm md:text-base font-black leading-relaxed mt-8 border-l-2 border-rose-500 pl-6">
                  Para tu proyecto, eso significa una sola cosa: si el expediente entra bien, la autorización está garantizada por ley.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-0">
                {[
                  { value: "+200", label: "Autorizaciones ASEA\ngestionadas" },
                  { value: "100%", label: "Tasa de resolución\nen casos gestionados" },
                  { value: "Garantía", label: "Afirmativa ficta como\nherramienta procesal" },
                ].map(({ value, label }) => (
                  <div key={value} className="flex items-center gap-8 py-7 border-b border-white/10 last:border-0">
                    <p className="text-rose-400 text-4xl font-black tracking-tight shrink-0 w-36">{value}</p>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-widest leading-relaxed whitespace-pre-line">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AboutContact />
      <Footer />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
