"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import MobileMenu from '@/components/MobileMenu';
import { ShieldCheck, Leaf, HeartPulse, Shield, FileCheck2, Fingerprint, ArrowRight } from 'lucide-react';

const isoCards = [
  {
    id: '9001',
    title: 'ISO 9001',
    subtitle: 'Calidad Organizacional',
    desc: 'Sistema de Gestión de la Calidad. Garantiza la estandarización de procesos, trazabilidad técnica rigurosa y mejora continua para maximizar la satisfacción y certeza del cliente.',
    icon: ShieldCheck,
    color: 'from-blue-600 to-cyan-400'
  },
  {
    id: '14001',
    title: 'ISO 14001',
    subtitle: 'Gestión Ambiental',
    desc: 'Marco internacional de responsabilidad ambiental. Asegura operaciones sostenibles, mitigación de riesgos ecológicos y cumplimiento estricto con los requerimientos ambientales.',
    icon: Leaf,
    color: 'from-emerald-500 to-teal-400'
  },
  {
    id: '45001',
    title: 'ISO 45001',
    subtitle: 'Seguridad Ocupacional',
    desc: 'Sistema de Seguridad y Salud en el Trabajo. Implementa protocolos para la reducción de riesgos laborales, logrando entornos de trabajo de tolerancia cero a accidentes.',
    icon: HeartPulse,
    color: 'from-blue-500 to-indigo-500'
  }
];

