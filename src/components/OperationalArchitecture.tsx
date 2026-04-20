"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Settings2, CheckCircle2, ShieldCheck } from "lucide-react";

export default function OperationalArchitecture() {
  const [activeTab, setActiveTab] = useState(0);
  const gradientTitle = "bg-gradient-to-r from-[#0B2341] via-[#0067B8] to-[#1AA8FF] bg-clip-text text-transparent";

  const tabs = [
    { label: "Obra Civil", index: 0 },
    { label: "Gestion", index: 1 },
    { label: "Cumplimiento", index: 2 },
    { label: "Mantenimiento", index: 3 },
  ];

  const serviceNodes = [
    {
      title: "Ingenieria",
      description: "Diseno para distribucion y transmision. Memorias de calculo.",
      lineClass: "w-[12rem] xl:w-[18rem]",
      verticalLine: { dir: "down", h: "h-[6rem]" },
    },
    {
      title: "Obra y Cimentacion",
      description: "Terracerias, cimientos y canalizaciones.",
      lineClass: "w-[10rem] xl:w-[15rem]",
      verticalLine: { dir: "down", h: "h-[2rem]" },
    },
    {
      title: "Montaje",
      description: "Estructuras, equipos primarios y cableado.",
      lineClass: "w-[7rem] xl:w-[12rem]",
    },
    {
      title: "Seguridad",
      description: "Alumbrado, drenaje y seguridad industrial.",
      lineClass: "w-[18rem] xl:w-[25rem]",
      verticalLine: { dir: "up", h: "h-[4rem]" },
    },
  ];

  const panelTransition = {
    initial: { opacity: 0, y: 18, filter: "blur(6px)" },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const },
    },
    exit: {
      opacity: 0,
      y: -12,
      filter: "blur(4px)",
      transition: { duration: 0.22, ease: [0.4, 0, 1, 1] as const },
    },
  };

  const projectPhases = [
    {
      num: "01",
      title: "Planificacion",
      text: "Definicion estrategica de objetivos.",
      icon: <img src="/visual/imagenes/planeacion (1).svg" alt="Planeacion" className="h-14 w-14 object-contain" />,
    },
    {
      num: "02",
      title: "Organizacion",
      text: "Estructuracion de equipos y calendarios.",
      icon: <img src="/visual/imagenes/fase2.png" alt="Fase 02" className="h-14 w-14 object-contain" />,
    },
    {
      num: "03",
      title: "Monitoreo",
      text: "Control riguroso de calidad y KPIs.",
      icon: <img src="/visual/imagenes/ejecucion.png" alt="Ejecucion" className="h-14 w-14 object-contain" />,
    },
    {
      num: "04",
      title: "Evaluacion",
      text: "Consolidacion y validacion final.",
      icon: <img src="/visual/imagenes/contrato.svg" alt="Cierre" className="h-14 w-14 object-contain" />,
    },
  ];

  return (
    <section id="arquitectura" className="relative overflow-hidden border-t border-slate-200/60 bg-[#FAFCFD] py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className={`text-4xl font-black uppercase md:text-5xl ${gradientTitle}`}>Modelo APEN</h2>
        </div>

        <div className="relative z-20 mb-20 flex flex-wrap justify-center gap-2 md:gap-4">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.index}
              onClick={() => setActiveTab(tab.index)}
              className={`border-b-2 px-6 py-3 text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                activeTab === tab.index ? "border-[#008CDE] bg-[#008CDE]/5 text-[#0B2341]" : "border-transparent text-slate-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="min-h-[450px]">
          <AnimatePresence mode="wait" initial={false}>
            {activeTab === 0 && (
              <motion.div key="p1" variants={panelTransition} initial="initial" animate="animate" exit="exit">
                <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 pb-16 pt-8 lg:flex-row">
                  <div className="relative flex w-full justify-center lg:w-[55%]">
                    <img src="/visual/imagenes/diagrama servicios.jpeg" alt="Diagrama" loading="lazy" decoding="async" className="max-h-[400px] h-auto w-full object-contain" />
                  </div>
                  <div className="relative flex w-full flex-col gap-4 lg:w-[45%]">
                    {serviceNodes.map((node, i) => (
                      <div key={i} className="relative rounded-2xl border border-slate-100 border-l-4 border-l-[#0B2341] bg-white p-6 shadow-sm">
                        <div className={`pointer-events-none absolute left-0 top-[50%] z-10 hidden h-[2px] -translate-x-full bg-[#00a2ff] shadow-[0_0_8px_rgba(0,162,255,0.8)] lg:block ${node.lineClass}`}>
                          {node.verticalLine ? (
                            <div className={`absolute left-0 w-[2px] bg-[#00a2ff] shadow-[0_0_8px_rgba(0,162,255,0.8)] ${node.verticalLine.dir === "down" ? "top-0" : "bottom-0"} ${node.verticalLine.h}`}>
                              <div className={`absolute -left-1 h-3 w-3 rounded-full border border-white bg-[#00a2ff] shadow-[0_0_10px_rgba(0,162,255,1)] ${node.verticalLine.dir === "down" ? "-bottom-1.5" : "-top-1.5"}`} />
                            </div>
                          ) : (
                            <div className="absolute top-1/2 -left-1 h-3 w-3 -translate-y-1/2 rounded-full border border-white bg-[#00a2ff] shadow-[0_0_10px_rgba(0,162,255,1)]" />
                          )}
                        </div>

                        <div className="relative z-20">
                          <h4 className={`mb-2 text-sm font-black uppercase ${gradientTitle}`}>{node.title}</h4>
                          <p className="text-[12px] font-bold leading-relaxed text-slate-500">{node.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 1 && (
              <motion.div key="p2" variants={panelTransition} initial="initial" animate="animate" exit="exit" className="pt-6">
                <div className="relative mb-2 hidden grid-cols-4 gap-6 md:grid">
                  <div className="absolute left-[12.5%] right-[12.5%] top-[8px] z-0 h-[2px] rounded-full bg-[#00a2ff] shadow-[0_0_15px_rgba(0,162,255,0.9)]" />

                  {projectPhases.map((phase, idx) => (
                    <div key={`dot-${idx}`} className="relative z-10 flex flex-col items-center focus:outline-[0px]">
                      <div className="z-20 h-4 w-4 rounded-full border-2 border-[#00a2ff] bg-white shadow-[0_0_12px_rgba(0,162,255,1)]" />
                      <div className="mt-1 h-10 w-[2px] bg-gradient-to-b from-[#00a2ff] to-transparent" />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                  {projectPhases.map((phase) => (
                    <div key={phase.num} className="group relative mt-0 rounded-[2rem] border border-slate-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 md:p-8">
                      <div className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 transition-colors group-hover:border-[#00a2ff]/30">
                        {phase.icon}
                      </div>
                      <h4 className={`relative z-10 mb-3 text-sm font-black uppercase tracking-tight ${gradientTitle}`}>{phase.title}</h4>
                      <p className="relative z-10 text-[11.5px] font-bold leading-relaxed text-slate-500">{phase.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 2 && (
              <motion.div key="p3" variants={panelTransition} initial="initial" animate="animate" exit="exit" className="py-10">
                <div className="relative flex flex-col items-center justify-center gap-10 md:flex-row md:gap-16">
                  <div className="flex w-full flex-col items-center gap-4 md:w-1/3 md:items-end">
                    <div className="relative w-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                      <div className="absolute -right-3 top-1/2 hidden h-[2px] w-6 -translate-y-1/2 bg-slate-200 md:block" />
                      <h5 className="mb-2 text-center text-[10px] font-black uppercase tracking-widest text-slate-400 md:text-right">Entradas e Insumos</h5>
                      <ul className="space-y-3 text-[11px] font-bold text-slate-600">
                        <li className="flex items-center justify-center gap-2 md:justify-end">
                          Pliegos tecnicos <div className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                        </li>
                        <li className="flex items-center justify-center gap-2 md:justify-end">
                          Anexos y requisitos <div className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                        </li>
                        <li className="flex items-center justify-center gap-2 md:justify-end">
                          Criterios de precio <div className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative flex flex-col items-center justify-center">
                    <div className="absolute inset-0 -m-8 rounded-full border border-blue-100 opacity-20 animate-ping" />

                    <div className="relative z-10 flex h-40 w-40 flex-col items-center justify-center rounded-[3rem] border border-[#00a2ff]/30 bg-[#0B2341] p-6 text-center shadow-2xl md:h-48 md:w-48">
                      <ShieldCheck className="mb-3 text-[#00a2ff]" size={44} />
                      <span className="mb-2 text-[12px] font-black uppercase tracking-tight text-white">Motor APEN</span>
                      <div className="mb-2 h-[1px] w-full bg-white/10" />
                      <div className="space-y-1 italic opacity-80">
                        <p className="text-[9px] font-bold uppercase text-blue-200">Analisis de conceptos</p>
                        <p className="text-[9px] font-bold uppercase text-blue-200">Matriz de riesgos</p>
                        <p className="text-[9px] font-bold uppercase text-blue-200">Formatos oficiales</p>
                      </div>
                    </div>

                    <div className="absolute top-1/2 -left-16 hidden h-[2px] w-16 bg-gradient-to-r from-slate-200 to-[#00a2ff] md:block" />
                    <div className="absolute top-1/2 -right-16 hidden h-[2px] w-16 bg-gradient-to-r from-[#00a2ff] to-slate-200 md:block" />
                  </div>

                  <div className="flex w-full flex-col items-center gap-4 md:w-1/3 md:items-start">
                    <div className="relative w-full rounded-2xl border-2 border-slate-100 bg-white p-6 shadow-md">
                      <div className="absolute -left-3 top-1/2 hidden h-[2px] w-6 -translate-y-1/2 bg-slate-200 md:block" />
                      <h5 className="mb-2 text-[10px] font-black uppercase tracking-widest text-[#008CDE]">Salida y Validacion</h5>
                      <ul className="space-y-3 text-[12px] font-black uppercase tracking-tighter text-[#0B2341]">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="text-[#00C292]" size={14} /> Propuestas blindadas
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="text-[#00C292]" size={14} /> Aclaraciones tecnicas
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="text-[#00C292]" size={14} /> Certidumbre total
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 3 && (
              <motion.div key="p4" variants={panelTransition} initial="initial" animate="animate" exit="exit" className="pt-6">
                <div className="relative flex flex-col items-center justify-center gap-10 md:flex-row md:gap-8 max-w-5xl mx-auto">
                  
                  {/* Lado Izquierdo */}
                  <div className="flex w-full flex-col gap-4 text-center md:w-[30%] md:text-right">
                    <h4 className="bg-gradient-to-l from-[#0B2341] to-[#008CDE] bg-clip-text text-2xl font-black uppercase tracking-tighter text-transparent">
                      Mantenimiento Especializado
                    </h4>
                    <p className="text-[12px] font-bold leading-relaxed text-slate-500 italic">
                      Mantenimiento preventivo y correctivo a infraestructura eléctrica crítica.
                    </p>
                    <div className="flex justify-center gap-2 md:justify-end">
                      <span className="rounded-full border border-blue-50 bg-blue-50/50 px-3 py-1 text-[10px] font-black uppercase text-blue-500">Preventivo</span>
                      <span className="rounded-full border border-blue-50 bg-blue-50/50 px-3 py-1 text-[10px] font-black uppercase text-blue-500">Correctivo</span>
                    </div>
                  </div>

                  {/* Centro: Mecanismo Asimétrico */}
                  <div className="relative flex h-[320px] w-full items-center justify-center md:w-[40%]">
                    {/* Engranaje Principal (Arriba - Izquierda) */}
                    <div className="absolute left-6 top-4 z-10 h-40 w-40 md:h-48 md:w-48 animate-spin [animation-duration:25s]">
                      <img src="/visual/imagenes/gear1 (1).png" loading="lazy" decoding="async" className="h-full w-full object-contain filter drop-shadow-xl" alt="Gear Primary" />
                    </div>

                    {/* Engranaje Secundario (Abajo - Derecha - Chico) */}
                    <div className="absolute bottom-4 right-6 z-10 h-32 w-32 md:h-36 md:w-36 animate-spin [animation-duration:20s] [animation-direction:reverse]">
                      <img src="/visual/imagenes/gear1 (2).png" loading="lazy" decoding="async" className="h-full w-full object-contain opacity-90 filter drop-shadow-lg" alt="Gear Secondary" />
                    </div>

                    {/* Esfera de Cristal Central */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                       <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-sky-400/30 bg-gradient-to-br from-white via-blue-50 to-[#008CDE]/20 shadow-[0_20px_60px_-15px_rgba(0,140,222,0.4)] backdrop-blur-xl">
                          {/* Luz Interna y Reflejos */}
                          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.8),transparent)] opacity-60" />
                          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,140,222,0.2)]" />
                          
                          <span className="relative z-10 px-4 text-center text-[10px] font-black uppercase tracking-tight text-[#0B2341] leading-tight">
                            Maximización de<br/><span className="text-[#008CDE]">Vida Útil</span>
                          </span>
                       </div>
                    </div>

                    {/* Linea de transmisión suave */}
                    <div className="absolute h-[2px] w-[70%] -rotate-12 bg-gradient-to-r from-transparent via-blue-100/40 to-transparent" />
                  </div>

                  {/* Lado Derecho */}
                  <div className="flex w-full flex-col gap-4 text-center md:w-[30%] md:text-left">
                    <h4 className="bg-gradient-to-r from-[#0B2341] to-[#008CDE] bg-clip-text text-2xl font-black uppercase tracking-tighter text-transparent">
                      Modernización y Seguridad
                    </h4>
                    <p className="text-[12px] font-bold leading-relaxed text-slate-500 italic">
                      Actualización de sistemas de control y videovigilancia industrial activa.
                    </p>
                    <div className="flex justify-center gap-2 md:justify-start">
                      <span className="rounded-full border border-blue-50 bg-blue-50/50 px-3 py-1 text-[10px] font-black uppercase text-blue-500">Control</span>
                      <span className="rounded-full border border-blue-50 bg-blue-50/50 px-3 py-1 text-[10px] font-black uppercase text-blue-500">CCTV</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
