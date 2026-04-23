"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  visible: boolean;
  onOpenMenu?: () => void;
}

export default function Header({ visible, onOpenMenu = () => {} }: HeaderProps) {
  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-1000 transform ${
      visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="absolute inset-0 bg-white border-b border-gray-100 pointer-events-none"></div>
      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-20 w-full relative">
          <div className="flex items-center gap-6 z-20 pl-3 md:pl-6">
            {/* Burger Button (Mobile Only) - A la IZQUIERDA del logo */}
            <button 
              onClick={onOpenMenu}
              aria-label="Abrir menú de navegación"
              className="md:hidden relative w-12 h-12 flex flex-col items-center justify-center gap-1.5 focus:outline-none bg-gradient-to-br from-white to-slate-50 hover:from-slate-50 hover:to-slate-100 rounded-xl border border-slate-200 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.05)] transition-all duration-300 group"
            >
              <div className="w-5 h-[2px] bg-[#0B2341] rounded-full transform transition-all duration-300 group-hover:bg-[#008CDE] group-hover:w-6 origin-right" />
              <div className="w-5 h-[2px] bg-[#008CDE] rounded-full transform transition-all duration-300 group-hover:w-4" />
              <div className="w-5 h-[2px] bg-[#0B2341] rounded-full transform transition-all duration-300 group-hover:bg-[#008CDE] group-hover:w-6 origin-left" />
            </button>

            {/* Logo */}
            <div className="flex h-16 flex-shrink-0 items-center overflow-hidden">
              <Link href="/" className="relative block h-[50px] w-[148px] md:h-[72px] md:w-[292px] transition-transform hover:scale-[1.02]">
                <Image 
                  src="https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png" 
                  alt="APEN Logo" 
                  fill
                  className="origin-left scale-[1.45] object-contain object-left md:scale-[1.9]"
                  priority
                />
              </Link>
            </div>
          </div>
          
          {/* Navigation en el medio (Desktop) - PERFECTAMENTE CENTRADO */}
          <nav className="hidden md:flex absolute inset-x-0 items-center justify-center pointer-events-none z-10">
            <div className="pointer-events-auto flex items-center space-x-10">
              {[
                { name: 'Servicios', path: '/servicios' },
                { name: 'Capacidad Ejecutiva', path: '/capacidad-ejecutiva' },
                { name: 'Nosotros', path: '/nosotros' },
                { name: 'Certificaciones', path: '/certificaciones' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="relative text-[11px] font-black uppercase tracking-[0.2em] text-apen-gray hover:text-apen-electric transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-apen-electric transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </nav>

          {/* Acciones derecha (Desktop) */}
          <div className="hidden md:flex items-center gap-3 z-20">
              <a
                href="/diagnostico"
                className="relative overflow-hidden inline-flex items-center justify-center px-6 py-2.5 bg-transparent text-[#008CDE] text-[10px] font-black uppercase tracking-widest rounded-sm border border-[#008CDE]/40 transition-all duration-500 hover:bg-[#008CDE]/10 active:scale-95"
              >
                Diagnóstico
              </a>
              <a
                href="/contacto"
                className="relative overflow-hidden inline-flex items-center justify-center px-8 py-2.5 bg-apen-blue text-white text-[10px] font-black uppercase tracking-widest rounded-sm transition-all duration-500 hover:bg-apen-electric hover:shadow-[0_0_20px_rgba(0,91,181,0.4)] active:scale-95 group"
              >
                <span className="relative z-10">Contacto Técnico</span>
              </a>
          </div>
        </div>
      </div>
    </header>
  );
}
