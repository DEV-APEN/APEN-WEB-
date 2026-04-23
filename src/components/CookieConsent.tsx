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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-6 right-6 md:left-10 md:right-auto md:max-w-md z-[60000]"
        >
          <div className="bg-[#0B2341] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden group">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/20 transition-colors duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <ShieldCheck size={18} />
                </div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Privacidad & Cookies</h4>
              </div>

              <p className="text-[12px] text-blue-100/70 leading-relaxed mb-6 font-medium">
                Utilizamos tecnologías de seguimiento propias y de terceros para optimizar su experiencia y analizar el tráfico técnico. Al continuar, acepta nuestra 
                <Link href="/politica-de-privacidad" className="text-white hover:text-blue-400 underline mx-1 transition-colors">Política de Privacidad</Link> 
                y los 
                <Link href="/terminos-y-condiciones" className="text-white hover:text-blue-400 underline ml-1 transition-colors">Términos de Servicio</Link>.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={acceptCookies}
                  className="flex-grow bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest py-3 rounded-xl transition-all shadow-lg shadow-blue-900/20 active:scale-95"
                >
                  Aceptar y Continuar
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="px-4 py-3 rounded-xl border border-white/10 text-white/40 hover:text-white hover:bg-white/5 transition-all active:scale-95"
                  aria-label="Cerrar"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
