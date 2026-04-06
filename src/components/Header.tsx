"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  visible: boolean;
}

export default function Header({ visible }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={`fixed top-0 z-50 w-full transition-all duration-1000 transform ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="absolute inset-0 bg-white border-b border-gray-100 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 w-full">
            <div className="flex items-center gap-6">
              {/* Burger Button (Mobile Only) - A la IZQUIERDA del logo */}
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.2 focus:outline-none bg-apen-blue/5 rounded-lg border border-apen-blue/10"
              >
                <div className="w-5 h-[2px] bg-apen-blue" />
                <div className="w-5 h-[2px] bg-apen-blue" />
                <div className="w-5 h-[2px] bg-apen-blue" />
              </button>

              {/* Logo */}
              <div className="flex-shrink-0 flex items-center h-16 w-32 md:w-72 transform transition-transform hover:scale-105">
                <Link href="/" className="relative h-full w-full">
                  <Image 
                    src="https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png" 
                    alt="APEN Logo" 
                    fill
                    className="object-contain scale-[1.1] md:scale-[2.2] transform origin-left"
                    priority
                  />
                </Link>
              </div>
            </div>
            
            {/* Navigation en el medio (Desktop) */}
            <nav className="hidden md:flex items-center space-x-16">
              {['Servicios', 'Capacidades', 'Nosotros'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="relative text-[11px] font-black uppercase tracking-[0.2em] text-apen-gray hover:text-apen-electric transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-apen-electric transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Acciones derecha (Desktop) */}
            <div className="hidden md:flex items-center">
                <a 
                  href="#contacto" 
                  className="relative overflow-hidden inline-flex items-center justify-center px-8 py-2.5 bg-apen-blue text-white text-[10px] font-black uppercase tracking-widest rounded-sm transition-all duration-500 hover:bg-apen-electric hover:shadow-[0_0_20px_rgba(0,91,181,0.4)] active:scale-95 group"
                >
                  <span className="relative z-10">Contacto Técnico</span>
                </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - OUTSIDE to avoid header transform issues */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#061528] z-[9999] flex flex-col md:hidden"
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
    </>
  );
}
