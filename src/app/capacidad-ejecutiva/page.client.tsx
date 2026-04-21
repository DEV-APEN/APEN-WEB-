"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import MobileMenu from '@/components/MobileMenu';
import { Zap, Wrench, FlaskConical, Building2, ArrowRight, CheckCircle2, Shield } from 'lucide-react';

const technicalBlocks = [
  {
    id: '01',
    icon: Zap,
    title: 'Tableros de Media y Alta Tensión',
    subtitle: 'Suministro, integración y puesta en marcha',
    desc: 'Fabricación e integración de tableros de distribución para media tensión (MT) y alta tensión (AT). Coordinación de pruebas de aceptación en fábrica (FAT) y puesta en servicio conforme a especificaciones CFE y normas IEC.',
    items: [
      'Tableros de distribución MT hasta 35 kV',
      'Celdas blindadas y barras de transferencia',
      'Coordinación de protecciones y selectividad',
      'Pruebas FAT y SAT bajo protocolos CFE',
      'Documentación técnica para auditoría regulatoria',
    ],
    accent: 'from-blue-600 to-cyan-400',
    bg: 'bg-[#061528]',
  },
  {
    id: '02',
    icon: Building2,
    title: 'Infraestructura de Alta Tensión',
    subtitle: 'Diseño, obra civil y electromecánica',
    desc: 'Construcción y modernización de subestaciones de potencia hasta 230 kV. Ingeniería de detalle, obra civil, montaje electromecánico y pruebas integrales de habilitación bajo supervisión normativa SENER y CFE.',
    items: [
      'Subestaciones de potencia 115 kV – 230 kV',
      'Ingeniería de detalle DCCSED01 / DCCSET01',
      'Obra civil y montaje electromecánico',
      'Líneas de transmisión y distribución',
      'Interconexión al Mercado Eléctrico Mayorista (MEM)',
    ],
    accent: 'from-indigo-500 to-blue-400',
    bg: 'bg-[#0B2341]',
  },
  {
    id: '03',
    icon: Wrench,
    title: 'Mantenimiento Industrial',
    subtitle: 'Preventivo, predictivo y correctivo',
    desc: 'Programas de mantenimiento técnico para activos críticos energéticos. Aplicamos metodologías RCM e inspecciones con termografía, ultrasonido y análisis de aceite para extender la vida útil de equipos en operación continua.',
    items: [
      'Mantenimiento preventivo y predictivo a transformadores',
      'Termografía infrarroja y ultrasonido industrial',
      'Servicios de campo 24/7 para activos críticos',
      'Gestión de refacciones y repuestos estratégicos',
      'Historial técnico y trazabilidad de intervenciones',
    ],
    accent: 'from-amber-500 to-orange-400',
    bg: 'bg-[#061528]',
  },
  {
    id: '04',
    icon: FlaskConical,
    title: 'Ingeniería de Pruebas',
    subtitle: 'Commissioning y puesta en marcha',
    desc: 'Coordinación integral de pruebas de commissioning para infraestructura eléctrica nueva o modernizada. Protocolos de verificación funcional, ajuste de relés de protección y habilitación operativa ante CFE y organismos certificadores.',
    items: [
      'Protocolos de commissioning eléctrico integral',
      'Ajuste y coordinación de relés de protección',
      'Pruebas de energización y maniobras de alta tensión',
      'Verificación funcional de sistemas SCADA',
      'Entrega de expediente técnico final auditado',
    ],
    accent: 'from-emerald-500 to-teal-400',
    bg: 'bg-[#0B2341]',
  },
];

const pemexCapacities = [
  'Ingeniería de detalle para instalaciones de proceso',
  'Obra eléctrica en zonas clasificadas (ATEX)',
  'Instrumentación y sistemas de control industrial',
  'Integración de sistemas de seguridad (SIL)',
  'Cumplimiento SASISOPA y normativas NOM en hidrocarburos',
  'Gestión de contratistas en proyectos multisite',
];

