"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Gavel, ShieldCheck, Scale, Landmark, Briefcase, FileSearch, AlertCircle, CheckSquare, Hammer, Search, ShieldAlert, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AboutContact from "@/components/AboutContact";

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header visible={true} onOpenMenu={() => {}} />

      {/* Hero Sector */}
      <section className="relative min-h-[70vh] pt-40 pb-32 flex items-center overflow-hidden bg-[#0B2341]">
        <img
          src="/legal.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
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
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Contención Técnica</h4>
                    <p className="text-lg font-black text-[#0B2341] tracking-tight">Impacto TFJA y CRE</p>
                 </div>
              </div>

              <div className="flex items-center gap-5 md:px-8 pt-6 md:pt-0">
                 <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-rose-600" size={28} />
                 </div>
                 <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Resolutivos</h4>
                    <p className="text-lg font-black text-[#0B2341] tracking-tight">Levantamiento Inmediato</p>
                 </div>
              </div>

              <div className="flex items-center gap-5 md:px-8 pt-6 md:pt-0">
                 <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                    <Hammer className="text-rose-600" size={28} />
                 </div>
                 <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Ingeniería Correctiva</h4>
                    <p className="text-lg font-black text-[#0B2341] tracking-tight">Planos y Dictámenes</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Main Content Blocks */}
      <section className="py-24 md:py-32 bg-white relative z-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 md:mb-24">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-rose-600 mb-4">Intervención Especializada</p>
             <h2 className="text-3xl md:text-5xl font-black text-[#0B2341] uppercase tracking-tighter leading-[0.95]">
                Pilares de <span className="text-slate-400">Regularización</span>
             </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">

            {/* Bloque 1: Defensa Legal */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-[#f8f9fc] p-10 md:p-14 rounded-[3rem] border border-slate-200/60 relative overflow-hidden group hover:border-rose-200 transition-colors"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10 text-rose-600">
                <Scale size={160} strokeWidth={1} />
              </div>

              <div className="h-16 w-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                 <Scale className="text-rose-600" size={32} />
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-[#0B2341] uppercase tracking-tighter mb-4 relative z-10">
                 Contención y<br/>Defensa Jurídica
              </h3>
              <p className="text-slate-500 mb-10 leading-relaxed font-bold text-sm relative z-10">
                 Litigio y asesoría técnica ante actos de autoridad. Desarrollamos estrategias de defensa sólidas respaldadas por peritajes e ingeniería para garantizar la continuidad operativa.
              </p>

              <ul className="space-y-5 relative z-10">
                {[
                  "Levantamiento inmediato de clausuras.",
                  "Demandas de Nulidad ante el TFJA.",
                  "Solución y respuesta técnica a emplazamientos.",
                  "Gestión de multas y requerimientos ante ASEA/CRE."
                ].map(i =>(
                   <li key={i} className="flex items-start gap-4">
                     <CheckCircle2 className="text-rose-500 shrink-0 bg-white rounded-full" size={20}/>
                     <span className="text-sm font-black uppercase tracking-tight text-[#0B2341]">{i}</span>
                   </li>
                ))}
              </ul>
            </motion.div>

            {/* Bloque 2: Ingeniería Correctiva */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="bg-[#0B2341] p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-900/20 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 right-0 p-8 opacity-10 text-white">
                <Hammer size={160} strokeWidth={1} />
              </div>

              <div className="h-16 w-16 bg-white/10 border border-white/5 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm relative z-10">
                 <Hammer className="text-rose-400" size={32} />
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4 relative z-10">
                 Ingeniería de<br/>Regularización
              </h3>
              <p className="text-blue-100/70 mb-10 leading-relaxed font-bold text-sm relative z-10">
                 Desarrollo de levantamientos e ingeniería As-Built para subsanar omisiones operativas y cumplir al 100% con las Especificaciones Técnicas y Normas Oficiales Mexicanas.
              </p>

              <ul className="space-y-5 relative z-10">
                {[
                  "Ingeniería básica, extendida o de detalle.",
                  "Levantamiento arquitectónico y diagramas unifilares.",
                  "Integración de expedientes SASISOPA y ambientales.",
                  "Elaboración de memorias de cálculo técnicas."
                ].map(i =>(
                   <li key={i} className="flex items-start gap-4">
                     <ArrowRight className="text-rose-400 shrink-0 mt-0.5" size={18}/>
                     <span className="text-sm font-black uppercase tracking-tight text-white">{i}</span>
                   </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Listado Completo */}
      <section className="bg-[#f8f9fc] py-24 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
             <div>
                <h2 className="text-2xl md:text-3xl font-black uppercase text-[#0B2341] tracking-tighter">
                  Listado Completo <span className="text-rose-600">de Servicios</span>
                </h2>
                <p className="mt-3 text-sm text-slate-500 font-bold max-w-xl">
                  Catálogo íntegro de soluciones de regularización y defensa disponibles en nuestro portafolio legal interinstitucional.
                </p>
             </div>
             <div className="shrink-0">
                <span className="inline-block px-4 py-2 border border-rose-200 bg-rose-50 text-rose-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                   Cobertura Nacional
                </span>
             </div>
          </div>

          <div className="bg-white rounded-[2rem] border border-slate-200 p-8 md:p-12 shadow-sm">
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
               {[
                  "Gestión legal interdisciplinaria.",
                  "Levantamiento de clausuras.",
                  "Juicios y demandas de nulidad.",
                  "Respuesta oficial a emplazamientos.",
                  "Regularización integral ante ASEA.",
                  "Regularización integral ante CNE.",
                  "Regularización integral ante SENER.",
                  "Ingeniería básica.",
                  "Ingeniería extendida.",
                  "Ingeniería de detalle orientada a normalización.",
                  "Integración documental para autoridades."
               ].map(i => (
                 <div key={i} className="text-sm font-semibold text-[#0B2341]/80 flex items-start gap-3 py-2 border-b border-slate-50 last:border-0 md:last:border-b-0 pb-3">
                   <div className="w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0 relative top-2" />
                   {i}
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      <AboutContact />
      <Footer />
    </main>
  );
}
