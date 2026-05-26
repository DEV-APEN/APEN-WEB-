"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Droplets, ShieldCheck, FileText, BarChart3, Globe, Settings, Truck, ClipboardCheck, Microscope, Database, BadgeCheck, FileSearch, HardHat } from "lucide-react";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AboutContact from "@/components/AboutContact";
import MobileMenu from "@/components/MobileMenu";

export default function HidrocarburosPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Header visible={true} onOpenMenu={() => setIsMenuOpen(true)} />

      {/* Hero Sector */}
      <section className="relative min-h-[70vh] pt-40 pb-32 flex items-center overflow-hidden bg-[#0B2341]">
        <Image
          src="/visual/imagenes/hidro.jpg"
          className="object-cover opacity-50 scale-105"
          fill
          sizes="100vw"
          priority
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
              Un permiso bloqueado, una clausura sin resolver o un proyecto sin ruta regulatoria pueden costar más que cualquier consultoría. Gestionamos el proceso completo ante CNE, ASEA y SENER — con conocimiento de la norma y capacidad de ejecución en el mismo equipo, desde el primer trámite hasta la operación sin observaciones.
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
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Gestión Verificada</h3>
                    <p className="text-lg font-black text-[#0B2341] tracking-tight">+3,000 trámites</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">resueltos</p>
                 </div>
              </div>

              <div className="flex items-center gap-5 md:px-8 pt-6 md:pt-0">
                 <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-[#008CDE]" size={28} />
                 </div>
                 <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Autoridades Cubiertas</h3>
                    <p className="text-lg font-black text-[#0B2341] tracking-tight">CNE · ASEA · SENER</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">cobertura integral</p>
                 </div>
              </div>

              <div className="flex items-center gap-5 md:px-8 pt-6 md:pt-0">
                 <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <Globe className="text-[#008CDE]" size={28} />
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

      {/* Main Content Blocks - Uniform Premium Design */}
      <section className="py-24 md:py-32 bg-[#F8FAFC] relative z-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 md:mb-24">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#008CDE] mb-4 text-center">Intervención Especializada</p>
             <h2 className="text-4xl md:text-6xl font-black text-[#0B2341] uppercase tracking-tighter leading-[0.9] text-center">
                Pilares de <span className="text-slate-400">Regularización</span>
             </h2>
          </div>

          <div className="flex flex-col gap-16">

            {/* BLOQUE 1: ASEA */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-200 shadow-sm relative group hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10 text-[#0B2341]">
                <ShieldCheck size={200} strokeWidth={1} />
              </div>

              <div className="mb-10 flex flex-col md:flex-row md:items-center gap-6 justify-between relative z-10">
                <div className="flex items-center gap-6">
                  <div className="h-20 w-auto bg-white rounded-xl p-2 shadow-sm border border-slate-100">
                    <img src="https://www.gob.mx/cms/uploads/article/main_image/16073/logo_asea.jpg" alt="ASEA" className="h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-[#0B2341] uppercase tracking-tight leading-none mb-2">
                      Cumplimiento <span className="text-[#008CDE]">ASEA</span>
                    </h3>
                    <p className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-400">
                      Sin multas, sin clausuras, sin proyectos frenados
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-slate-500 text-sm md:text-base font-bold leading-relaxed mb-12 max-w-4xl relative z-10">
                Gestionamos cada trámite, permiso y registro ante ASEA para que tú operes sin riesgo regulatorio. Nos hacemos cargo del proceso completo — documentación, gestión ante la autoridad y seguimiento hasta resolución.
              </p>

              <div className="grid md:grid-cols-2 gap-12 relative z-10">
                {/* Sub-bloque 1 */}
                <div>
                   <h4 className="text-sm font-black text-[#0B2341] uppercase tracking-widest mb-2 flex items-center gap-3">
                     <div className="h-2 w-2 rounded-full bg-[#008CDE]" /> Autorizaciones para operar
                   </h4>
                   <p className="text-[11px] text-slate-400 font-bold mb-6 italic">Lo que necesitas antes de arrancar o para regularizarte.</p>
                   <ul className="space-y-4">
                     {[
                       { n: "Licencia de Funcionamiento", t: "10 días" },
                       { n: "Licencia Ambiental Única", t: "10 días" },
                       { n: "Manifestación de Impacto Ambiental", t: "30 a 45 días (depende de la información)" },
                       { n: "Informe Preventivo", t: "15 días" },
                       { n: "Análisis de Riesgo del Sector Hidrocarburos", t: "15 días" }
                     ].map(i => (
                       <li key={i.n} className="flex flex-col gap-1 pb-3 border-b border-slate-50 last:border-0">
                         <span className="text-[13px] font-black text-slate-700 uppercase tracking-tight">{i.n}</span>
                         <span className="text-[11px] font-bold text-[#008CDE] tracking-widest uppercase flex items-center gap-1">
                           - Tiempo estimado: {i.t}
                         </span>
                       </li>
                     ))}
                   </ul>
                </div>

                {/* Sub-bloque 2 */}
                <div>
                   <h4 className="text-sm font-black text-[#0B2341] uppercase tracking-widest mb-2 flex items-center gap-3">
                     <div className="h-2 w-2 rounded-full bg-[#008CDE]" /> Obligaciones de operación continua
                   </h4>
                   <p className="text-[11px] text-slate-400 font-bold mb-6 italic">Lo que necesitas para no caer en incumplimiento mientras operas.</p>
                   <ul className="space-y-4">
                     {[
                       { n: "Dictamen de Operación", t: "Depende del dictaminador y de la instalación" },
                       { n: "Protocolo de Respuesta a Emergencia", t: "12 días" },
                       { n: "Registro de Generación de Residuos Peligrosos y Manejo Especial", t: "10 días" },
                       { n: "Cédula de Operación Anual (COA)", t: "7 días" },
                       { n: "Registro de Póliza de Seguro ASEA", t: "7 días" }
                     ].map(i => (
                       <li key={i.n} className="flex flex-col gap-1 pb-3 border-b border-slate-50 last:border-0">
                         <span className="text-[13px] font-black text-slate-700 uppercase tracking-tight">{i.n}</span>
                         <span className="text-[11px] font-bold text-[#008CDE] tracking-widest uppercase flex items-center gap-1">
                           - Tiempo estimado: {i.t}
                         </span>
                       </li>
                     ))}
                   </ul>
                </div>
              </div>

              <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                <p className="text-[13px] font-bold text-[#0B2341] max-w-xl">
                  ¿Tienes un procedimiento administrativo de sanción, una clausura ASEA pendiente o una autorización sin resolución?
                </p>
                <Link href="/contacto" className="shrink-0 flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#0B2341] text-white group/btn hover:bg-[#008CDE] transition-all duration-300 shadow-lg shadow-blue-900/10">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em]">Diagnóstico Express</span>
                   <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* BLOQUE 2: CNE */}
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
                    <img src="https://static.wixstatic.com/media/d7dd69_b17eb0aa35b74631b02ed91a303012f3~mv2.jpeg/v1/fill/w_568,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7dd69_b17eb0aa35b74631b02ed91a303012f3~mv2.jpeg" alt="CNE" className="h-full object-contain mix-blend-multiply" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-[#0B2341] uppercase tracking-tight leading-none mb-2">
                      Expediente Completo <span className="text-[#008CDE]">CNE</span>
                    </h3>
                    <p className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-400">
                      Permisos y cumplimiento OPE
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                {/* Sub-bloque 1 */}
                <div>
                   <h4 className="text-sm font-black text-[#0B2341] uppercase tracking-widest mb-2 flex items-center gap-3">
                     <div className="h-2 w-2 rounded-full bg-[#008CDE]" /> Antes de operar: Pre-registro y permisos
                   </h4>
                   <p className="text-[11px] text-slate-400 font-bold mb-6 italic">Lo que necesitas para arrancar o regularizarte.</p>
                   
                   <div className="mb-6 pb-4 border-b border-slate-100">
                     <span className="text-[13px] font-black text-slate-700 uppercase tracking-tight block mb-1">Pre-Registro ante la Oficialía de Partes Electrónicas (OPE)</span>
                     <span className="text-[11px] font-bold text-[#008CDE] tracking-widest uppercase flex items-center gap-1">
                       - Tiempo estimado: 5 días
                     </span>
                   </div>

                   <p className="text-[12px] font-bold text-[#0B2341] uppercase mb-4 mt-6">Permisos en materia de hidrocarburos, petrolíferos y petroquímicos:</p>
                   <p className="text-[11px] font-bold text-slate-500 mb-4 bg-slate-50 p-2 rounded">
                     * Depende de la información, puede ser desde 5 días hasta meses.
                   </p>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
                     {[
                       "Estaciones de Servicio y Autoconsumo",
                       "Estaciones de Carburación / Planta de Distribución",
                       "Almacenamiento",
                       "Distribución por ductos y otros medios",
                       "Transporte por ductos y otros medios",
                       "Licuefacción / Regasificación",
                       "Comercialización"
                     ].map(i => (
                       <li key={i} className="flex items-start gap-2 text-[12px] font-bold text-slate-600 leading-tight">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#008CDE] mt-1 shrink-0" /> {i}
                       </li>
                     ))}
                   </ul>

                   <p className="text-[12px] font-bold text-[#0B2341] uppercase mb-4 pt-4 border-t border-slate-100">Permisos en materia eléctrica:</p>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                     {[
                       "Generación, Transmisión y Distribución",
                       "Comercialización y Suministro",
                       "Interconexión y conexión",
                       "Mercado eléctrico"
                     ].map(i => (
                       <li key={i} className="flex items-start gap-2 text-[12px] font-bold text-slate-600 leading-tight">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#008CDE] mt-1 shrink-0" /> {i}
                       </li>
                     ))}
                   </ul>
                </div>

                {/* Sub-bloque 2 */}
                <div className="lg:border-l lg:border-slate-100 lg:pl-12">
                   <h4 className="text-sm font-black text-[#0B2341] uppercase tracking-widest mb-2 flex items-center gap-3">
                     <div className="h-2 w-2 rounded-full bg-[#008CDE]" /> Durante la operación: Obligaciones
                   </h4>
                   <p className="text-[11px] text-slate-400 font-bold mb-6 italic">Lo que necesitas para mantener tu permiso vigente y sin observaciones.</p>
                   <ul className="space-y-4">
                     {[
                       { n: "Pago de supervisión anual", t: "3 días" },
                       { n: "Informe de Resultados de Pruebas de Laboratorio NOM-016-CRE-2016", t: "3 a 4 semanas" },
                       { n: "Dictamen de Calidad de Producto NOM-016-CRE-2016", t: "2 semanas" },
                       { n: "Reporte de estructura de capital social en OPE", t: "5 días" },
                       { n: "Procedencia lícita del producto", t: "5 días" },
                       { n: "Reporte de Quejas en OPE", t: "Depende del número de quejas" },
                       { n: "Reporte de Incidencias en OPE", t: "Depende de la cantidad de incidencias" },
                       { n: "Seguimiento Semanal OPE", t: "Continuo" }
                     ].map(i => (
                       <li key={i.n} className="flex flex-col gap-1 pb-3 border-b border-slate-50 last:border-0">
                         <span className="text-[13px] font-black text-slate-700 uppercase tracking-tight">{i.n}</span>
                         <span className="text-[11px] font-bold text-[#008CDE] tracking-widest uppercase flex items-center gap-1">
                           - Tiempo estimado: {i.t}
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
                <Link href="/contacto" className="shrink-0 flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#0B2341] text-white group/btn hover:bg-[#008CDE] transition-all duration-300 shadow-lg shadow-blue-900/10">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em]">Diagnóstico Express</span>
                   <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* BLOQUE 3: SENER */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-200 shadow-sm relative group hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10 text-[#0B2341]">
                <Globe size={200} strokeWidth={1} />
              </div>

              <div className="mb-10 flex flex-col md:flex-row md:items-center gap-6 justify-between relative z-10">
                <div className="flex items-center gap-6">
                  <div className="h-20 w-auto bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/SENER_Logo_2019.svg/1280px-SENER_Logo_2019.svg.png" alt="SENER" className="h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-[#0B2341] uppercase tracking-tight leading-none mb-2">
                      Expediente Completo <span className="text-[#008CDE]">SENER</span>
                    </h3>
                    <p className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-400">
                      Impacto Social y Permisos de Importación
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 relative z-10">
                {/* Sub-bloque 1 */}
                <div>
                   <h4 className="text-sm font-black text-[#0B2341] uppercase tracking-widest mb-2 flex items-center gap-3">
                     <div className="h-2 w-2 rounded-full bg-[#008CDE]" /> Manifestación de Impacto Social (MISSE)
                   </h4>
                   <span className="inline-flex text-[11px] font-bold text-white bg-[#008CDE] tracking-widest uppercase items-center gap-1 px-3 py-1 rounded mb-4">
                     - Tiempo estimado: 10 a 20 días
                   </span>
                   
                   <p className="text-slate-500 text-[13px] font-bold leading-relaxed mb-6">
                     Antes denominada Evaluación de Impacto Social (EVIS). La MISSE es el instrumento que determina si tu proyecto puede avanzar en el territorio donde planeas operar. Sin ella, ningún permiso energético de gran escala es viable. Una gestión deficiente en esta etapa paraliza inversiones completas.
                   </p>

                   <ul className="space-y-3">
                     {[
                       "Diagnóstico de viabilidad social del proyecto",
                       "Identificación y mapeo de grupos de interés en el área",
                       "Diseño del proceso de consulta y participación social",
                       "Elaboración del documento MISSE (lineamientos SENER)",
                       "Gestión ante SENER hasta resolución",
                       "Seguimiento post-aprobación y gestión de compromisos"
                     ].map(i => (
                       <li key={i} className="flex items-start gap-3 text-[12px] font-bold text-slate-700 uppercase tracking-tight">
                         <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" /> {i}
                       </li>
                     ))}
                   </ul>
                </div>

                {/* Sub-bloque 2 */}
                <div>
                   <h4 className="text-sm font-black text-[#0B2341] uppercase tracking-widest mb-2 flex items-center gap-3">
                     <div className="h-2 w-2 rounded-full bg-[#008CDE]" /> Permisos de Importación
                   </h4>
                   <p className="text-[11px] text-slate-400 font-bold mb-6 italic">Acceso legal a mercados internacionales.</p>
                   
                   <p className="text-slate-500 text-[13px] font-bold leading-relaxed mb-6">
                     Acceso legal a mercados internacionales de hidrocarburos, petrolíferos y energéticos para empresas con operaciones de comercialización o abasto propio.
                   </p>

                   <ul className="space-y-3">
                     {[
                       "Gestión de permisos de importación de petrolíferos",
                       "Gestión de permisos de importación de gas natural",
                       "Seguimiento ante SENER y coordinación con SAT para aduanas"
                     ].map(i => (
                       <li key={i} className="flex items-start gap-3 text-[12px] font-bold text-slate-700 uppercase tracking-tight">
                         <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" /> {i}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>

              <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                <p className="text-[13px] font-bold text-[#0B2341] max-w-xl">
                  ¿Necesitas asegurar la viabilidad social de tu proyecto o un permiso de importación urgente?
                </p>
                <Link href="/contacto" className="shrink-0 flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#0B2341] text-white group/btn hover:bg-[#008CDE] transition-all duration-300 shadow-lg shadow-blue-900/10">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em]">Diagnóstico Express</span>
                   <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Final Strategic CTA - Filtering high-value leads */}
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
                  APEN integra capacidad jurídica, financiera, tecnológica y de ejecución para proyectos de mayor escala.
               </p>
            </div>
            
            <Link 
              href="/servicios" 
              className="inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-[#008CDE] hover:text-[#0B2341] transition-all group shrink-0"
            >
              Conoce nuestra capacidad completa
              <div className="h-10 w-10 rounded-full border border-[#008CDE]/30 flex items-center justify-center group-hover:bg-[#008CDE] group-hover:text-white transition-all">
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
