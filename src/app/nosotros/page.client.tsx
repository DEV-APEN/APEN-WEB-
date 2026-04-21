"use client";

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
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
          <Image
            src="/visual/imagenes/nosotros.jpg"
            alt="Oficinas corporativas de APEN"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
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
              APEN es un consorcio técnico 100% mexicano, registrado y precalificado como proveedor estratégico de PEMEX (ID Achilles 00249023), con presencia en eléctrico, hidrocarburos e ingeniería de procesos bajo una sola dirección ejecutiva.
            </p>
          </div>
        </div>
      </section>

      <AboutWho />

      {/* Leadership Section */}
      <section className="bg-[#061528] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.5em] text-[#008CDE]">Dirección Ejecutiva</span>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tighter text-white md:text-5xl">
              Liderazgo <span className="text-[#008CDE]">Técnico</span>
            </h2>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,140,222,0.12),transparent_50%)]" />
              <div className="relative flex flex-col items-center text-center gap-6">
                <div className="h-20 w-20 rounded-full border-2 border-[#008CDE]/40 bg-[#008CDE]/10 flex items-center justify-center">
                  <span className="text-2xl font-black text-[#008CDE]">IGB</span>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#008CDE] mb-2">Socio Director, Grupo APEN</p>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-white md:text-3xl">Izanami García Bravo</h3>
                </div>
                <div className="max-w-xl space-y-4 text-sm font-medium leading-relaxed text-slate-400 text-left">
                  <p>Abogado litigante especializado en derecho energético. Trayectoria en litigio complejo ante autoridades federales del sector energético e hidrocarburos en México.</p>
                  <p>Fundador de Grupo APEN, Dynavolt y ORMSA — tres empresas registradas como proveedores ante CFE, con presencia en hidrocarburos, infraestructura eléctrica y proyectos de inversión energética a escala nacional.</p>
                  <p>Candidato al grado de MEDEX en IPADE Business School, institución reconocida entre las escuelas de negocios líderes de América Latina.</p>
                  <p className="border-l-2 border-[#008CDE] pl-4 italic text-slate-300">"En energía, el que no entiende la norma pierde el permiso. El que no puede ejecutar, pierde el contrato. Nosotros hacemos las dos."</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  {['CFE', 'ASEA', 'CNE', 'PEMEX', 'ISO 9001/14001/45001'].map((tag) => (
                    <span key={tag} className="rounded-full border border-[#008CDE]/20 bg-[#008CDE]/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-[#008CDE]">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
