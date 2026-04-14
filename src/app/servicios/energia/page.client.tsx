"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Zap, ShieldCheck, HardHat, TowerControl, Layers3, Briefcase, FileText, FileSearch, PlugZap } from "lucide-react";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AboutContact from "@/components/AboutContact";

export default function EnergiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header visible={true} onOpenMenu={() => {}} />

      {/* Hero Sector */}
      <section className="relative min-h-[70vh] pt-40 pb-32 flex items-center overflow-hidden bg-[#0B2341]">
        <img
          src="/ener.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
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
              Potencia e<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Infraestructura</span>
            </h1>
            <p className="max-w-2xl text-blue-50/70 text-sm md:text-base font-medium leading-relaxed mb-10 border-l-2 border-amber-500 pl-6">
              Diseño, desarrollo y cumplimiento normativo para subestaciones, líneas de conducción eléctrica y gestión ante el Mercado Eléctrico Nacional.
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
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Acreditación Oficial</h4>
                    <p className="text-lg font-black text-[#0B2341] tracking-tight">Padrón CFE 4493015</p>
                 </div>
              </div>

              <div className="flex items-center gap-5 md:px-8 pt-6 md:pt-0">
                 <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                    <Zap className="text-amber-500" size={28} />
                 </div>
                 <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Ingeniería & Obra</h4>
                    <p className="text-lg font-black text-[#0B2341] tracking-tight">Potencia Hasta 230kV</p>
                 </div>
              </div>

              <div className="flex items-center gap-5 md:px-8 pt-6 md:pt-0">
                 <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-amber-500" size={28} />
                 </div>
                 <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Desarrollo Aprobado</h4>
                    <p className="text-lg font-black text-[#0B2341] tracking-tight">Normativa PYCON-SE-01</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Main Content Blocks */}
      <section className="py-24 md:py-32 bg-white relative z-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 md:mb-24">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-600 mb-4">Intervención Especializada</p>
             <h2 className="text-3xl md:text-5xl font-black text-[#0B2341] uppercase tracking-tighter leading-[0.95]">
                Pilares de <span className="text-slate-400">Regularización</span>
             </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">

            {/* Bloque 1: CFE e Ingeniería */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-[#f8f9fc] p-10 md:p-14 rounded-[3rem] border border-slate-200/60 relative overflow-hidden group hover:border-amber-200 transition-colors"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10 text-amber-600">
                <TowerControl size={160} strokeWidth={1} />
              </div>

              <div className="h-16 w-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                 <HardHat className="text-amber-500" size={32} />
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-[#0B2341] uppercase tracking-tighter mb-4 relative z-10">
                 Ingeniería y<br/>Obra Eléctrica
              </h3>
              <p className="text-slate-500 mb-10 leading-relaxed font-bold text-sm relative z-10">
                 Ejecución técnica respaldada en el Padrón CFE para el despliegue de infraestructura crítica en media y alta tensión.
              </p>

              <ul className="space-y-5 relative z-10">
                {[
                  "Ingeniería y obra de subestaciones hasta 230 kV.",
                  "Líneas de transmisión y tableros de control.",
                  "Cumplimiento en especificaciones DCCSED01.",
                  "Lineamientos constructivos PYCON-SE-01."
                ].map(i =>(
                   <li key={i} className="flex items-start gap-4">
                     <PlugZap className="text-amber-500 shrink-0" size={20}/>
                     <span className="text-sm font-black uppercase tracking-tight text-[#0B2341]">{i}</span>
                   </li>
                ))}
              </ul>
            </motion.div>

            {/* Bloque 2: CNE y SENER Regulaciones */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="bg-[#0B2341] p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 right-0 p-8 opacity-10 text-white">
                <Briefcase size={160} strokeWidth={1} />
              </div>

              <div className="h-16 w-16 bg-white/10 border border-white/5 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm relative z-10">
                 <FileText className="text-amber-400" size={32} />
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4 relative z-10">
                 Mercado Eléctrico<br/>Mayorista y SENER
              </h3>
              <p className="text-blue-100/70 mb-10 leading-relaxed font-bold text-sm relative z-10">
                 Soporte regulatorio y validación documental para proyectos de generación e intercambio dentro del Sistema Eléctrico Nacional.
              </p>

              <ul className="space-y-5 relative z-10">
                {[
                  "Gestión de permisos de Generación y Suministro.",
                  "Trámites de Interconexión Eléctrica Comercial.",
                  "Elaboración de MISSE previo a EVIS.",
                  "Permisos de Importación ante la SENER."
                ].map(i =>(
                   <li key={i} className="flex items-start gap-4">
                     <ArrowRight className="text-amber-400 shrink-0 mt-0.5" size={18}/>
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
                  Listado Completo <span className="text-amber-500">de Servicios</span>
                </h2>
                <p className="mt-3 text-sm text-slate-500 font-bold max-w-xl">
                  Catálogo íntegro de soluciones técnicas y regulatorias correspondientes a la unidad del Sector Energético.
                </p>
             </div>
             <div className="shrink-0">
                <span className="inline-flex items-center gap-2 px-4 py-2 border border-amber-200 bg-amber-50 text-amber-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                   <ShieldCheck size={14} /> Padrón CFE 4493015
                </span>
             </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Regulacion CNE Electrica */}
             <div className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm">
                <h4 className="text-sm font-black uppercase text-[#0B2341] mb-6 border-b border-slate-100 pb-4 flex items-center gap-3">
                   <Zap className="text-amber-500" size={18} /> Mercado Eléctrico
                </h4>
                <div className="space-y-4 text-sm font-semibold text-slate-600">
                   {["Generación eléctrica", "Transmisión eléctrica", "Distribución eléctrica", "Suministro e interconexión", "Comercialización"].map(i => (
                     <div key={i} className="flex items-start gap-3">
                       <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0 relative top-2" /> {i}
                     </div>
                   ))}
                </div>
             </div>

             {/* Evaluacion SENER */}
             <div className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm">
                <h4 className="text-sm font-black uppercase text-[#0B2341] mb-6 border-b border-slate-100 pb-4 flex items-center gap-3">
                   <FileSearch className="text-amber-500" size={18} /> Impacto Social y Permisos
                </h4>
                <div className="space-y-4 text-sm font-semibold text-slate-600">
                   {["MISSE previa a EVIS", "Gestión de permisos de importación", "Ruta documental para nuevos desarrollos", "Alineación para evaluación social", "Acompañamiento en revisiones preventivas"].map(i => (
                     <div key={i} className="flex items-start gap-3">
                       <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0 relative top-2" /> {i}
                     </div>
                   ))}
                </div>
             </div>

             {/* Obra Civil Electrica CFE */}
             <div className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm">
                <h4 className="text-sm font-black uppercase text-[#0B2341] mb-6 border-b border-slate-100 pb-4 flex items-center gap-3">
                   <TowerControl className="text-amber-500" size={18} /> Ingeniería Electromecánica
                </h4>
                <div className="space-y-4 text-sm font-semibold text-slate-600">
                   {["Ingeniería y obra hasta 230 kV", "Licitaciones y cumplimiento CFE", "Montaje electromecánico", "Subestaciones y líneas de conducción", "Obra civil y mantenimiento asociado"].map(i => (
                     <div key={i} className="flex items-start gap-3">
                       <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0 relative top-2" /> {i}
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      <AboutContact />
      <Footer />
    </main>
  );
}
