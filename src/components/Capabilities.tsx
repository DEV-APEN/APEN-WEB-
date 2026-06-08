"use client";

import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Ruler, Layout, ShieldCheck, Zap, BadgeCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  {
    number: "01",
    title: "Garantía de resolución ante ASEA",
    desc: "Gestionamos autorizaciones de impacto ambiental con activación de afirmativa ficta cuando la ley lo permite. Si el expediente entra bien, la autorización está garantizada por ley. Más de 200 casos lo prueban.",
    icon: Ruler,
    image: "/visual/imagenes/v1.webp",
    activeOverlay:
      "bg-[linear-gradient(180deg,rgba(11,35,65,0.26)_0%,rgba(11,35,65,0.74)_58%,rgba(11,35,65,0.94)_100%)]",
    inactiveOverlay:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(248,250,252,0.88)_42%,rgba(241,245,249,0.92)_100%)]",
  },
  {
    number: "02",
    title: "Cobertura de las tres autoridades",
    desc: "Somos la única firma que representa clientes ante ASEA, CNE y SENER simultáneamente — las tres autoridades que regulan el sector energético en México. Sin cambiar de consultor entre trámites.",
    icon: Layout,
    image: "/visual/imagenes/v2.webp",
    activeOverlay:
      "bg-[linear-gradient(180deg,rgba(11,35,65,0.24)_0%,rgba(11,35,65,0.74)_58%,rgba(11,35,65,0.94)_100%)]",
    inactiveOverlay:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(243,248,253,0.86)_44%,rgba(233,243,252,0.9)_100%)]",
  },
  {
    number: "03",
    title: "Defensa jurídica con conocimiento técnico",
    desc: "Más de 500 juicios ganados ante PJF y TFJA en materia energética. La diferencia: nuestros abogados entienden la norma técnica porque trabajan con los mismos ingenieros que hacen los expedientes.",
    icon: ShieldCheck,
    image: "/visual/imagenes/v3.webp",
    activeOverlay:
      "bg-[linear-gradient(180deg,rgba(11,35,65,0.22)_0%,rgba(11,35,65,0.72)_58%,rgba(11,35,65,0.94)_100%)]",
    inactiveOverlay:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.78)_0%,rgba(242,248,252,0.86)_44%,rgba(234,242,248,0.9)_100%)]",
  },
  {
    number: "04",
    title: "Certeza internacional ISO",
    desc: "Procesos auditados bajo ISO 9001, 14001 y 45001. Las mismas normas que exigen CFE y PEMEX a sus contratistas — aplicadas a nuestra práctica consultiva.",
    icon: Zap,
    image: "/visual/imagenes/v4.webp",
    activeOverlay:
      "bg-[linear-gradient(180deg,rgba(11,35,65,0.3)_0%,rgba(11,35,65,0.82)_60%,rgba(11,35,65,0.96)_100%)]",
    inactiveOverlay:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(238,245,252,0.86)_44%,rgba(227,237,248,0.9)_100%)]",
  },
  {
    number: "05",
    title: "Capacidad de escala",
    desc: "Cuando el proyecto crece, APEN puede crecer con él. Participamos en licitaciones CFE y PEMEX con Padrón 4493015 y Achilles 00249023. El cliente no necesita cambiarse de firma al pasar de la consultoría a la ejecución.",
    icon: BadgeCheck,
    image: "/visual/imagenes/metricas.jpg",
    activeOverlay:
      "bg-[linear-gradient(180deg,rgba(0,91,181,0.3)_0%,rgba(0,91,181,0.82)_60%,rgba(0,91,181,0.96)_100%)]",
    inactiveOverlay:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(235,245,255,0.86)_44%,rgba(220,238,255,0.9)_100%)]",
  },
];

