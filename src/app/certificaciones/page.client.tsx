"use client";

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import MobileMenu from '@/components/MobileMenu';
import { ShieldCheck, Leaf, HeartPulse, Shield, FileCheck2, Fingerprint, ArrowRight, X, ExternalLink, FileText, ZoomIn } from 'lucide-react';

const isoCards = [
  {
    id: '9001',
    title: 'ISO 9001',
    subtitle: 'Calidad Organizacional',
    desc: 'Sistema de Gestión de la Calidad. Garantiza la estandarización de procesos, trazabilidad técnica rigurosa y mejora continua para maximizar la satisfacción y certeza del cliente.',
    icon: ShieldCheck,
    color: 'from-blue-600 to-cyan-400',
    pdfFile: '/certificados/iso9001.pdf',
    pdfLabel: 'Certificado ISO 9001:2015'
  },
  {
    id: '14001',
    title: 'ISO 14001',
    subtitle: 'Gestión Ambiental',
    desc: 'Marco internacional de responsabilidad ambiental. Asegura operaciones sostenibles, mitigación de riesgos ecológicos y cumplimiento estricto con los requerimientos ambientales.',
    icon: Leaf,
    color: 'from-emerald-500 to-teal-400',
    pdfFile: '/certificados/iso14001.pdf',
    pdfLabel: 'Certificado ISO 14001:2015'
  },
  {
    id: '45001',
    title: 'ISO 45001',
    subtitle: 'Seguridad Ocupacional',
    desc: 'Sistema de Seguridad y Salud en el Trabajo. Implementa protocolos para la reducción de riesgos laborales, logrando entornos de trabajo de tolerancia cero a accidentes.',
    icon: HeartPulse,
    color: 'from-blue-500 to-indigo-500',
    pdfFile: '/certificados/iso45001.pdf',
    pdfLabel: 'Certificado ISO 45001:2018'
  }
];

const regulatoryLogos = [
  {
    id: 'asea',
    name: 'ASEA',
    subtitle: 'Seguridad industrial, operativa y protección ambiental.',
    image: 'https://www.gob.mx/cms/uploads/article/main_image/16073/logo_asea.jpg',
    accent: 'from-sky-500/20 to-cyan-500/10',
    pdfFile: null
  },
  {
    id: 'cne',
    name: 'CNE',
    subtitle: 'Marco técnico para decisiones regulatorias y energía.',
    image: 'https://static.wixstatic.com/media/d7dd69_b17eb0aa35b74631b02ed91a303012f3~mv2.jpeg/v1/fill/w_568,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7dd69_b17eb0aa35b74631b02ed91a303012f3~mv2.jpeg',
    accent: 'from-slate-400/20 to-slate-200/10',
    pdfFile: null
  },
  {
    id: 'sener',
    name: 'SENER',
    subtitle: 'Política energética, trazabilidad institucional y sectorial.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/SENER_Logo_2019.svg/1280px-SENER_Logo_2019.svg.png',
    accent: 'from-cyan-500/20 to-blue-500/10',
    pdfFile: null
  },
  {
    id: 'stps',
    name: 'STPS',
    subtitle: 'Cumplimiento laboral, seguridad y gestión preventiva.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/STPS_Logo_2019.svg/1280px-STPS_Logo_2019.svg.png',
    accent: 'from-indigo-500/20 to-sky-500/10',
    pdfFile: null
  }
];

// ─── PDF Viewer Modal ────────────────────────────────────────────────────────
interface PdfModalProps {
  pdfUrl: string;
  label: string;
  onClose: () => void;
}

