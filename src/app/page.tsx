"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Ecosystem from '../components/Ecosystem';
import Differentiator from '../components/Differentiator';
import Capabilities from '../components/Capabilities';
import Certifications from '../components/Certifications';
import IdentityPurpose from '../components/IdentityPurpose';
import FAQ from '../components/FAQ';
import AboutContact from '../components/AboutContact';
import Footer from '../components/Footer';

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white relative overflow-x-hidden w-full max-w-full">
      <Header 
        visible={showNav} 
        onOpenMenu={() => setIsMenuOpen(true)} 
      />
      
      <Hero onVideoEnd={() => setShowNav(true)} showIndicator={showNav} />
      
      {/* 1. EL QUÉ HACEMOS (Portafolio General) */}
      <Services />

      {/* 2. EL ECOSISTEMA (Integración 360) */}
      <Ecosystem />

      {/* 3. EL DIFERENCIADOR (SOCIO ESTRATÉGICO) */}
      <Differentiator />

      {/* 4. EL CÓMO LO HACEMOS (Infraestructura Técnica) */}
      <Capabilities />

      {/* 5. LA GARANTÍA (Escudo de Validación) */}
      <Certifications />
      
      {/* 6. QUIÉNES SOMOS (Misión y Valores) */}
      <IdentityPurpose />

      {/* 6.5. PREGUNTAS FRECUENTES (FAQ) */}
      <FAQ />

      {/* 7. CONTACTO Y CIERRE */}
      <AboutContact />
      <Footer />

      {/* MOBILE MENU OVERLAY - ROOT LEVEL FIX */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#061528] z-[10000] flex flex-col md:hidden w-full h-[100dvh]"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/5">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#008CDE]">Menú Operativo</span>
                <button 
                  onClick={() => setIsMenuOpen(false)} 
                  className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full border border-white/10"
                >
                    <div className="relative w-6 h-6">
                      <div className="absolute top-1/2 left-0 w-6 h-[2px] bg-white rotate-45" />
                      <div className="absolute top-1/2 left-0 w-6 h-[2px] bg-white -rotate-45" />
                    </div>
                </button>
            </div>
            
            <div className="flex-grow flex flex-col items-center justify-center space-y-12 px-6">
              {['Servicios', 'Capacidades', 'Nosotros', 'Contacto'].map((item, idx) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-black uppercase tracking-[0.4em] text-white hover:text-[#008CDE] transition-all"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <div className="p-10 text-center border-t border-white/5 bg-[#081b31]">
                <div className="w-12 h-1 bg-apen-electric mx-auto mb-6"></div>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.5em] mb-2">APEN Strategic Partner</p>
                <p className="text-[12px] font-bold text-white tracking-widest italic">Certeza Operativa 100%</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