export default function Capabilities() {
  const [activePanel, setActivePanel] = useState(2);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    // — Línea decorativa del header —
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // — Label "Certeza Operativa" —
    gsap.fromTo(
      labelRef.current,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // — Título partido en dos líneas —
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40, skewY: 3 },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // — Quote a la derecha —
    gsap.fromTo(
      quoteRef.current,
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 76%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // — Cards en batch: entran desde abajo en cascada —
    const cards = cardsRef.current?.querySelectorAll(".capability-card");
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // — Barra de progreso al fondo de la sección (scrub) —
    const progressBar = section.querySelector(".progress-bar");
    if (progressBar) {
      gsap.fromTo(
        progressBar,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section
      id="capacidades"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 md:py-24"
    >
      {/* Barra de progreso scrub */}
      <div
        className="progress-bar pointer-events-none absolute bottom-0 left-0 h-[3px] w-full origin-left bg-gradient-to-r from-[#008CDE] to-[#0B2341]"
        style={{ transform: "scaleX(0)" }}
      />

      <div className="relative z-10 mx-auto max-w-[1300px] px-4 md:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="flex gap-0">
            {/* Línea decorativa */}
            <div
              ref={lineRef}
              className="mr-6 w-1 self-stretch bg-[#0B2341] origin-top"
              style={{ transform: "scaleY(0)" }}
            />
            <div className="pl-2">
              <span
                ref={labelRef}
                className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#008CDE]"
                style={{ opacity: 0 }}
              >
                Certeza Operativa
              </span>
              <h2
                ref={titleRef}
                className="text-3xl font-black uppercase leading-[0.9] tracking-tighter text-[#0B2341] md:text-5xl"
                style={{ opacity: 0 }}
              >
                Ventajas <br /> Competitivas
              </h2>
            </div>
          </div>
          <p
            ref={quoteRef}
            className="max-w-sm text-xs font-medium italic text-gray-500 md:text-right md:text-sm"
            style={{ opacity: 0 }}
          >
            "Ingenieria y cumplimiento regulatorio integrados en un frente
            inquebrantable."
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="flex h-[600px] w-full flex-col gap-3 md:h-[450px] md:flex-row lg:h-[500px]"
        >
          {advantages.map((item, idx) => {
            const isActive = activePanel === idx;

            return (
              <div
                key={item.number}
                onMouseEnter={() => setActivePanel(idx)}
                onClick={() => setActivePanel(idx)}
                className={`capability-card group relative flex cursor-pointer flex-col justify-end overflow-hidden rounded-[1.5rem] p-6 transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] md:p-8 ${
                  isActive
                    ? "flex-[4] bg-[#0B2341] shadow-2xl shadow-blue-900/20 lg:flex-[5]"
                    : "flex-1 border border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100/80"
                }`}
                style={{ opacity: 0 }}
              >
                {/* BG image */}
                <div
                  className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[900ms] ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive ? item.activeOverlay : item.inactiveOverlay
                  }`}
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive ? "bg-[#0B2341]/16" : "bg-white/10"
                  }`}
                />

                {isActive && (
                  <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#008CDE] opacity-20 blur-[100px]" />
                )}

                {/* Número grande */}
                <span
                  className={`pointer-events-none absolute select-none font-black italic leading-none transition-all duration-700 ${
                    isActive
                      ? "-top-8 right-2 text-[180px] text-white/[0.20]"
                      : "right-4 top-4 text-[70px] text-[#0B2341]/15 md:left-1/2 md:right-auto md:top-20 md:-translate-x-1/2"
                  }`}
                >
                  {item.number}
                </span>

                {/* Ícono */}
                <div
                  className={`absolute top-6 transition-all duration-500 md:top-8 ${
                    isActive
                      ? "left-6 md:left-10"
                      : "left-6 md:left-1/2 md:-translate-x-1/2"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm transition-all duration-500 md:h-14 md:w-14 ${
                      isActive
                        ? "border border-white/20 bg-white/10 text-[#008CDE] backdrop-blur-md"
                        : "border border-gray-200 bg-white text-[#0B2341]"
                    }`}
                  >
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Título vertical (desktop inactivo) */}
                <div
                  className={`absolute left-0 right-0 top-[140px] hidden justify-center transition-all duration-300 md:flex ${
                    isActive
                      ? "pointer-events-none opacity-0"
                      : "opacity-100 delay-200"
                  }`}
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  <span className="whitespace-nowrap text-xs font-black uppercase tracking-[0.2em] text-gray-500 lg:text-sm">
                    {item.title}
                  </span>
                </div>

                {/* Título horizontal (mobile inactivo) */}
                <div
                  className={`absolute left-20 right-4 top-8 transition-all duration-300 md:hidden ${
                    isActive
                      ? "pointer-events-none opacity-0"
                      : "opacity-100 delay-200"
                  }`}
                >
                  <span className="block truncate text-xs font-black uppercase tracking-widest text-gray-600">
                    {item.title}
                  </span>
                </div>

                {/* Contenido activo */}
                <div
                  className={`relative z-10 flex w-full flex-col justify-end transition-all duration-500 md:max-w-[400px] lg:max-w-[500px] ${
                    isActive
                      ? "translate-y-0 opacity-100 delay-150"
                      : "pointer-events-none absolute bottom-8 translate-y-12 opacity-0"
                  }`}
                >
                  <h3 className="mb-4 text-2xl font-black uppercase leading-[1.1] tracking-tighter text-white md:text-3xl lg:text-4xl">
                    {item.title}
                  </h3>
                  <p className="border-l-[3px] border-[#008CDE] pl-4 text-sm font-medium leading-relaxed text-blue-100/90 md:pl-5 md:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
