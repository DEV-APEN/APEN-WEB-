"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ZapOff } from 'lucide-react';
import Header from '@/components/Header';

export default function NotFound() {

  return (
    <main className="min-h-screen bg-[#061528] flex flex-col relative overflow-hidden w-full">
      <Header visible={true} onOpenMenu={() => {}} />

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,140,222,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,140,222,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#008CDE]/8 blur-[150px] rounded-full" />
      </div>

      <section className="flex-grow flex items-center justify-center relative z-10 px-6 pt-36 pb-20">
        <div className="max-w-5xl mx-auto text-center">

          {/* === 404 HOLOGRAM GLITCH BLOCK === */}
          <div className="relative inline-block mb-16 select-none cursor-default">

            {/* Glow behind */}
            <div className="absolute inset-0 blur-3xl opacity-20 font-black text-[140px] md:text-[240px] leading-none tracking-tighter text-[#008CDE] pointer-events-none">404</div>

            {/* MAIN text — holographic gradient */}
            <h1 className="relative text-[140px] md:text-[240px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-sky-100 to-[#008CDE] z-10">
              404
            </h1>

            {/* Glitch — Cyan layer */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 text-[140px] md:text-[240px] font-black leading-none tracking-tighter text-cyan-400 z-20 pointer-events-none mix-blend-screen"
              animate={{
                x: [0, -8, 6, -5, 7, 0, 0, -4, 5, 0, 0, 0],
                y: [0, 2, -2, 1, -1, 0, 0, 2, -1, 0, 0, 0],
                clipPath: [
                  'inset(0% 0 85% 0)',
                  'inset(10% 0 50% 0)',
                  'inset(55% 0 8% 0)',
                  'inset(28% 0 42% 0)',
                  'inset(75% 0 3% 0)',
                  'inset(0% 0 85% 0)',
                  'inset(0% 0 85% 0)',
                  'inset(40% 0 22% 0)',
                  'inset(18% 0 58% 0)',
                  'inset(0% 0 85% 0)',
                  'inset(0% 0 85% 0)',
                  'inset(0% 0 85% 0)',
                ],
                opacity: [0.9, 1, 0.9, 1, 0.9, 0, 0, 0.9, 0.9, 0, 0, 0.9],
              }}
              transition={{ repeat: Infinity, duration: 2.4, ease: 'linear' }}
            >
              404
            </motion.div>

            {/* Glitch — Blue layer */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 text-[140px] md:text-[240px] font-black leading-none tracking-tighter text-[#008CDE] z-20 pointer-events-none mix-blend-screen"
              animate={{
                x: [0, 7, -6, 5, -7, 0, 0, 4, -5, 0, 0, 0],
                y: [0, -2, 2, -1, 1, 0, 0, -2, 1, 0, 0, 0],
                clipPath: [
                  'inset(48% 0 5% 0)',
                  'inset(65% 0 12% 0)',
                  'inset(8% 0 58% 0)',
                  'inset(35% 0 28% 0)',
                  'inset(5% 0 78% 0)',
                  'inset(48% 0 5% 0)',
                  'inset(48% 0 5% 0)',
                  'inset(80% 0 3% 0)',
                  'inset(12% 0 52% 0)',
                  'inset(48% 0 5% 0)',
                  'inset(48% 0 5% 0)',
                  'inset(48% 0 5% 0)',
                ],
                opacity: [0.8, 0.9, 0.8, 0.9, 0.8, 0, 0, 0.8, 0.8, 0, 0, 0.8],
              }}
              transition={{ repeat: Infinity, duration: 2.1, ease: 'linear', delay: 0.6 }}
            >
              404
            </motion.div>

            {/* Icon Badge */}
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -top-6 -right-4 md:-right-14 w-16 h-16 bg-[#008CDE]/10 backdrop-blur-md rounded-2xl border border-cyan-400/30 flex items-center justify-center shadow-[0_0_25px_rgba(0,140,222,0.25)]"
            >
              <ZapOff size={26} className="text-cyan-400" />
            </motion.div>
          </div>

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-[0.15em] mb-4">
              Error de <span className="text-[#008CDE]">Red</span>
            </h2>

            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mb-10">
              Señal interrumpida // Ruta no encontrada
            </p>

            <div className="max-w-xl mx-auto mb-14">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#008CDE]/40 to-transparent mb-6" />
              <p className="text-sm md:text-base font-medium text-slate-400 leading-relaxed px-4">
                La ruta operativa solicitada no devuelve una respuesta válida.
                Verifique el enlace o regrese al panel de control principal.
              </p>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#008CDE]/40 to-transparent mt-6" />
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-4 bg-gradient-to-r from-[#0B2341] to-[#05111d] border border-[#008CDE]/30 text-white px-12 py-5 rounded-lg text-xs font-black uppercase tracking-[0.4em] hover:border-[#008CDE] hover:shadow-[0_0_30px_rgba(0,140,222,0.4)] transition-all duration-500 group relative overflow-hidden"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform duration-300" />
              <span>Restablecer Sistema</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FOOTER LOG */}
      <div className="relative z-10 py-10">
        <div className="flex items-center justify-center gap-3 opacity-40">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">
            SISTEMA FUERA DE LÍNEA — APEN-404-SIG
          </span>
        </div>
      </div>
    </main>
  );
}