export default function CertificacionesPage() {
  const [showNav, setShowNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNav(true), 250);
    const handleScroll = () => {
      if (window.scrollY > 50) setShowNav(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white relative overflow-x-hidden w-full">
      <Header visible={showNav} onOpenMenu={() => setIsMenuOpen(true)} />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#061528] px-6 pb-20 pt-32 md:pb-32 md:pt-48">
        <div className="absolute inset-0">
          <img 
            src="/visual/imagenes/cer.jpg" 
            alt="Certificaciones APEN" 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,140,222,0.15),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,21,40,0.9)_0%,rgba(11,35,65,0.8)_46%,rgba(0,140,222,0.2)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-sm border border-[#008CDE]/30 bg-[#008CDE]/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.4em] text-[#008CDE]">
              <Shield size={12} />
              Aval Institucional
            </span>
            <h1 className="mt-8 max-w-[15ch] text-4xl font-black uppercase leading-[0.95] tracking-tighter text-white md:text-6xl lg:text-7xl">
              Certificaciones y <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008CDE] to-cyan-300">
                Cumplimiento.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl border-l-2 border-[#008CDE] pl-5 text-sm font-bold leading-relaxed text-slate-300 md:text-base uppercase tracking-tight">
              APEN opera bajo los más altos estándares internacionales y marcos regulatorios aplicables al sector energético, garantizando certeza técnica, legal y operativa.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 1: SISTEMA DE GESTIÓN INTEGRAL */}
      <section className="py-24 md:py-32 bg-slate-50 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-[#0B2341] uppercase tracking-tighter leading-tight mb-4">
                Sistema de Gestión <span className="text-[#008CDE]">Integral</span>
              </h2>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-tight leading-relaxed max-w-xl">
                Nuestros procesos están estandarizados para asegurar calidad, protección ambiental y prevención de riesgos laborales.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {isoCards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="group relative bg-white p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(0,140,222,0.08)] transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white shadow-lg`}>
                    <card.icon size={28} strokeWidth={1.5} />
                  </div>
                  <img src="/visual/imagenes/isologo.svg" alt="ISO Logo" className="h-10 object-contain" />
                </div>
                
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#008CDE] mb-2">Normativa</p>
                <h3 className="text-3xl font-black text-[#0B2341] tracking-tighter mb-1">{card.title}</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 pb-6 border-b border-slate-100">{card.subtitle}</p>
                
                <p className="text-sm font-medium text-slate-500 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: REGISTROS SECTORIALES */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#008CDE] mb-4 block">Validaciones de Industria</span>
             <h2 className="text-3xl md:text-5xl font-black text-[#0B2341] uppercase tracking-tighter leading-tight">
               Registros y <span className="text-[#008CDE]">Acreditaciones</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
             {/* Tarjeta Achilles / PEMEX */}
             <div className="relative p-10 rounded-3xl bg-[#061528] overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,140,222,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                   <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/10">
                         <FileCheck2 size={24} className="text-white" />
                      </div>
                      <div className="bg-white p-2 rounded-lg">
                        <img src="https://toroca.com.mx/wp-content/uploads/2025/12/Logo-Certificado-Achilles.webp" alt="Achilles" className="h-10 object-contain" />
                      </div>
                   </div>
                   <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Red Achilles // PEMEX</h3>
                   <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-md">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">Validación Vigente</span>
                   </div>
                   <p className="text-sm font-medium text-slate-400 leading-relaxed mb-8">
                     Registrados y precalificados como proveedores estratégicos con acreditación integral de capacidades técnicas, financieras y de cumplimiento HSEQ.
                   </p>
                   <div className="pt-6 border-t border-white/10">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">ID Padrón</p>
                      <p className="text-xl font-black text-white tracking-widest italic">00249023</p>
                   </div>
                </div>
             </div>

             {/* Tarjeta CFE */}
             <div className="relative p-10 rounded-3xl bg-[#0B2341] overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,140,222,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                   <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/10">
                         <Fingerprint size={24} className="text-white" />
                      </div>
                      <div className="bg-white p-2 rounded-lg">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Logo_neutral_de_la_Comisi%C3%B3n_Federal_de_Electricidad.svg" alt="CFE" className="h-10 object-contain" />
                      </div>
                   </div>
                   <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Proveeduría CFE</h3>
                   <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-md">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">Validación Operativa</span>
                   </div>
                   <p className="text-sm font-medium text-slate-400 leading-relaxed mb-8">
                     Acreditación formal para la ejecución de infraestructura y proyectos estratégicos de interconexión con la Comisión Federal de Electricidad.
                   </p>
                   <div className="pt-6 border-t border-white/10">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Status</p>
                      <p className="text-xl font-black text-white tracking-widest italic uppercase">Activo</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: MARCO REGULATORIO */}
      <section className="py-24 md:py-32 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2">
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#008CDE] mb-4 block">Ecosistema Normativo</span>
                 <h2 className="text-3xl md:text-5xl font-black text-[#0B2341] uppercase tracking-tighter leading-tight mb-8">
                    Alineación <br /> Reguladora
                 </h2>
                 <p className="text-sm font-medium text-slate-500 leading-relaxed mb-8">
                    Nuestra operación garantiza que cada proyecto desarrollado, auditable o implementado cumpla de manera quirúrgica con la compleja red normativa institucional del país.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                    {['ASEA', 'CNE', 'SENER', 'STPS'].map((ente) => (
                       <div key={ente} className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center justify-between">
                          <span className="font-black text-[#0B2341] tracking-widest">{ente}</span>
                          <div className="w-2 h-2 rounded-full bg-[#008CDE]" />
                       </div>
                    ))}
                 </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                 <div className="relative aspect-square w-full max-w-md mx-auto bg-[#061528] rounded-full flex items-center justify-center border-4 border-white shadow-2xl p-10">
                    <div className="absolute inset-0 rounded-full border border-[#008CDE]/30 border-dashed animate-spin-slow" />
                    <div className="text-center">
                       <Fingerprint size={48} className="mx-auto text-[#008CDE] mb-6" />
                       <p className="text-sm font-black text-white uppercase tracking-[0.3em] mb-2">Protocolos de</p>
                       <p className="text-2xl font-black text-[#008CDE] italic uppercase tracking-widest">Cumplimiento</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* SECCIÓN 4: CTA FINAL */}
      <section className="py-24 md:py-32 bg-white text-center">
        <div className="mx-auto max-w-4xl px-6">
           <h2 className="text-3xl md:text-5xl font-black text-[#0B2341] uppercase tracking-tighter leading-tight mb-8">
              Confianza <span className="text-[#008CDE]">Institucional</span>
           </h2>
           <p className="text-lg md:text-xl font-bold text-slate-500 uppercase tracking-tight leading-relaxed mb-12">
              LA SOLIDEZ DE NUESTROS PROTOCOLOS GARANTIZA LA EJECUCIÓN RESPONSABLE, TRAZABLE Y SEGURA EN CADA PROYECTO CRÍTICO QUE ABORDAMOS.
           </p>
           <Link 
             href="/contacto"
             className="inline-flex items-center gap-4 bg-[#0B2341] text-white px-10 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.3em] hover:bg-[#008CDE] transition-colors duration-300 shadow-xl group"
           >
             Solicitar Información 
             <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
           </Link>
        </div>
      </section>

      <Footer />
      <ChatBot visible={showNav} />

      {/* MENÚ MÓVIL */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
