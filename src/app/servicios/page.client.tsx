"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronRight,
  ClipboardCheck,
  Gauge,
  Gavel,
  Globe2,
  HardHat,
  Landmark,
  Layers3,
  Network,
  Orbit,
  Scale,
  ShieldCheck,
  Sparkles,
  TowerControl,
  Workflow,
  Wrench,
  X,
  Zap,
  Droplets,
  Target,
  FileText,
  Activity
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutContact from "@/components/AboutContact";
import ChatBot from "@/components/ChatBot";
import Ecosystem from "@/components/Ecosystem";
import OperationalArchitecture from "@/components/OperationalArchitecture";
import MobileMenu from "@/components/MobileMenu";

const authorities = [
  ["01", "CNE", "Permisos, OPE y cumplimiento regulatorio", "Gestión integral de actividades reguladas en hidrocarburos, petrolíferos, petroquímicos y mercado eléctrico.", Landmark, "from-sky-500 to-cyan-400", ["Pre-registro ante OPE", "Estaciones de servicio, autoconsumo y carburación", "Almacenamiento, licuefacción, regasificación y comercialización", "Generación, transmisión, distribución, suministro e interconexión"]],
  ["02", "ASEA", "Seguridad industrial y protección ambiental", "Blindaje operativo para instalaciones reguladas con enfoque documental, preventivo y auditable.", ShieldCheck, "from-emerald-500 to-teal-400", ["MIA, Informe Preventivo y Estudios de Riesgo Ambiental", "NOM-003-ASEA-2016 y NOM-005-ASEA-2016", "Cédula de Operación Anual y licencias ambientales", "Diseño e implementación SASISOPA"]],
  ["03", "SENER", "Impacto social e importaciones", "Acompañamiento especializado para proyectos que requieren gestión social y autorizaciones energéticas.", Globe2, "from-violet-500 to-indigo-400", ["MISSE previa a EVIS", "Gestión de permisos de importación", "Ruta documental para nuevos desarrollos", "Soporte técnico ante requerimientos sectoriales"]],
  ["04", "CFE", "Ingeniería, obra y licitaciones eléctricas", "Cobertura de media y alta tensión con enfoque de ejecución y cumplimiento técnico institucional.", Zap, "from-amber-500 to-orange-400", ["Subestaciones hasta 230 kV", "DCCSED01, DCCSET01 y PYCON-SE-01", "Evaluación de riesgos y formatos CFE", "Padrón de proveedores No. 4493015"]],
  ["05", "PEMEX", "Registro Achilles y amplitud operativa", "El registro extendido ante Pemex robustece la elegibilidad comercial y la trazabilidad de suministro y servicios.", BadgeCheck, "from-rose-500 to-red-400", ["ID Achilles 00249023", "Vigencia hasta 25 noviembre 2026", "Cobertura en subestaciones, líneas y tableros", "Alcance en mantenimiento civil y servicios de ingeniería"]],
  ["06", "LEGAL", "Regularización interdisciplinaria y defensa", "Respuesta técnico-legal para proyectos detenidos, sancionados o en proceso de normalización.", Scale, "from-slate-700 to-slate-500", ["Gestión legal interdisciplinaria", "Levantamiento de clausuras y regularización", "Demandas de nulidad y respuesta a emplazamientos", "Ingeniería básica, extendida y de detalle"]],
] as const;

const tracks = [
  ["Energía y Potencia", "Subestaciones, tableros y líneas de alta tensión.", TowerControl],
  ["Hidrocarburos y Gas", "Estaciones de servicio, almacenamiento y logística.", Network],
  ["Cumplimiento y Defensa", "Gestión documental, clausuras y defensa legal.", ClipboardCheck],
] as const;

const metrics = [
  ["Padrón CFE", "4493015", "Proveedor inscrito.", HardHat],
  ["Achilles Pemex", "00249023", "Registro extendido.", BadgeCheck],
  ["Cobertura", "230 kV", "Ingeniería en alta tensión.", Gauge],
  ["Modelo", "360°", "Ingeniería y legal.", Workflow],
] as const;

const flowData = [
  {
    step: "01",
    title: "Diagnóstico",
    desc: "Mapeamos autoridad y estatus del proyecto.",
    icon: Target,
    accent: "bg-[#008CDE]"
  },
  {
    step: "02",
    title: "Ingeniería",
    desc: "Integramos ingeniería y expedientes técnicos.",
    icon: FileText,
    accent: "bg-[#00a2ff]"
  },
  {
    step: "03",
    title: "Gestión",
    desc: "Cierre operativo y seguimiento verificable.",
    icon: Activity,
    accent: "bg-[#4cc9ff]"
  }
];

