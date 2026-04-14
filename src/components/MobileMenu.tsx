"use client";
import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 bg-[#061528]/95 z-[10000] flex flex-col md:hidden w-full h-[100dvh]"
        >
          {/* Background Ambient Accents */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,140,222,0.15),transparent_50%)]" />
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#008CDE] to-transparent opacity-50" />
            {/* Tech grid texture overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 mask-image-[linear-gradient(to_bottom,black,transparent)]" />
          </div>

          {/* Header Mobile Menu */}
          <div className="flex justify-between items-center p-6 border-b border-white/5 relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#008CDE] flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#008CDE] shadow-[0_0_8px_#008CDE] animate-pulse" />
                Interface
              </span>
              <button 
                onClick={onClose} 
                className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-[#008CDE]/20 rounded-xl border border-white/10 transition-all duration-300"
              >
                  <div className="relative w-5 h-5">
                    <div className="absolute top-1/2 left-0 w-5 h-[2px] bg-white rotate-45 transform origin-center shadow-[0_0_5px_white]" />
                    <div className="absolute top-1/2 left-0 w-5 h-[2px] bg-white -rotate-45 transform origin-center shadow-[0_0_5px_white]" />
                  </div>
              </button>
          </div>
          
          {/* Menu Items */}
          <div className="flex-grow flex flex-col items-start justify-center space-y-8 px-8 relative z-10">
            {[
              { name: 'Portada', path: '/', id: '00' },
              { name: 'Servicios', path: '/servicios', id: '01' },
              { name: 'Nosotros', path: '/nosotros', id: '02' },
              { name: 'Normativa', path: '/certificaciones', id: '03' },
              { name: 'Contacto', path: '/contacto', id: '04' }
            ].map((item, i) => (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 + 0.1, type: 'spring', stiffness: 200, damping: 20 }}
                key={item.name}
                className="w-full"
              >
                <Link 
                  href={item.path} 
                  onClick={onClose}
                  className="group flex flex-col w-full relative py-2"
                >
                  <div className="flex items-end gap-5 mb-3">
                    <span className="text-sm font-mono text-[#008CDE]/60 font-black tracking-widest group-hover:text-cyan-400 transition-colors">{item.id}</span>
                    <span className="text-3xl sm:text-4xl font-black uppercase tracking-[0.25em] text-white/90 group-hover:text-white transition-colors duration-300">
                      {item.name}
                    </span>
                  </div>
                  {/* Neon Underline animation */}
                  <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-cyan-400 to-[#008CDE] group-hover:w-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(0,140,222,0.8)]" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Footer Mobile Menu */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="p-8 border-t border-white/5 bg-[#030b14] relative z-10"
          >
              <div className="flex justify-between items-end">
                <div>
                  <div className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-[#008CDE] mb-5 rounded-full shadow-[0_0_10px_rgba(0,140,222,0.8)]"></div>
                  <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.4em] mb-1.5">APEN Strategic Partner</p>
                  <p className="text-[12px] font-black text-white tracking-[0.2em] italic uppercase">Certeza Operativa</p>
                </div>
                <div className="flex gap-3">
                   <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-500">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                   </div>
                </div>
              </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
