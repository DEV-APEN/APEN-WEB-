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
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.2 focus:outline-none bg-apen-blue/5 rounded-lg border border-apen-blue/10"
            >
              <div className="w-5 h-[2px] bg-apen-blue" />
              <div className="w-5 h-[2px] bg-apen-blue" />
              <div className="w-5 h-[2px] bg-apen-blue" />
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
            <div className="pointer-events-auto flex items-center space-x-16">
              {[
                { name: 'Servicios', path: '/servicios' },
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
          <div className="hidden md:flex items-center z-20">
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
