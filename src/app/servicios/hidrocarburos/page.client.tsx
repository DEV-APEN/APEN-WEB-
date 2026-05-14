"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Droplets, ShieldCheck, FileText, BarChart3, Globe, Zap, Settings, Truck, ClipboardCheck, Microscope, Database, BadgeCheck, FileSearch, HardHat } from "lucide-react";
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
          src="/hidro.jpg"
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

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">

            {/* BLOQUE 1: ASEA */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex flex-col bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm relative group hover:shadow-2xl transition-all duration-500"
            >
              <div className="mb-10 flex items-center justify-between">
                <div className="h-16 w-auto">
                  <img src="https://www.gob.mx/cms/uploads/article/main_image/16073/logo_asea.jpg" alt="ASEA" className="h-full object-contain" />
                </div>
                <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#0B2341]/20">
                   <ShieldCheck size={24} />
                </div>
              </div>

              <h3 className="text-2xl font-black text-[#0B2341] uppercase tracking-tight mb-6 leading-tight">
                 Cumplimiento<br/><span className="text-[#008CDE]">ASEA</span>
              </h3>
              
              <p className="text-slate-500 text-[13px] font-bold leading-relaxed mb-10 border-l-2 border-slate-100 pl-4 italic">
                 "Sin multas ni clausuras. Gestión integral para operar sin riesgo regulatorio."
              </p>

              <div className="space-y-10 flex-grow">
                <div>
                   <h4 className="text-[11px] font-black text-[#0B2341] uppercase tracking-widest mb-5 flex items-center gap-3">
                     <div className="h-1.5 w-1.5 rounded-full bg-[#008CDE]" /> Autorizaciones
                   </h4>
                   <ul className="space-y-4">
                     {[
                       "Licencia de Funcionamiento / LAU",
                       "Manifestación de Impacto Ambiental",
                       "Informe Preventivo",
                       "Análisis de Riesgo Hidrocarburos"
                     ].map(i => (
                       <li key={i} className="flex items-center gap-3 text-[12px] font-bold text-slate-700 uppercase tracking-tight">
                         <div className="w-1.5 h-[1px] bg-slate-200" /> {i}
                       </li>
                     ))}
                   </ul>
                </div>

                <div>
                   <h4 className="text-[11px] font-black text-[#0B2341] uppercase tracking-widest mb-5 flex items-center gap-3">
                     <div className="h-1.5 w-1.5 rounded-full bg-[#008CDE]" /> Operación Continua
                   </h4>
                   <ul className="space-y-4">
                     {[
                       "Dictamen de Operación Anual",
                       "Protocolo Respuesta Emergencia",
                       "Cédula de Operación Anual (COA)",
                       "Póliza de Seguro ASEA"
                     ].map(i => (
                       <li key={i} className="flex items-center gap-3 text-[12px] font-bold text-slate-700 uppercase tracking-tight">
                         <div className="w-1.5 h-[1px] bg-slate-200" /> {i}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>

              <div className="mt-12">
                <Link href="/contacto" className="w-full flex items-center justify-center gap-4 px-8 py-5 rounded-2xl bg-[#0B2341] text-white group/btn hover:bg-[#008CDE] transition-all duration-300 shadow-lg shadow-blue-900/10">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em]">Diagnóstico Express</span>
                   <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* BLOQUE 2: CNE */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="flex flex-col bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm relative group hover:shadow-2xl transition-all duration-500"
            >
              <div className="mb-10 flex items-center justify-between">
                <div className="h-16 w-auto overflow-hidden">
                   {/* Logo CNE con mejor visibilidad */}
                   <img 
                    src="https://static.wixstatic.com/media/d7dd69_b17eb0aa35b74631b02ed91a303012f3~mv2.jpeg/v1/fill/w_568,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7dd69_b17eb0aa35b74631b02ed91a303012f3~mv2.jpeg" 
                    alt="CNE" 
                    className="h-full object-contain" 
                  />
                </div>
                <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#0B2341]/20">
                   <FileText size={24} />
                </div>
              </div>

              <h3 className="text-2xl font-black text-[#0B2341] uppercase tracking-tight mb-6 leading-tight">
                 Expediente<br/><span className="text-[#008CDE]">CNE / CRE</span>
              </h3>
              
              <p className="text-slate-500 text-[13px] font-bold leading-relaxed mb-10 border-l-2 border-slate-100 pl-4 italic">
                 "Hidrocarburos y Sector Eléctrico. Permisos y cumplimiento OPE."
              </p>

              <div className="space-y-10 flex-grow">
                <div>
                   <h4 className="text-[11px] font-black text-[#0B2341] uppercase tracking-widest mb-5 flex items-center gap-3">
                     <div className="h-1.5 w-1.5 rounded-full bg-[#008CDE]" /> Pre-registro y Permisos
                   </h4>
                   <ul className="space-y-4">
                     {[
                       "Registro ante la OPE",
                       "Estaciones de Servicio / Autoconsumo",
                       "Plantas de Almacenamiento",
                       "Comercialización y Suministro Eléctrico"
                     ].map(i => (
                       <li key={i} className="flex items-center gap-3 text-[12px] font-bold text-slate-700 uppercase tracking-tight">
                         <div className="w-1.5 h-[1px] bg-slate-200" /> {i}
                       </li>
                     ))}
                   </ul>
                </div>

                <div>
                   <h4 className="text-[11px] font-black text-[#0B2341] uppercase tracking-widest mb-5 flex items-center gap-3">
                     <div className="h-1.5 w-1.5 rounded-full bg-[#008CDE]" /> Obligaciones Periódicas
                   </h4>
                   <ul className="space-y-4">
                     {[
                       "Pago de supervisión anual",
                       "Dictámenes NOM-016-CRE-2016",
                       "Estructura de Capital Social",
                       "Procedencia Lícita del Producto"
                     ].map(i => (
                       <li key={i} className="flex items-center gap-3 text-[12px] font-bold text-slate-700 uppercase tracking-tight">
                         <div className="w-1.5 h-[1px] bg-slate-200" /> {i}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>

              <div className="mt-12">
                <Link href="/contacto" className="w-full flex items-center justify-center gap-4 px-8 py-5 rounded-2xl bg-[#0B2341] text-white group/btn hover:bg-[#008CDE] transition-all duration-300 shadow-lg shadow-blue-900/10">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em]">Diagnóstico Express</span>
                   <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* BLOQUE 3: SENER */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="flex flex-col bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm relative group hover:shadow-2xl transition-all duration-500"
            >
              <div className="mb-10 flex items-center justify-between">
                <div className="h-16 w-auto">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/SENER_Logo_2019.svg/1280px-SENER_Logo_2019.svg.png" alt="SENER" className="h-full object-contain" />
                </div>
                <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#0B2341]/20">
                   <Globe size={24} />
                </div>
              </div>

              <h3 className="text-2xl font-black text-[#0B2341] uppercase tracking-tight mb-6 leading-tight">
                 Expediente<br/><span className="text-[#008CDE]">SENER</span>
              </h3>
              
              <p className="text-slate-500 text-[13px] font-bold leading-relaxed mb-10 border-l-2 border-slate-100 pl-4 italic">
                 "Impacto Social (MISSE) y Permisos de Importación legales."
              </p>

              <div className="space-y-10 flex-grow">
                <div>
                   <h4 className="text-[11px] font-black text-[#0B2341] uppercase tracking-widest mb-5 flex items-center gap-3">
                     <div className="h-1.5 w-1.5 rounded-full bg-[#008CDE]" /> Impacto Social (MISSE)
                   </h4>
                   <ul className="space-y-4">
                     {[
                       "Diagnóstico de viabilidad social",
                       "Gestión ante SENER hasta resolución",
                       "Identificación de grupos de interés",
                       "Seguimiento de compromisos"
                     ].map(i => (
                       <li key={i} className="flex items-center gap-3 text-[12px] font-bold text-slate-700 uppercase tracking-tight">
                         <div className="w-1.5 h-[1px] bg-slate-200" /> {i}
                       </li>
                     ))}
                   </ul>
                </div>

                <div>
                   <h4 className="text-[11px] font-black text-[#0B2341] uppercase tracking-widest mb-5 flex items-center gap-3">
                     <div className="h-1.5 w-1.5 rounded-full bg-[#008CDE]" /> Importaciones
                   </h4>
                   <ul className="space-y-4">
                     {[
                       "Permisos de Importación Petrolíferos",
                       "Importación de Gas Natural",
                       "Coordinación SAT para aduanas",
                       "Abasto propio y comercialización"
                     ].map(i => (
                       <li key={i} className="flex items-center gap-3 text-[12px] font-bold text-slate-700 uppercase tracking-tight">
                         <div className="w-1.5 h-[1px] bg-slate-200" /> {i}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>

              <div className="mt-12">
                <Link href="/contacto" className="w-full flex items-center justify-center gap-4 px-8 py-5 rounded-2xl bg-[#0B2341] text-white group/btn hover:bg-[#008CDE] transition-all duration-300 shadow-lg shadow-blue-900/10">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em]">Diagnóstico Express</span>
                   <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
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
