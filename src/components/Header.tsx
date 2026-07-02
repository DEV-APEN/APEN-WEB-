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
      <div className="absolute inset-0 bg-white/90 backdrop-blur-md border-b border-slate-100 pointer-events-none"></div>
      
      <div className="relative max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center h-24 w-full relative">
          
          {/* LEFT: Logo Section */}
          <div className="flex items-center gap-10 z-20">
            <Link href="/" className="relative block h-[50px] w-[140px] md:h-[65px] md:w-[260px] transition-transform hover:scale-[1.02]">
              <Image 
                src="/visual/imagenes/apen-logo.png" 
                alt="APEN Logo" 
                fill
                sizes="(max-width: 768px) 140px, 260px"
                className="origin-left scale-[1.5] object-contain object-left md:scale-[1.8]"
                priority
              />
            </Link>
          </div>
          
          {/* RIGHT: Menu Action */}
          <div className="flex items-center gap-6 md:gap-10 z-20">
            {/* UNIVERSAL BURGER BUTTON */}
            <button 
              onClick={onOpenMenu}
              aria-label="Abrir centro de comando"
              className="relative group flex items-center gap-4 bg-[#0B2341] hover:bg-[#008CDE] text-white pl-6 pr-4 py-3 rounded-full transition-all duration-500 shadow-[0_15px_30px_-5px_rgba(11,35,65,0.2)] hover:shadow-[0_15px_30px_-5px_rgba(0,140,222,0.3)] active:scale-95"
            >
              <span className="hidden md:block text-[10px] font-black uppercase tracking-[0.4em] mb-[1px]">Menú</span>
              <div className="flex flex-col items-center justify-center gap-1.5 w-10 h-10 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                <div className="w-4 h-[2px] bg-white rounded-full transition-all group-hover:w-5" />
                <div className="w-4 h-[2px] bg-white rounded-full" />
                <div className="w-4 h-[2px] bg-white rounded-full transition-all group-hover:w-3" />
              </div>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
