"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import MobileMenu from '@/components/MobileMenu';
import { Send, CheckCircle2, Clock, Shield, Zap, FileText } from 'lucide-react';

const benefits = [
  { icon: Clock, text: 'Respuesta en 24 horas hábiles' },
  { icon: Shield, text: 'Evaluación normativa CFE / ASEA / CNE' },
  { icon: Zap, text: 'Identificación de ruta crítica' },
  { icon: FileText, text: 'Resumen ejecutivo sin costo' },
];

export default function DiagnosticoClient() {
  const [showNav, setShowNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNav(true), 250);
    const handleScroll = () => { if (window.scrollY > 50) setShowNav(true); };
    window.addEventListener('scroll', handleScroll);
    return () => { clearTimeout(timer); window.removeEventListener('scroll', handleScroll); };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#040D1D]">
      <Header visible={showNav} onOpenMenu={() => setIsMenuOpen(true)} />

      <section className="relative overflow-hidden px-6 pb-0 pt-32 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,140,222,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20 pb-24 md:pb-32">

            {/* Left: Info */}
            <div className="lg:sticky lg:top-32">
              <span className="mb-6 block text-[10px] font-black uppercase tracking-[0.5em] text-[#008CDE]">
                Evaluación Inicial
              </span>
              <h1 className="mb-8 text-4xl font-black uppercase leading-[0.92] tracking-tighter text-white md:text-5xl lg:text-6xl">
                Diagnóstico de proyecto —
                <span className="block bg-gradient-to-r from-[#008CDE] to-cyan-300 bg-clip-text text-transparent">
                  respuesta en 24 horas.
                </span>
              </h1>
              <p className="mb-10 max-w-md border-l-2 border-[#008CDE] pl-5 text-sm font-medium leading-relaxed text-slate-300">
                Identificamos la viabilidad técnica, regulatoria y financiera de su proyecto energético. Un especialista de APEN se pondrá en contacto en las próximas 24 horas hábiles.
              </p>

              <div className="space-y-4">
                {benefits.map((b) => (
                  <div key={b.text} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#008CDE]/30 bg-[#008CDE]/10">
                      <b.icon size={18} className="text-[#008CDE]" />
                    </div>
                    <span className="text-[12px] font-bold uppercase tracking-tight text-slate-300">{b.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="mb-1 text-[10px] font-black uppercase tracking-[0.35em] text-[#008CDE]">Confidencialidad</p>
                <p className="text-xs font-medium leading-relaxed text-slate-400">
                  Toda información compartida es tratada bajo estricta confidencialidad. No compartimos datos con terceros.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#061528] p-8 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] md:p-10"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,140,222,0.1),transparent_50%)]" />

              {submitted ? (
                <div className="relative flex flex-col items-center justify-center py-16 text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10">
                    <CheckCircle2 size={40} className="text-green-400" />
                  </div>
                  <h3 className="mb-4 text-2xl font-black uppercase tracking-tighter text-white">
                    Solicitud Recibida
                  </h3>
                  <p className="mb-8 max-w-sm text-sm font-medium leading-relaxed text-slate-400">
                    Un especialista de APEN se pondrá en contacto en las próximas 24 horas hábiles.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-3 rounded-full border border-[#008CDE]/30 bg-[#008CDE]/10 px-8 py-4 text-[11px] font-black uppercase tracking-[0.3em] text-[#008CDE] transition-colors hover:bg-[#008CDE]/20"
                  >
                    Volver al inicio
                  </Link>
                </div>
              ) : (
                <div className="relative">
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#008CDE]">Formulario Técnico</p>
                      <h2 className="mt-1 text-xl font-black uppercase tracking-tighter text-white">Datos del Proyecto</h2>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5">
                      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                      <span className="text-[9px] font-bold uppercase tracking-widest text-green-400">Disponible</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Field 1: Name & Company */}
                    <div className="space-y-1.5">
                      <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
                        Nombre y Empresa <span className="text-[#008CDE]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej: Ing. Ricardo Sánchez — Energía Industrial S.A."
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-[12px] font-bold text-white placeholder-slate-600 outline-none transition-all focus:border-[#008CDE]/50 focus:bg-white/8 focus:ring-1 focus:ring-[#008CDE]/30"
                      />
                    </div>

                    {/* Field 2: Email */}
                    <div className="space-y-1.5">
                      <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
                        Correo Corporativo <span className="text-[#008CDE]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="correo@empresa.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-[12px] font-bold text-white placeholder-slate-600 outline-none transition-all focus:border-[#008CDE]/50 focus:bg-white/8 focus:ring-1 focus:ring-[#008CDE]/30"
                      />
                    </div>

                    {/* Field 3: Project Type */}
                    <div className="space-y-1.5">
                      <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
                        Tipo de Proyecto <span className="text-[#008CDE]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          required
                          className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-[11px] font-black uppercase tracking-tight text-white outline-none transition-all focus:border-[#008CDE]/50 focus:ring-1 focus:ring-[#008CDE]/30"
                          defaultValue=""
                        >
                          <option value="" disabled className="bg-[#061528] text-slate-500">Seleccione el área técnica...</option>
                          <option value="electrico" className="bg-[#061528]">Eléctrico — Media / Alta Tensión</option>
                          <option value="hidrocarburos" className="bg-[#061528]">Hidrocarburos — PEMEX / ASEA</option>
                          <option value="normativo" className="bg-[#061528]">Normativo — CNE / SENER / CRE</option>
                          <option value="legal" className="bg-[#061528]">Defensa Legal — Regularización</option>
                          <option value="mantenimiento" className="bg-[#061528]">Mantenimiento Industrial</option>
                        </select>
                        <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-500">
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 1L6 7L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Field 4: Project Scale */}
                    <div className="space-y-1.5">
                      <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
                        Alcance Estimado
                      </label>
                      <div className="relative">
                        <select
                          className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-[11px] font-black uppercase tracking-tight text-white outline-none transition-all focus:border-[#008CDE]/50 focus:ring-1 focus:ring-[#008CDE]/30"
                          defaultValue=""
                        >
                          <option value="" disabled className="bg-[#061528] text-slate-500">Escala aproximada del proyecto...</option>
                          <option value="consulta" className="bg-[#061528]">Consulta técnica puntual</option>
                          <option value="pequeno" className="bg-[#061528]">Proyecto menor — hasta $5M MXN</option>
                          <option value="mediano" className="bg-[#061528]">Proyecto mediano — $5M – $50M MXN</option>
                          <option value="grande" className="bg-[#061528]">Proyecto mayor — +$50M MXN</option>
                        </select>
                        <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-500">
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 1L6 7L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Field 5: Description */}
                    <div className="space-y-1.5">
                      <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
                        Descripción del Requerimiento <span className="text-[#008CDE]">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Describa brevemente su proyecto: ubicación, estado actual, objetivo principal y plazo tentativo de ejecución..."
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-[12px] font-medium text-white placeholder-slate-600 outline-none transition-all focus:border-[#008CDE]/50 focus:bg-white/8 focus:ring-1 focus:ring-[#008CDE]/30 leading-relaxed"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group mt-2 flex w-full items-center justify-center gap-3 rounded-xl bg-[#008CDE] py-4 text-[11px] font-black uppercase tracking-[0.3em] text-white shadow-xl transition-all duration-300 hover:bg-white hover:text-[#0B2341] active:scale-[0.98]"
                    >
                      Enviar Diagnóstico
                      <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot visible={showNav} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
