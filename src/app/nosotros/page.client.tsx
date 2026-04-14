"use client";

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import AboutWho from '@/components/AboutWho';
import Differentiator from '@/components/Differentiator';
import Certifications from '@/components/Certifications';
import Capabilities from '@/components/Capabilities';
import AboutContact from '@/components/AboutContact';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import MobileMenu from '@/components/MobileMenu';

export default function NosotrosPage() {
  const [showNav, setShowNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNav(true), 250);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNav(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white relative overflow-x-hidden w-full max-w-full">
      <Header visible={showNav} onOpenMenu={() => setIsMenuOpen(true)} />

      <section className="relative overflow-hidden bg-[#061528] px-6 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="absolute inset-0">
          <img
            src="/visual/imagenes/nosotros.jpg"
            alt="Oficinas corporativas de APEN"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(109,201,255,0.18),transparent_34%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,21,40,0.72)_0%,rgba(11,35,65,0.58)_46%,rgba(0,140,222,0.36)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,15,30,0.28)_0%,rgba(4,15,30,0.12)_38%,rgba(4,15,30,0.42)_100%)]" />
          <div className="absolute inset-0 shadow-[inset_0_-140px_120px_rgba(6,21,40,0.42)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.08]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.35em] text-[#8fdcff] backdrop-blur-sm">
              Perfil Corporativo
            </span>
            <h1 className="mt-6 max-w-[12ch] text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white md:text-6xl">
              Nosotros,
              <span className="block bg-gradient-to-r from-[#61d4ff] via-[#9fe6ff] to-white bg-clip-text text-transparent">
                respaldo técnico real
              </span>
            </h1>
            <p className="mt-6 max-w-2xl border-l-4 border-[#00a6ff] pl-5 text-sm font-medium leading-relaxed text-[#d8e9ff] md:text-base">
              APEN combina ingeniería, cumplimiento regulatorio y ejecución operativa para sostener proyectos energéticos con certeza documental y capacidad de respuesta.
            </p>
          </div>
        </div>
      </section>

      <AboutWho />
      <Differentiator />
      <Capabilities />
      <Certifications />
      <AboutContact />
      <Footer />
      <ChatBot visible={showNav} />

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
