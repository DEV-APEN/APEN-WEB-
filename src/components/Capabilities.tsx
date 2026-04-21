"use client";

import React, { useState } from "react";
import { Ruler, Layout, ShieldCheck, Zap, BadgeCheck } from "lucide-react";

const advantages = [
  {
    number: "01",
    title: "Dominio Normativo CFE",
    desc: "Dominio experto de especificaciones institucionales: DCCSED01, DCCSET01, PYCON-SE-01. Garantizamos exito en las revisiones e inspecciones federales desde el primer intento.",
    icon: Ruler,
    image: "/visual/imagenes/v1.webp",
    activeOverlay:
      "bg-[linear-gradient(180deg,rgba(11,35,65,0.26)_0%,rgba(11,35,65,0.74)_58%,rgba(11,35,65,0.94)_100%)]",
    inactiveOverlay:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(248,250,252,0.88)_42%,rgba(241,245,249,0.92)_100%)]",
  },
  {
    number: "02",
    title: "Integracion Multidisciplinaria",
    desc: "Un unico interlocutor con control absoluto: fusionamos ingenieria civil, infraestructura electromecanica y gestion de permisos en un equipo operativo unico.",
    icon: Layout,
    image: "/visual/imagenes/v2.webp",
    activeOverlay:
      "bg-[linear-gradient(180deg,rgba(11,35,65,0.24)_0%,rgba(11,35,65,0.74)_58%,rgba(11,35,65,0.94)_100%)]",
    inactiveOverlay:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(243,248,253,0.86)_44%,rgba(233,243,252,0.9)_100%)]",
  },
  {
    number: "03",
    title: "Certeza Internacional ISO",
    desc: "Procesos auditados bajo los mas rigurosos estandares globales de calidad, ambiental y seguridad (ISO 9001, 14001, 45001).",
    icon: ShieldCheck,
    image: "/visual/imagenes/v3.webp",
    activeOverlay:
      "bg-[linear-gradient(180deg,rgba(11,35,65,0.22)_0%,rgba(11,35,65,0.72)_58%,rgba(11,35,65,0.94)_100%)]",
    inactiveOverlay:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.78)_0%,rgba(242,248,252,0.86)_44%,rgba(234,242,248,0.9)_100%)]",
  },
  {
    number: "04",
    title: "Capacidad de Consorcio",
    desc: "Capacidad de consorcio: participamos como líderes técnico-jurídicos en licitaciones CFE y PEMEX. Estructuramos SPVs y convenios de participación para proyectos de gran escala.",
    icon: Zap,
    image: "/visual/imagenes/v4.webp",
    activeOverlay:
      "bg-[linear-gradient(180deg,rgba(11,35,65,0.3)_0%,rgba(11,35,65,0.82)_60%,rgba(11,35,65,0.96)_100%)]",
    inactiveOverlay:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(238,245,252,0.86)_44%,rgba(227,237,248,0.9)_100%)]",
  },
  {
    number: "05",
    title: "Operador habilitado PEMEX",
    desc: "Operador habilitado ante PEMEX — con contratos ejecutados. Registro Extendido Achilles ID 00249023, vigente 2026. Proveedor activo, no aspirante.",
    icon: ShieldCheck,
    image: "/visual/imagenes/metricas.jpg",
    activeOverlay:
      "bg-[linear-gradient(180deg,rgba(0,91,181,0.3)_0%,rgba(0,91,181,0.82)_60%,rgba(0,91,181,0.96)_100%)]",
    inactiveOverlay:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(235,245,255,0.86)_44%,rgba(220,238,255,0.9)_100%)]",
  },
];

export default function Capabilities() {
  const [activePanel, setActivePanel] = useState(0);

  return (
    <section id="capacidades" className="relative overflow-hidden bg-white py-20 md:py-24">
      <div className="relative z-10 mx-auto max-w-[1300px] px-4 md:px-8">
        <div className="mb-12 flex flex-col gap-6 border-l-4 border-[#0B2341] pl-6 md:flex-row md:items-end md:justify-between md:pl-8">
          <div>
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#008CDE]">
              Certeza Operativa
            </span>
            <h2 className="text-3xl font-black uppercase leading-[0.9] tracking-tighter text-[#0B2341] md:text-5xl">
              Ventajas <br /> Competitivas
            </h2>
          </div>
          <p className="max-w-sm text-xs font-medium italic text-gray-500 md:text-right md:text-sm">
            "Ingenieria y cumplimiento regulatorio integrados en un frente inquebrantable."
          </p>
        </div>

        <div className="flex h-[600px] w-full flex-col gap-3 md:h-[450px] md:flex-row lg:h-[500px]">
          {advantages.map((item, idx) => {
            const isActive = activePanel === idx;

            return (
              <div
                key={item.number}
                onMouseEnter={() => setActivePanel(idx)}
                onClick={() => setActivePanel(idx)}
                className={`group relative flex cursor-pointer flex-col justify-end overflow-hidden rounded-[1.5rem] p-6 transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] md:p-8 ${
                  isActive
                    ? "flex-[4] bg-[#0B2341] shadow-2xl shadow-blue-900/20 lg:flex-[5]"
                    : "flex-1 border border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100/80"
                }`}
              >
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

                <span
                  className={`pointer-events-none absolute select-none font-black italic leading-none transition-all duration-700 ${
                    isActive
                      ? "-top-8 right-2 text-[180px] text-white/[0.20]"
                      : "right-4 top-4 text-[70px] text-[#0B2341]/15 md:left-1/2 md:right-auto md:top-20 md:-translate-x-1/2"
                  }`}
                >
                  {item.number}
                </span>

                <div
                  className={`absolute top-6 transition-all duration-500 md:top-8 ${
                    isActive ? "left-6 md:left-10" : "left-6 md:left-1/2 md:-translate-x-1/2"
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

                <div
                  className={`absolute left-0 right-0 top-[140px] hidden justify-center transition-all duration-300 md:flex ${
                    isActive ? "pointer-events-none opacity-0" : "opacity-100 delay-200"
                  }`}
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  <span className="whitespace-nowrap text-xs font-black uppercase tracking-[0.2em] text-gray-500 lg:text-sm">
                    {item.title}
                  </span>
                </div>

                <div
                  className={`absolute left-20 right-4 top-8 transition-all duration-300 md:hidden ${
                    isActive ? "pointer-events-none opacity-0" : "opacity-100 delay-200"
                  }`}
                >
                  <span className="block truncate text-xs font-black uppercase tracking-widest text-gray-600">
                    {item.title}
                  </span>
                </div>

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