export default function CapacidadEjecutivaClient() {
  const [showNav, setShowNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNav(true), 250);
    const handleScroll = () => { if (window.scrollY > 50) setShowNav(true); };
    window.addEventListener('scroll', handleScroll);
    return () => { clearTimeout(timer); window.removeEventListener('scroll', handleScroll); };
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-white">
      <Header visible={showNav} onOpenMenu={() => setIsMenuOpen(true)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#061528] px-6 pb-20 pt-32 md:pb-32 md:pt-48">
        <div className="absolute inset-0">
          <Image
            src="/visual/imagenes/metricas.jpg"
            alt="Capacidad Ejecutiva APEN"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,140,222,0.18),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,21,40,0.92)_0%,rgba(11,35,65,0.82)_50%,rgba(0,140,222,0.18)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-sm border border-[#008CDE]/30 bg-[#008CDE]/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.4em] text-[#008CDE]">
              <Shield size={12} />
              Consorcio Técnico
            </span>
            <h1 className="mt-8 max-w-[18ch] text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
              Capacidad de ejecución — infraestructura energética bajo dirección técnica
              <span className="block bg-gradient-to-r from-[#008CDE] to-cyan-300 bg-clip-text text-transparent">
                APEN.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl border-l-2 border-[#008CDE] pl-5 text-sm font-medium leading-relaxed text-slate-300 md:text-base">
              APEN opera como integrador de cadena completa: acceso a suministro con estructura habilitada ante PEMEX, coordinación logística, cumplimiento regulatorio y ejecución técnica bajo un mismo equipo. No vendemos servicios aislados. Entregamos operaciones funcionando. Nuestra red de especialistas certificados opera bajo nuestra dirección técnica y jurídica directa. El resultado — y la responsabilidad — son nuestros desde el primer día.
            </p>
          </div>
        </div>
      </section>

      {/* PEMEX Integration Block */}
      <section className="bg-[#040D1D] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="mb-6 block text-[10px] font-black uppercase tracking-[0.4em] text-[#008CDE]">
                Integración Estratégica
              </span>
              <h2 className="mb-8 text-3xl font-black uppercase leading-[0.95] tracking-tighter text-white md:text-5xl">
                Respaldo <br />
                <span className="text-[#008CDE]">PEMEX</span>
              </h2>
              <p className="mb-10 max-w-xl text-sm font-medium leading-relaxed text-slate-300 md:text-base">
                Registrados y precalificados en la Red Achilles PEMEX (ID: 00249023), APEN aporta infraestructura técnica, personal certificado y procedimientos auditables para la ejecución de proyectos en instalaciones de Petróleos Mexicanos y su cadena de valor.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {pemexCapacities.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#008CDE]" />
                    <span className="text-[11px] font-bold uppercase tracking-tight text-slate-300 leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,140,222,0.15),transparent_50%)]" />
              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Registro de Proveedor</span>
                  <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-green-400">Activo 2026</span>
                  </div>
                </div>

                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#008CDE]">Achilles PEMEX</p>
                <p className="mb-8 text-4xl font-black italic tracking-widest text-white">00249023</p>

                <div className="space-y-4 border-t border-white/10 pt-8">
                  {[
                    { label: 'Clasificación', value: 'Proveedor Estratégico Clase A' },
                    { label: 'Alcance', value: 'Eléctrico, Electromecánico, Instrumentación' },
                    { label: 'Vigencia', value: '2026' },
                    { label: 'Evaluación HSEQ', value: 'Aprobada — Nivel Integral' },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between gap-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{row.label}</span>
                      <span className="text-[11px] font-black uppercase tracking-tight text-white text-right">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Blocks */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 max-w-3xl">
            <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.4em] text-[#008CDE]">
              Bloques Técnicos
            </span>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tighter text-[#0B2341] md:text-5xl">
              Cuatro Disciplinas. <br />
              <span className="text-[#008CDE]">Un Sistema.</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {technicalBlocks.map((block, idx) => (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={`relative overflow-hidden rounded-3xl ${block.bg} p-8 md:p-10`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,140,222,0.1),transparent_50%)]" />
                <div className="relative">
                  <div className="mb-6 flex items-start justify-between">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${block.accent} text-white shadow-lg`}>
                      <block.icon size={26} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-mono text-[#008CDE]/50 font-black tracking-widest">BLQ_{block.id}</span>
                  </div>

                  <p className="mb-1 text-[10px] font-black uppercase tracking-[0.3em] text-[#008CDE]">{block.subtitle}</p>
                  <h3 className="mb-4 text-xl font-black uppercase leading-tight tracking-tighter text-white md:text-2xl">
                    {block.title}
                  </h3>
                  <p className="mb-8 text-sm font-medium leading-relaxed text-slate-400">{block.desc}</p>

                  <div className="space-y-2 border-t border-white/10 pt-6">
                    {block.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#008CDE]" />
                        <span className="text-[11px] font-bold uppercase tracking-tight text-slate-300 leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#061528] py-24 text-center md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <span className="mb-6 block text-[10px] font-black uppercase tracking-[0.5em] text-[#008CDE]">
            Próximo Paso
          </span>
          <h2 className="mb-8 text-3xl font-black uppercase leading-tight tracking-tighter text-white md:text-5xl">
            Evalúe su proyecto <br />
            <span className="text-[#008CDE]">con nuestros expertos</span>
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-sm font-medium leading-relaxed text-slate-400">
            Identifique la viabilidad técnica y normativa de su proyecto energético en 24 horas con nuestro equipo de ingeniería especializada.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/diagnostico"
              className="group inline-flex items-center gap-4 rounded-full bg-[#008CDE] px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em] text-white shadow-xl transition-all duration-300 hover:bg-white hover:text-[#0B2341]"
            >
              Solicitar Diagnóstico
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
            </Link>
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-4 rounded-full border border-white/20 bg-white/5 px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em] text-white transition-all duration-300 hover:border-[#008CDE] hover:bg-[#008CDE]/10"
            >
              Contacto Directo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot visible={showNav} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