function PdfModal({ pdfUrl, label, onClose }: PdfModalProps) {
  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-[#061528]/90 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal panel */}
        <motion.div
          className="relative z-10 flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B2341] shadow-[0_30px_100px_rgba(0,0,0,0.6)]"
          style={{ height: 'calc(100vh - 4rem)', maxHeight: '900px' }}
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 24 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header bar */}
          <div className="flex shrink-0 items-center justify-between border-b border-white/10 bg-[#061528] px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#008CDE]/30 bg-[#008CDE]/10">
                <FileText size={18} className="text-[#008CDE]" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#008CDE]">Documento Oficial</p>
                <p className="text-sm font-bold uppercase tracking-tight text-white">{label}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-[#008CDE]/30 bg-[#008CDE]/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#008CDE] transition-colors hover:bg-[#008CDE]/20"
              >
                <ExternalLink size={13} />
                Abrir en nueva pestaña
              </a>
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                aria-label="Cerrar visor"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* PDF iframe */}
          <div className="relative flex-1 bg-slate-800">
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
              className="h-full w-full border-0"
              title={label}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function CertificacionesPage() {
  const [showNav, setShowNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePdf, setActivePdf] = useState<{ url: string; label: string } | null>(null);

  const openPdf = useCallback((url: string, label: string) => {
    setActivePdf({ url, label });
  }, []);

  const closePdf = useCallback(() => {
    setActivePdf(null);
  }, []);

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

      {/* PDF Modal */}
      {activePdf && (
        <PdfModal
          pdfUrl={activePdf.url}
          label={activePdf.label}
          onClose={closePdf}
        />
      )}

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

      {/* ── ISO Cards ─────────────────────────────────────────────────────────── */}
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
              <p className="mt-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#008CDE]">
                <ZoomIn size={13} />
                Haz clic en cualquier certificado para verlo
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {isoCards.map((card, idx) => (
              <motion.button
                key={card.id}
                onClick={() => openPdf(card.pdfFile, card.pdfLabel)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="group relative w-full cursor-pointer rounded-2xl border border-slate-100 bg-white p-10 text-left shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition-all duration-500 hover:border-[#008CDE]/30 hover:shadow-[0_20px_50px_rgba(0,140,222,0.12)]"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#008CDE]/0 to-[#008CDE]/0 opacity-0 transition-opacity duration-500 group-hover:from-[#008CDE]/5 group-hover:to-transparent group-hover:opacity-100" />

                <div className="relative">
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

                  <p className="mb-8 text-sm font-medium leading-relaxed text-slate-500">{card.desc}</p>

                  {/* CTA row */}
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#008CDE] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                    <FileText size={13} />
                    Ver certificado
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registros y Acreditaciones ────────────────────────────────────────── */}
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
            {/* PEMEX / Achilles */}
            <button
              onClick={() => openPdf('/certificados/cert-pemex.pdf', 'Registro Achilles — PEMEX')}
              className="group relative cursor-pointer overflow-hidden rounded-3xl bg-[#061528] p-10 text-left transition-transform duration-300 hover:-translate-y-1"
            >
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
                <p className="mb-6 text-sm font-medium leading-relaxed text-slate-400">
                  El Registro Extendido ante PEMEX a través de Achilles certifica que APEN ha completado el proceso de due diligence técnico, financiero y operativo exigido por Petróleos Mexicanos. No es un trámite administrativo. Es la validación institucional de que APEN puede operar en el ecosistema energético más exigente de México — y ya lo hace, con contratos ejecutados.
                </p>
                <div className="mb-6 rounded-xl border border-[#008CDE]/20 bg-[#008CDE]/5 px-4 py-3">
                  <p className="text-[11px] font-black uppercase tracking-tight text-[#35b8ff]">APEN no aspira a ser proveedor PEMEX. Ya lo es. Contratos ejecutados, registro activo, estructura habilitada.</p>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">ID Padrón</p>
                  <p className="text-xl font-black italic tracking-widest text-white">00249023</p>
                </div>
                {/* hover cta */}
                <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#35b8ff] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <FileText size={13} />
                  Ver certificado
                  <ArrowRight size={12} />
                </div>
              </div>
            </button>

            {/* CFE */}
            <button
              onClick={() => openPdf('/certificados/cert-cfe.pdf', 'Registro Proveedor — CFE')}
              className="group relative cursor-pointer overflow-hidden rounded-3xl bg-[#0B2341] p-10 text-left transition-transform duration-300 hover:-translate-y-1"
            >
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
                {/* hover cta */}
                <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#35b8ff] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <FileText size={13} />
                  Ver certificado
                  <ArrowRight size={12} />
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ── Alineación Reguladora ─────────────────────────────────────────────── */}
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

      {/* ── Achilles Clusters ────────────────────────────────────────────────── */}
      <section className="bg-[#040D1D] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.5em] text-[#008CDE]">Clasificación Achilles</span>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tighter text-white md:text-4xl">
              Clusters de <span className="text-[#008CDE]">Capacidad</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-relaxed text-slate-400">
              La precalificación Achilles PEMEX certifica las capacidades de APEN en cinco categorías de ejecución técnica.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { id: 'A', title: 'Eléctrico y Electromecánico', desc: 'Media y alta tensión, subestaciones, tableros, instrumentación.' },
              { id: 'B', title: 'Infraestructura Civil', desc: 'Obra civil industrial, estructuras metálicas, fundaciones especiales.' },
              { id: 'C', title: 'Hidrocarburos y Proceso', desc: 'Instalaciones de proceso, tuberías, sistemas contra incendio.' },
              { id: 'D', title: 'Seguridad Industrial HSEQ', desc: 'Gestión integral de riesgos, cumplimiento NOM, SASISOPA.' },
              { id: 'E', title: 'Consultoría y Normatividad', desc: 'Gestión de permisos, trámites regulatorios, auditorías técnicas.' },
            ].map((cluster) => (
              <div key={cluster.id} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="absolute -top-4 -right-4 text-[80px] font-black text-white/3 leading-none select-none">{cluster.id}</div>
                <div className="relative">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#008CDE]/30 bg-[#008CDE]/10">
                    <span className="text-sm font-black text-[#008CDE]">{cluster.id}</span>
                  </div>
                  <h3 className="mb-2 text-[11px] font-black uppercase leading-tight tracking-tight text-white">{cluster.title}</h3>
                  <p className="text-[10px] font-medium leading-relaxed text-slate-500">{cluster.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/certificados/cert-pemex.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-[#008CDE]/30 bg-[#008CDE]/10 px-8 py-4 text-[11px] font-black uppercase tracking-[0.3em] text-[#008CDE] transition-colors hover:bg-[#008CDE]/20"
            >
              <FileText size={14} />
              Ver Registro Completo Achilles
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
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
