"use client";
import React from 'react';

const ecosystemItems = [
  {
    number: '01',
    title: 'Obra Civil y Electromecánica',
    description: 'Construcción de subestaciones, infraestructura de media y alta tensión.'
  },
  {
    number: '02',
    title: 'Administración de Proyectos',
    description: 'Planeación, control a precios unitarios, Micrositio de Concursos (MSC).'
  },
  {
    number: '03',
    title: 'Consultoría Normativa',
    description: 'Integración documental, evaluación de riesgos, formatos oficiales CFE.'
  },
  {
    number: '04',
    title: 'Servicios Técnicos',
    description: 'Mantenimiento especializado, modernización de sistemas de control, seguridad industrial.'
  }
];

export default function Ecosystem() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* TITULO DE SECCIÓN */}
        <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-[#0B2341] tracking-tighter uppercase leading-[0.85] mb-6">
              Integración <br />
              <span className="text-[#008CDE]">Técnica</span> 360°
            </h2>
            <p className="text-gray-400 text-sm md:text-lg font-medium leading-relaxed mb-8 max-w-md italic">
              "Garantizamos la viabilidad técnica y el cumplimiento normativo preventivo en cada fase crítica del proyecto."
            </p>
        {/* DIAGRAMA TÉCNICO Y CORE CENTRAL */}
        <div className="relative">
          
          {/* LAS CRUCETAS DE SEPARACIÓN (DIAGRAMA) - Solo Desktop */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center max-w-full overflow-hidden pointer-events-none">
            {/* Línea Horizontal */}
            <div className="w-full max-w-full h-[2px] bg-[#0B2341]/10 px-10"></div>
            {/* Línea Vertical */}
            <div className="absolute h-full w-[4px] bg-[#0B2341] rounded-full"></div>
          </div>

          {/* EL CORE CENTRAL: INTEGRACIÓN 360 */}
          <div className="hidden md:flex absolute z-30 w-40 h-40 md:w-64 md:h-64 bg-white rounded-full shadow-[0_20px_60px_rgba(0,140,222,0.25)] border border-slate-100 items-center justify-center text-center p-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="space-y-1">
              <span className="text-[12px] md:text-[14px] font-black text-[#0B2341] uppercase tracking-tighter leading-tight block">
                Integración
              </span>
              <span className="text-[28px] md:text-[38px] font-black text-[#008CDE] uppercase leading-none block">
                360°
              </span>
            </div>
            {/* Anillos rotativos de efecto tech — CSS puro, sin JS */}
            <div className="absolute inset-0 border-2 border-dashed border-[#008CDE]/20 rounded-full scale-110 animate-spin [animation-duration:25s]" />
          </div>

          {/* LAS SOLUCIONES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-32 gap-y-12 md:gap-y-32 w-full relative z-20">
            {ecosystemItems.map((item, idx) => (
              <div
                key={item.number}
                className={`flex items-start md:items-center gap-6 md:gap-8 p-4 ${idx % 2 === 1 ? 'md:flex-row-reverse md:text-right text-left text-right' : 'text-left'}`}
              >
                {/* NUMERACIÓN GIGANTE */}
                <span className="text-[50px] md:text-[120px] font-black text-transparent bg-clip-text bg-gradient-to-b from-[#008CDE]/20 to-transparent leading-none select-none shrink-0 italic px-4">
                  {item.number}
                </span>
                
                {/* CONTENIDO TÉCNICO */}
                <div className="max-w-[320px] space-y-3">
                  <h3 className="text-lg md:text-2xl font-black text-[#0B2341] uppercase leading-tight tracking-tighter">
                    {item.title}
                  </h3>
                  <p className="text-[10px] md:text-[14px] font-bold text-gray-400 uppercase tracking-[0.15em] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        </div>

      </div>
    </section>
  );
}
