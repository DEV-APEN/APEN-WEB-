"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  visible: boolean;
  onOpenMenu: () => void;
}

export default function Header({ visible, onOpenMenu }: HeaderProps) {
  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-1000 transform ${
      visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="absolute inset-0 bg-white border-b border-gray-100 pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 w-full">
          <div className="flex items-center gap-6">
            {/* Burger Button (Mobile Only) - A la IZQUIERDA del logo */}
            <button 
              onClick={onOpenMenu}
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
  );
}
