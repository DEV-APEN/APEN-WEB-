"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('apen-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('apen-cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 w-full z-[60000]"
        >
          {/* Glassmorphism Bar */}
          <div className="bg-[#061528]/95 backdrop-blur-2xl border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.4)]">
            <div className="max-w-7xl mx-auto px-6 py-5 md:py-6 flex flex-col md:flex-row items-center justify-between gap-6">
              
              <div className="flex items-center gap-6">
                <div className="hidden sm:flex w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 items-center justify-center text-blue-400 shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div className="max-w-3xl">
                  <p className="text-[11px] md:text-[13px] text-blue-100/80 leading-relaxed font-medium">
                    <span className="font-black text-[#008CDE] uppercase tracking-[0.3em] text-[9px] md:text-[10px] mr-4 border-r border-white/10 pr-4">Protocolo de Privacidad</span>
                    Utilizamos cookies técnicas y de análisis para optimizar su experiencia en nuestro ecosistema digital. Al continuar navegando, acepta nuestra 
                    <Link href="/politica-de-privacidad" className="text-white hover:text-blue-400 underline mx-1 transition-colors underline-offset-4">Política de Privacidad</Link> 
                    y 
                    <Link href="/terminos-y-condiciones" className="text-white hover:text-blue-400 underline ml-1 transition-colors underline-offset-4">Términos de Servicio</Link>.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 w-full md:w-auto shrink-0">
                <button
                  onClick={acceptCookies}
                  className="flex-grow md:flex-none px-10 py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-[0.25em] rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/40 active:scale-95 whitespace-nowrap"
                >
                  Aceptar y Continuar
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-2 text-white/30 hover:text-white transition-all active:scale-95"
                  aria-label="Cerrar"
                >
                  <X size={20} />
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
