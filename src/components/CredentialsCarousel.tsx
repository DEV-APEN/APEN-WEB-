"use client";

import { useState } from "react";
import { BadgeCheck, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const credentialCards = [
  {
    title: "Achilles / Pemex",
    eyebrow: "Registro Extendido",
    logo: "https://toroca.com.mx/wp-content/uploads/2025/12/Logo-Certificado-Achilles.webp",
    logoAlt: "Logo Achilles",
    accent: "bg-[#008CDE]",
    stats: [
      { label: "ID Registrado", value: "00249023", highlight: false },
      { label: "Vigencia", value: "25 NOV 2026", highlight: true },
    ],
    body: "Cobertura en subestaciones, redes, tableros, electricidad e instrumental, montaje, mantenimiento civil e instalaciones de gas.",
  },
  {
    title: "Padrón CFE",
    eyebrow: "Proveedor Inscrito",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Logo_neutral_de_la_Comisi%C3%B3n_Federal_de_Electricidad.svg",
    logoAlt: "Logo CFE",
    accent: "bg-[#008CDE]",
    stats: [{ label: "Padrón Activo CFE", value: "4493015", highlight: false }],
    body: "Reforzamos la capacidad técnica de APEN para la ejecución de obra, atención a especificaciones y licitaciones directas en CFE.",
  },
  {
    title: "ISO 9001:2015",
    eyebrow: "Calidad",
    logo: "/visual/imagenes/isologo.svg",
    logoAlt: "Logo ISO",
    accent: "bg-[#008CDE]",
    stats: [{ label: "Registro", value: "CIE-SGC-044/2026", highlight: false }],
    body: "Sistema de gestión de calidad auditado para asegurar consistencia operativa y trazabilidad documental.",
  },
  {
    title: "ISO 14001:2015",
    eyebrow: "Ambiental",
    logo: "/visual/imagenes/isologo.svg",
    logoAlt: "Logo ISO",
    accent: "bg-[#008CDE]",
    stats: [{ label: "Registro", value: "CIE-SGA-022/2026", highlight: false }],
    body: "Control ambiental alineado con estándares internacionales para proyectos energéticos con exigencia regulatoria.",
  },
  {
    title: "ISO 45001:2018",
    eyebrow: "Seguridad",
    logo: "/visual/imagenes/isologo.svg",
    logoAlt: "Logo ISO",
    accent: "bg-[#008CDE]",
    stats: [{ label: "Registro", value: "CIE-SGSST-020/2026", highlight: false }],
    body: "Marco certificado de seguridad y salud ocupacional para ejecución técnica con enfoque preventivo.",
  },
] as const;

export default function CredentialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + credentialCards.length) % credentialCards.length);
  };

  return (
    <section id="certificaciones" className="relative overflow-hidden py-24 md:py-32">
      {/* Background with fixed overlay */}
      <div 
        className="absolute inset-0 bg-center bg-cover opacity-40 transition-transform duration-[15s] linear infinite"
        style={{ backgroundImage: "url('/visual/imagenes/certifondo.jpg')" }}
      />
      <div className="absolute inset-0 bg-white/90" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 mb-6 shadow-sm">
            <ShieldCheck size={14} className="text-[#008CDE]" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0B2341]/70">
              Respaldo Oficial
            </span>
          </div>
          <h2 className="text-[1.8rem] md:text-[3rem] font-black uppercase leading-tight tracking-tight text-[#0B2341]">
            Certificaciones e Identidad <br />
            <span className="text-[#008CDE]">Corporativa Validada</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="relative overflow-hidden h-[460px] md:h-[400px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={{
                  enter: (direction: number) => ({
                    x: direction > 0 ? '100%' : '-100%',
                    opacity: 0
                  }),
                  center: {
                    zIndex: 1,
                    x: 0,
                    opacity: 1
                  },
                  exit: (direction: number) => ({
                    zIndex: 0,
                    x: direction < 0 ? '100%' : '-100%',
                    opacity: 0
                  })
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.3 }
                }}
                className="absolute w-full h-full"
              >
                <div className="h-full w-full bg-white rounded-[2rem] border border-slate-200 shadow-[0_20px_50px_-15px_rgba(11,35,65,0.1)] overflow-hidden flex flex-col">
                  {/* Top Color Bar - INTEGRATED INTO CARD CONTAINER */}
                  <div className="h-2 w-full bg-[#008CDE] shrink-0" />
                  
                  <div className="p-8 md:p-12 flex flex-col justify-between flex-grow">
                    <div className="relative">
                      <div className="flex items-start justify-between gap-6 mb-8">
                        <div>
                          <h3 className="text-xl md:text-3xl font-black uppercase text-[#0B2341] tracking-tight">
                            {credentialCards[current].title}
                          </h3>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#008CDE] mt-1">
                            {credentialCards[current].eyebrow}
                          </p>
                        </div>
                        <div className="h-10 w-16 md:h-16 md:w-28 flex items-center justify-end">
                          <img
                            src={credentialCards[current].logo}
                            alt={credentialCards[current].logoAlt}
                            className="max-h-full w-auto object-contain"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-8 mb-8">
                        {credentialCards[current].stats.map((stat, i) => (
                          <div key={i}>
                            <p className="text-[9px] font-black uppercase text-slate-400 mb-1.5 tracking-wider">
                              {stat.label}
                            </p>
                            <p className={`font-black tracking-tighter ${stat.highlight ? 'text-[#008CDE] text-lg md:text-xl' : 'text-[#0B2341] text-xl md:text-2xl'} leading-none`}>
                              {stat.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-100 mt-auto">
                      <p className="text-sm md:text-base leading-relaxed text-slate-600 font-medium">
                        {credentialCards[current].body}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute -left-2 md:-left-24 top-1/2 -translate-y-1/2 z-30 h-10 w-10 md:h-14 md:w-14 flex items-center justify-center rounded-full bg-white border border-slate-200 text-[#0B2341] shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all active:scale-95"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute -right-2 md:-right-24 top-1/2 -translate-y-1/2 z-30 h-10 w-10 md:h-14 md:w-14 flex items-center justify-center rounded-full bg-white border border-slate-200 text-[#0B2341] shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all active:scale-95"
            aria-label="Siguiente"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Improved Indicators */}
        <div className="mt-12 flex justify-center gap-3">
          {credentialCards.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                current === i ? "w-10 bg-[#008CDE]" : "w-2.5 bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Página ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
