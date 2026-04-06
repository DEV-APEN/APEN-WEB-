"use client";
import React from 'react';
import { motion } from 'framer-motion';

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
          <h2 className="text-4xl md:text-5xl font-black text-[#0B2341] tracking-tighter uppercase leading-none">
            Ecosistema de <br />
            <span className="text-[#008CDE]">Soluciones</span>
          </h2>
        </div>

        {/* ESTRUCTURA DE INTEGRACIÓN 360 */}
        <div className="relative min-h-[500px] md:min-h-[600px] flex flex-col md:items-center md:justify-center">
          
          {/* EL CORE CENTRAL: INTEGRACIÓN 360 (Oculto o simplificado en mobile extremo, presente en md) */}
          <div className="hidden md:flex absolute z-30 w-40 h-40 md:w-56 md:h-56 bg-white rounded-full shadow-[0_20px_50px_rgba(0,140,222,0.2)] border border-slate-100 items-center justify-center text-center p-6 translate-y-[-50%] top-1/2">
            <div className="space-y-1">
              <span className="text-[12px] md:text-[14px] font-black text-[#0B2341] uppercase tracking-tighter leading-tight block">
                Integración
              </span>
              <span className="text-[24px] md:text-[32px] font-black text-[#008CDE] uppercase leading-none block">
                360°
              </span>
            </div>
            {/* Anillos rotativos de efecto tech */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-[#008CDE]/20 rounded-full scale-110"
            ></motion.div>
          </div>

        {/* LAS CRUCETAS DE SEPARACIÓN (DIAGRAMA) - Solo Desktop */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center max-w-full overflow-hidden">
            {/* Línea Horizontal */}
            <div className="w-full max-w-full h-[2px] bg-[#0B2341]/10 px-10"></div>
            {/* Línea Vertical */}
            <div className="absolute h-full w-[4px] bg-[#0B2341] rounded-full"></div>
          </div>

          {/* LAS SOLUCIONES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12 md:gap-y-20 w-full relative z-20">
            {ecosystemItems.map((item, idx) => (
              <motion.div 
                key={item.number}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={`flex items-start md:items-center gap-4 md:gap-6 p-4 ${idx % 2 === 1 ? 'md:flex-row-reverse md:text-right text-left' : 'text-left'}`}
              >
                {/* NUMERACIÓN GIGANTE */}
                <span className="text-[40px] md:text-[140px] font-black text-transparent bg-clip-text bg-gradient-to-b from-[#008CDE]/25 to-transparent leading-none select-none shrink-0">
                  {item.number}
                </span>
                
                {/* CONTENIDO TÉCNICO */}
                <div className="max-w-[280px] space-y-2">
                  <h3 className="text-base md:text-xl font-black text-[#0B2341] uppercase leading-tight tracking-tighter">
                    {item.title}
                  </h3>
                  <p className="text-[10px] md:text-[13px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
