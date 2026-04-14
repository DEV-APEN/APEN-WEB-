"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import MobileMenu from '@/components/MobileMenu';
import { ShieldCheck, Leaf, HeartPulse, Shield, FileCheck2, Fingerprint, ArrowRight } from 'lucide-react';

const isoCards = [
  {
    id: '9001',
    title: 'ISO 9001',
    subtitle: 'Calidad Organizacional',
    desc: 'Sistema de Gestión de la Calidad. Garantiza la estandarización de procesos, trazabilidad técnica rigurosa y mejora continua para maximizar la satisfacción y certeza del cliente.',
    icon: ShieldCheck,
    color: 'from-blue-600 to-cyan-400'
  },
  {
    id: '14001',
    title: 'ISO 14001',
    subtitle: 'Gestión Ambiental',
    desc: 'Marco internacional de responsabilidad ambiental. Asegura operaciones sostenibles, mitigación de riesgos ecológicos y cumplimiento estricto con los requerimientos ambientales.',
    icon: Leaf,
    color: 'from-emerald-500 to-teal-400'
  },
  {
    id: '45001',
    title: 'ISO 45001',
    subtitle: 'Seguridad Ocupacional',
    desc: 'Sistema de Seguridad y Salud en el Trabajo. Implementa protocolos para la reducción de riesgos laborales, logrando entornos de trabajo de tolerancia cero a accidentes.',
    icon: HeartPulse,
    color: 'from-blue-500 to-indigo-500'
  }
];

const regulatoryLogos = [
  {
    id: 'asea',
    name: 'ASEA',
    subtitle: 'Seguridad industrial, operativa y protección ambiental.',
    image: 'https://www.gob.mx/cms/uploads/article/main_image/16073/logo_asea.jpg',
    accent: 'from-sky-500/20 to-cyan-500/10'
  },
  {
    id: 'cne',
    name: 'CNE',
    subtitle: 'Marco técnico para decisiones regulatorias y energía.',
    image: 'https://static.wixstatic.com/media/d7dd69_b17eb0aa35b74631b02ed91a303012f3~mv2.jpeg/v1/fill/w_568,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7dd69_b17eb0aa35b74631b02ed91a303012f3~mv2.jpeg',
    accent: 'from-slate-400/20 to-slate-200/10'
  },
  {
    id: 'sener',
    name: 'SENER',
    subtitle: 'Política energética, trazabilidad institucional y sectorial.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/SENER_Logo_2019.svg/1280px-SENER_Logo_2019.svg.png',
    accent: 'from-cyan-500/20 to-blue-500/10'
  },
  {
    id: 'stps',
    name: 'STPS',
    subtitle: 'Cumplimiento laboral, seguridad y gestión preventiva.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/STPS_Logo_2019.svg/1280px-STPS_Logo_2019.svg.png',
    accent: 'from-indigo-500/20 to-sky-500/10'
  }
];