export default function ServicesPage() {
  const [isHeaderVisible, setHeaderVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTrack, setActiveTrack] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setHeaderVisible(true), 350);
    const handleScroll = () => {
      if (window.scrollY > 80) setHeaderVisible(true);
    };
    
    // Auto-cycle tracks
    const interval = setInterval(() => {
      setActiveTrack((prev) => (prev + 1) % tracks.length);
    }, 4500);

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [activeTrackTitle, activeTrackDescription] = tracks[activeTrack];

  const portals = [
    {
      id: "01",
      title: "Hidrocarburos",
      subtitle: "Gestión y Regulación",
      desc: "Cumplimiento normativo, infraestructura y logística Oil & Gas.",
      url: "/servicios/hidrocarburos",
      textColor: "text-[#008CDE]",
      icon: Droplets,
      img: "/hidro.jpg"
    },
    {
      id: "02",
      title: "Sector Energético",
      subtitle: "Potencia e Infraestructura",
      desc: "Ingeniería eléctrica, subestaciones y gestión CFE.",
      url: "/servicios/energia",
      textColor: "text-amber-500",
      icon: Zap,
      img: "/ener.jpg"
    },
    {
      id: "03",
      title: "Legal & Técnica",
      subtitle: "Marco Normativo",
      desc: "Defensa jurídica y regularización de proyectos.",
      url: "/servicios/legal",
      textColor: "text-rose-600",
      icon: Gavel,
      img: "/legal.jpg"
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Header visible={isHeaderVisible} onOpenMenu={() => setIsMenuOpen(true)} />

      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-[#061528] pb-14 pt-32 md:pb-20 md:pt-40">
        <div className="absolute inset-0">
          <img
            src="/visual/imagenes/heroserv.jpg"
            alt="Fondo de servicios"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2341]/95 via-[#0B2341]/80 to-[#008CDE]/40" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#071424_0%,transparent_50%,#061528_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px] opacity-10" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
                <Sparkles size={14} className="text-[#4fc3ff]" />
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-blue-50/95">Portafolio técnico</span>
              </div>

              <h1 className="max-w-[13ch] text-[1.8rem] font-black uppercase leading-[0.95] tracking-[-0.03em] text-white md:text-[2.6rem] lg:text-[3.2rem]">
                Servicios con
                <span className="block bg-gradient-to-r from-[#61d4ff] via-[#7ec8ff] to-white bg-clip-text text-transparent">
                  precisión técnica y legal
                </span>
              </h1>

              <p className="mt-6 max-w-lg border-l-4 border-[#00a6ff] pl-5 text-[12px] font-medium leading-relaxed text-[#d8e9ff] md:text-[14px]">
                APEN integra ingeniería y regulación para proyectos críticos de hidrocarburos y electricidad.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {["CNE", "ASEA", "SENER", "CFE", "PEMEX", "LEGAL"].map((item) => (
                  <span key={item} className="rounded-full border border-cyan-300/20 bg-white/10 px-3.5 py-1.5 text-[9px] font-black uppercase tracking-[0.28em] text-white">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative rounded-[2.25rem] p-6 md:p-8"
              style={{ perspective: "1200px" }}
            >
              <div className="relative z-10 mb-6 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#8fe1ff]">Radar</p>
                  <h2 className="mt-2 text-xl font-black uppercase tracking-tight text-white md:text-2xl">Gestión Operativa</h2>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-[#79d4ff]">
                  <Layers3 size={26} />
                </div>
              </div>

              <div className="relative z-10 mt-8 space-y-2.5">
                {tracks.map(([title, description, Icon], index) => (
                  <button
                    key={title}
                    type="button"
                    onMouseEnter={() => setActiveTrack(index)}
                    onFocus={() => setActiveTrack(index)}
                    onClick={() => setActiveTrack(index)}
                    className={`relative w-full rounded-xl pl-8 pr-3 text-left transition-all ${
                      activeTrack === index ? "bg-cyan-300/10" : "hover:bg-white/5"
                    }`}
                  >
                    {index < tracks.length - 1 && <div className="absolute left-[10px] top-9 h-[calc(100%+0.35rem)] w-px bg-gradient-to-b from-cyan-300/60 to-transparent" />}
                    <div className={`absolute left-0 top-2 flex h-5 w-5 items-center justify-center rounded-full border ${activeTrack === index ? "border-cyan-200 bg-[#0b2942] text-[#9be7ff] shadow-[0_0_18px_rgba(103,214,255,0.35)]" : "border-cyan-300/50 bg-[#08192b] text-[#6fd5ff]"}`}>
                      <Icon size={11} />
                    </div>
                    <div className={`pb-4 ${activeTrack === index ? "border-cyan-300/35" : "border-white/10"}`}>
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-[10px] font-black uppercase tracking-[0.28em] ${activeTrack === index ? "text-[#b8efff]" : "text-[#8fe1ff]"}`}>0{index + 1}</span>
                        <h3 className="text-xs font-black uppercase tracking-[0.18em] text-white md:text-sm">{title}</h3>
                      </div>
                      <p className={`text-[11px] leading-relaxed transition-opacity duration-300 ${activeTrack === index ? "text-[#dcecff] opacity-100" : "text-white/40 opacity-0 h-0 overflow-hidden"}`}>
                        {description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>


            </motion.div>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map(([label, value, note, Icon], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08 }}
                className="relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-md"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-300/70 to-transparent" />
                <div className="ml-2 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/95">{label}</span>
                  <Icon size={18} className="text-[#68d4ff]" />
                </div>
                <div className="ml-2 mt-3 text-[2rem] font-black uppercase tracking-tight text-white">{value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f6f9fd] border-b border-slate-200">
         <div className="mx-auto max-w-7xl px-6">
            <div className="mb-14 text-center md:text-left">
              <h2 className="mt-3 text-[2.2rem] font-black uppercase leading-[0.9] tracking-[-0.04em] text-[#0B2341] md:text-[4.2rem]">
                Unidades <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008CDE] to-[#0B2341]">Estratégicas</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {portals.map((portal, i) => (
                 <Link href={portal.url} key={i}>
                   <motion.div 
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: i * 0.1 }}
                     className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all h-full flex flex-col"
                   >
                      <div className="h-56 md:h-64 overflow-hidden relative shrink-0">
                         <div className="absolute inset-0 bg-[#0B2341]/50 group-hover:bg-[#0B2341]/20 transition-colors z-10 duration-500" />
                         <img src={portal.img} alt={portal.title} className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700" />
                         <div className="absolute top-6 left-6 z-20 flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-2xl">
                            <portal.icon className={portal.textColor} size={28} />
                         </div>
                      </div>
                      <div className="p-8 flex flex-col flex-grow relative z-20">
                         <h3 className="text-2xl font-black uppercase tracking-tighter text-[#0B2341] mb-1 group-hover:text-[#008CDE] transition-colors">{portal.title}</h3>
                         <p className="text-sm text-slate-500 font-medium leading-relaxed mb-10 flex-grow">{portal.desc}</p>
                         <div className={`flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#0B2341] mt-auto`}>
                            Ingresar <ArrowRight size={16} className={`${portal.textColor} group-hover:translate-x-2 transition-transform`} />
                         </div>
                      </div>
                   </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      <Ecosystem />

      {/* 4. ARQUITECTURA OPERATIVA - MODELO APEN */}
      <OperationalArchitecture />

      {/* 5. METODOLOGÍA */}
      <section className="relative overflow-hidden bg-[#eef3f8] py-24 md:py-32">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#0B2341] leading-[0.95]">
              Metodología de <span className="text-[#008CDE]">Trabajo</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-0 relative">
             {flowData.map((item, idx) => (
               <motion.div 
                 key={item.step}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.2 }}
                 className="relative"
               >
                  {idx < flowData.length - 1 && (
                    <div className="hidden lg:block absolute top-[40%] -right-8 w-16 h-16 bg-white border-y-2 border-r-2 border-[#008CDE]/30 rounded-full z-20" />
                  )}
                  
                  <div className={`relative h-full bg-white border-2 border-[#008CDE]/30 shadow-[0_20px_50px_-20px_rgba(0,140,222,0.15)] 
                    ${idx === 0 ? 'rounded-t-[3rem] lg:rounded-l-[3rem] lg:rounded-tr-none' : ''} 
                    ${idx === 1 ? 'border-y-0 lg:border-y-2 lg:border-x-0' : ''} 
                    ${idx === flowData.length - 1 ? 'rounded-b-[3rem] lg:rounded-r-[3rem] lg:rounded-bl-none' : ''}
                    p-10 pt-16`}
                  >
                     <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between mb-8">
                           <div className={`h-16 w-16 ${item.accent} rounded-2xl flex items-center justify-center text-white`}>
                              <item.icon size={32} strokeWidth={1.5} />
                           </div>
                           <span className="text-6xl font-black text-blue-50/80 italic">{item.step}</span>
                        </div>
                        <h4 className="text-2xl font-black uppercase text-[#008CDE] leading-tight mb-5">{item.title}</h4>
                        <p className="text-sm font-bold text-slate-500 leading-relaxed pr-4">{item.desc}</p>
                     </div>
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      <AboutContact />
      <Footer />
      <ChatBot visible={isHeaderVisible} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
