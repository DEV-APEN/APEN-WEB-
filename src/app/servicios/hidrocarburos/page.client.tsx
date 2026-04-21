"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Droplets, ShieldCheck, FileText, BarChart3, Globe, Zap, Settings, Truck, ClipboardCheck, Microscope, Database, BadgeCheck, FileSearch, HardHat } from "lucide-react";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AboutContact from "@/components/AboutContact";

export default function HidrocarburosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header visible={true} onOpenMenu={() => {}} />

      {/* Hero Sector */}
      <section className="relative min-h-[70vh] pt-40 pb-32 flex items-center overflow-hidden bg-[#0B2341]">
        <img
          src="/hidro.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
          alt="Hidrocarburos"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2341] via-[#0B2341]/80 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full mt-20">
          <Link href="/servicios" className="inline-flex items-center gap-2 text-white/50 hover:text-[#008CDE] transition-colors mb-8 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Volver a Unidades Estratégicas</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 rounded-2xl bg-[#008CDE] flex items-center justify-center text-white shadow-2xl shadow-blue-900/50">
                <Droplets size={28} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#4fc3ff]">Expediente 01 / Hidrocarburos</span>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Consultoría regulatoria<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4fc3ff] to-[#008CDE]">en hidrocarburos.</span>
            </h1>
            <p className="max-w-2xl text-blue-50/70 text-sm md:text-base font-medium leading-relaxed mb-10 border-l-2 border-[#008CDE] pl-6">
              CNE, ASEA y SENER. Acompañamos a empresarios del sector desde el pre-registro hasta la operación continua. Gestionamos permisos, cumplimiento ambiental, SASISOPA y defensa ante requerimientos de autoridad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="relative z-30 -mt-12 mx-auto max-w-7xl px-6">
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-10">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <div className="flex items-center gap-5 md:px-4">
                 <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <BadgeCheck className="text-[#008CDE]" size={28} />
                 </div>
                 <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Acreditación Oficial</h4>
                    <p className="text-lg font-black text-[#0B2341] tracking-tight">ID Achilles 00249023</p>
                 </div>
              </div>

              <div className="flex items-center gap-5 md:px-8 pt-6 md:pt-0">
                 <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-[#008CDE]" size={28} />
                 </div>
                 <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Gestión Verificada</h4>
                    <p className="text-lg font-black text-[#0B2341] tracking-tight">Registros OPE & ASEA</p>
                 </div>
              </div>

              <div className="flex items-center gap-5 md:px-8 pt-6 md:pt-0">
                 <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <Globe className="text-[#008CDE]" size={28} />
                 </div>
                 <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Impacto Federal</h4>
                    <p className="text-lg font-black text-[#0B2341] tracking-tight">Cobertura Nacional</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Main Content Blocks */}
      <section className="py-24 md:py-32 bg-white relative z-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 md:mb-24">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#008CDE] mb-4">Intervención Especializada</p>
             <h2 className="text-3xl md:text-5xl font-black text-[#0B2341] uppercase tracking-tighter leading-[0.95]">
                Pilares de <span className="text-slate-400">Regularización</span>
             </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">

            {/* Bloque 1: CNE y ASEA */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-[#f8f9fc] p-10 md:p-14 rounded-[3rem] border border-slate-200/60 relative overflow-hidden group hover:border-blue-200 transition-colors"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10 text-[#008CDE]">
                <Globe size={160} strokeWidth={1} />
              </div>

              <div className="h-16 w-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                 <ShieldCheck className="text-[#008CDE]" size={32} />
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-[#0B2341] uppercase tracking-tighter mb-4 relative z-10">
                 Permisos y cumplimiento<br/>regulatorio ante CNE y ASEA
              </h3>
              <p className="text-slate-500 mb-10 leading-relaxed font-bold text-sm relative z-10">
                 Gestión documental completa desde el pre-registro hasta la operación continua. Acompañamos cada etapa ante las autoridades reguladoras federales.
              </p>

              <ul className="space-y-5 relative z-10">
                {[
                  "Pre-registro y gestión ante Oficialía de Partes Electrónicas (OPE).",
                  "Permisos CNE: Estaciones de Servicio, Autoconsumo, Carburación, Almacenamiento, Distribución y Comercialización.",
                  "Cumplimiento ASEA: MIA, Informe Preventivo, Estudios de Riesgo, NOM-003 y NOM-005.",
                  "Diseño e Implementación de Sistemas SASISOPA.",
                  "Licencias ambientales, COA y pago de supervisión anual.",
                  "Trámites SENER: MISSE previa a EVIS y permisos de importación."
                ].map(i =>(
                   <li key={i} className="flex items-start gap-4">
                     <FileSearch className="text-[#008CDE] shrink-0" size={20}/>
                     <span className="text-sm font-black uppercase tracking-tight text-[#0B2341]">{i}</span>
                   </li>
                ))}
              </ul>
            </motion.div>

            {/* Bloque 2: SENER */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="bg-[#0B2341] p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#008CDE]/20 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 right-0 p-8 opacity-10 text-white">
                <Globe size={160} strokeWidth={1} />
              </div>

              <div className="h-16 w-16 bg-white/10 border border-white/5 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm relative z-10">
                 <BarChart3 className="text-[#4fc3ff]" size={32} />
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4 relative z-10">
                 Trámites SENER e<br/>Impacto Social
              </h3>
              <p className="text-blue-100/70 mb-10 leading-relaxed font-bold text-sm relative z-10">
                 Gestión especializada para proyectos que requieren autorización social y permisos energéticos ante la Secretaría de Energía.
              </p>

              <ul className="space-y-5 relative z-10">
                {[
                  "Manifestación de Impacto Social (MISSE) previa a la Evaluación de Impacto Social (EVIS).",
                  "Gestión de permisos de importación ante SENER.",
                  "Ruta documental para nuevos desarrollos energéticos.",
                  "Soporte técnico ante requerimientos sectoriales."
                ].map(i =>(
                   <li key={i} className="flex items-start gap-4">
                     <ArrowRight className="text-[#4fc3ff] shrink-0 mt-0.5" size={18}/>
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
                  Listado Completo <span className="text-[#008CDE]">de Servicios</span>
                </h2>
                <p className="mt-3 text-sm text-slate-500 font-bold max-w-xl">
                  Catálogo íntegro de soluciones técnicas y regulatorias correspondientes a la unidad de Hidrocarburos.
                </p>
             </div>
             <div className="shrink-0">
                <span className="inline-flex items-center gap-2 px-4 py-2 border border-blue-200 bg-blue-50 text-[#008CDE] text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                   <BadgeCheck size={14} /> ID Achilles Válido
                </span>
             </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Regulacion (COMBINED CNE / ASEA) */}
             <div className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm">
                <h4 className="text-sm font-black uppercase text-[#0B2341] mb-6 border-b border-slate-100 pb-4 flex items-center gap-3">
                   <FileText className="text-[#008CDE]" size={18} /> Permisos (CNE / ASEA)
                </h4>
                <div className="space-y-4 text-sm font-semibold text-slate-600">
                   {["Pre-registro y gestión ante OPE", "Estaciones de servicio y carburación", "Plantas de distribución y almacenamiento", "Licuefacción y regasificación", "Transporte y distribución por ductos", "Licencias ambientales y COA", "Dictámenes NOM-003 y NOM-005"].map(i => (
                     <div key={i} className="flex items-start gap-3">
                       <div className="w-1.5 h-1.5 bg-[#008CDE] rounded-full shrink-0 relative top-2" /> {i}
                     </div>
                   ))}
                </div>
             </div>

             {/* Cumplimiento Ambiental */}
             <div className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm">
                <h4 className="text-sm font-black uppercase text-[#0B2341] mb-6 border-b border-slate-100 pb-4 flex items-center gap-3">
                   <Globe className="text-[#008CDE]" size={18} /> Continuidad Ambiental
                </h4>
                <div className="space-y-4 text-sm font-semibold text-slate-600">
                   {["Manifestación de Impacto Ambiental (MIA)", "Informe Preventivo y Estudios de Riesgo", "Diseño e Implementación de SASISOPA", "Acompañamiento en auditorías", "Informe y dictamen NOM-016", "Registro de pólizas de seguros", "Pago de supervisión anual"].map(i => (
                     <div key={i} className="flex items-start gap-3">
                       <div className="w-1.5 h-1.5 bg-[#008CDE] rounded-full shrink-0 relative top-2" /> {i}
                     </div>
                   ))}
                </div>
             </div>

             {/* Suministros Físicos */}
             <div className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm">
                <h4 className="text-sm font-black uppercase text-[#0B2341] mb-6 border-b border-slate-100 pb-4 flex items-center gap-3">
                   <Truck className="text-[#008CDE]" size={18} /> Infraestructura Operativa
                </h4>
                <div className="space-y-4 text-sm font-semibold text-slate-600">
                   {["Unidades Tanque y Autotanques", "Combustibles (Diesel, Gasolina, Gas)", "Turbinas de gas y combustión interna", "Mantenimiento / Limpieza de tanques", "Montaje y estructuras metálicas", "Obra Civil", "Instalaciones de Gas"].map(i => (
                     <div key={i} className="flex items-start gap-3">
                       <div className="w-1.5 h-1.5 bg-[#008CDE] rounded-full shrink-0 relative top-2" /> {i}
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