export default function CertificacionesPage() {
  const [showNav, setShowNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNav(true), 250);
    const handleScroll = () => {
      if (window.scrollY > 50) setShowNav(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-white">
      <Header visible={showNav} onOpenMenu={() => setIsMenuOpen(true)} />

      <section className="relative overflow-hidden bg-[#061528] px-6 pb-20 pt-32 md:pb-32 md:pt-48">
        <div className="absolute inset-0">
          <img
            src="/visual/imagenes/cer.jpg"
            alt="Certificaciones APEN"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,140,222,0.15),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,21,40,0.9)_0%,rgba(11,35,65,0.8)_46%,rgba(0,140,222,0.2)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-sm border border-[#008CDE]/30 bg-[#008CDE]/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.4em] text-[#008CDE]">
              <Shield size={12} />
              Aval Institucional
            </span>
            <h1 className="mt-8 max-w-[15ch] text-4xl font-black uppercase leading-[0.95] tracking-tighter text-white md:text-6xl lg:text-7xl">
              Certificaciones y <br />
              <span className="bg-gradient-to-r from-[#008CDE] to-cyan-300 bg-clip-text text-transparent">
                Cumplimiento.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl border-l-2 border-[#008CDE] pl-5 text-sm font-bold uppercase tracking-tight text-slate-300 md:text-base">
              APEN opera bajo los más altos estándares internacionales y marcos regulatorios aplicables al sector energético, garantizando certeza técnica, legal y operativa.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-slate-50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="mb-4 text-3xl font-black uppercase leading-tight tracking-tighter text-[#0B2341] md:text-5xl">
                Sistema de Gestión <span className="text-[#008CDE]">Integral</span>
              </h2>
              <p className="max-w-xl text-sm font-semibold uppercase tracking-tight leading-relaxed text-slate-500">
                Nuestros procesos están estandarizados para asegurar calidad, protección ambiental y prevención de riesgos laborales.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {isoCards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="group relative rounded-2xl border border-slate-100 bg-white p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,140,222,0.08)]"
              >
                <div className="mb-8 flex items-start justify-between">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} text-white shadow-lg`}>
                    <card.icon size={28} strokeWidth={1.5} />
                  </div>
                  <img src="/visual/imagenes/isologo.svg" alt="ISO Logo" className="h-10 object-contain" />
                </div>

                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#008CDE]">Normativa</p>
                <h3 className="mb-1 text-3xl font-black tracking-tighter text-[#0B2341]">{card.title}</h3>
                <p className="mb-6 border-b border-slate-100 pb-6 text-xs font-bold uppercase tracking-widest text-slate-400">
                  {card.subtitle}
                </p>

                <p className="text-sm font-medium leading-relaxed text-slate-500">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.4em] text-[#008CDE]">
              Validaciones de Industria
            </span>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tighter text-[#0B2341] md:text-5xl">
              Registros y <span className="text-[#008CDE]">Acreditaciones</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
            <div className="group relative overflow-hidden rounded-3xl bg-[#061528] p-10">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,140,222,0.15),transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10">
                    <FileCheck2 size={24} className="text-white" />
                  </div>
                  <div className="rounded-lg bg-white p-2">
                    <img src="https://toroca.com.mx/wp-content/uploads/2025/12/Logo-Certificado-Achilles.webp" alt="Achilles" className="h-10 object-contain" />
                  </div>
                </div>
                <h3 className="mb-2 text-2xl font-black uppercase tracking-tight text-white">Red Achilles // PEMEX</h3>
                <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-green-500/20 bg-green-500/10 px-3 py-1">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-green-400">Validación Vigente</span>
                </div>
                <p className="mb-8 text-sm font-medium leading-relaxed text-slate-400">
                  Registrados y precalificados como proveedores estratégicos con acreditación integral de capacidades técnicas, financieras y de cumplimiento HSEQ.
                </p>
                <div className="border-t border-white/10 pt-6">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">ID Padrón</p>
                  <p className="text-xl font-black italic tracking-widest text-white">00249023</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-[#0B2341] p-10">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,140,222,0.15),transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10">
                    <Fingerprint size={24} className="text-white" />
                  </div>
                  <div className="rounded-lg bg-white p-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Logo_neutral_de_la_Comisi%C3%B3n_Federal_de_Electricidad.svg" alt="CFE" className="h-10 object-contain" />
                  </div>
                </div>
                <h3 className="mb-2 text-2xl font-black uppercase tracking-tight text-white">Proveeduría CFE</h3>
                <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-green-500/20 bg-green-500/10 px-3 py-1">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-green-400">Validación Operativa</span>
                </div>
                <p className="mb-8 text-sm font-medium leading-relaxed text-slate-400">
                  Acreditación formal para la ejecución de infraestructura y proyectos estratégicos de interconexión con la Comisión Federal de Electricidad.
                </p>
                <div className="border-t border-white/10 pt-6">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">Status</p>
                  <p className="text-xl font-black uppercase italic tracking-widest text-white">Activo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#eef4fa_100%)] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1.18fr)] lg:gap-16">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#0B2341]/8 bg-[#061528] p-8 text-white shadow-[0_30px_90px_-45px_rgba(6,21,40,0.75)] md:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,140,222,0.18),transparent_38%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px] opacity-20" />

              <div className="relative">
                <span className="mb-5 block text-[10px] font-black uppercase tracking-[0.4em] text-[#35b8ff]">
                  Ecosistema Normativo
                </span>
                <h2 className="max-w-[12ch] text-3xl font-black uppercase leading-[0.95] tracking-tighter text-white md:text-5xl">
                  Alineación
                  <br />
                  Reguladora
                </h2>
                <p className="mt-8 max-w-xl border-l-2 border-[#008CDE] pl-5 text-sm font-medium leading-relaxed text-slate-300 md:text-base">
                  Nuestra operación articula exigencias regulatorias, laborales, técnicas y sectoriales para que cada proyecto se ejecute con trazabilidad documental y consistencia frente a auditorías, permisos e inspecciones.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {[
                    'Coordinación documental interinstitucional',
                    'Matrices de cumplimiento por disciplina',
                    'Evidencia auditable por etapa de proyecto',
                    'Protocolos preventivos para operación crítica'
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-[11px] font-black uppercase tracking-[0.18em] text-slate-200 backdrop-blur-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex items-center gap-4 rounded-2xl border border-[#008CDE]/20 bg-[#008CDE]/10 px-5 py-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#008CDE]/30 bg-[#061528] text-[#19a4ff]">
                    <Fingerprint size={28} strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#61c8ff]">
                      Protocolo Base
                    </p>
                    <p className="mt-2 text-lg font-black uppercase tracking-[0.12em] text-white md:text-xl">
                      Cumplimiento transversal para operación energética
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {regulatoryLogos.map((logo, idx) => (
                <motion.article
                  key={logo.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.55 }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_-38px_rgba(11,35,65,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_-36px_rgba(0,140,222,0.28)] md:p-7"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${logo.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                  <div className="relative flex h-full flex-col">
                    <div className="mb-6 flex items-center justify-between gap-3">
                      <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-slate-500">
                        {logo.name}
                      </span>
                      <div className="h-2 w-2 rounded-full bg-[#008CDE]" />
                    </div>

                    <div className="flex min-h-[84px] items-center rounded-[1.25rem] border border-slate-100 bg-white px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                      <img
                        src={logo.image}
                        alt={`Logo ${logo.name}`}
                        className="max-h-16 w-full object-contain object-left"
                      />
                    </div>

                    <div className="mt-6">
                      <h3 className="text-2xl font-black uppercase tracking-tight text-[#0B2341]">
                        {logo.name}
                      </h3>
                      <p className="mt-3 text-sm font-medium leading-relaxed text-slate-500">
                        {logo.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-center md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-3xl font-black uppercase leading-tight tracking-tighter text-[#0B2341] md:text-5xl">
            Confianza <span className="text-[#008CDE]">Institucional</span>
          </h2>
          <p className="mb-12 text-lg font-bold uppercase tracking-tight leading-relaxed text-slate-500 md:text-xl">
            LA SOLIDEZ DE NUESTROS PROTOCOLOS GARANTIZA LA EJECUCIÓN RESPONSABLE, TRAZABLE Y SEGURA EN CADA PROYECTO CRÍTICO QUE ABORDAMOS.
          </p>
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-4 rounded-full bg-[#0B2341] px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em] text-white shadow-xl transition-colors duration-300 hover:bg-[#008CDE]"
          >
            Solicitar Información
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </section>

      <Footer />
      <ChatBot visible={showNav} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
