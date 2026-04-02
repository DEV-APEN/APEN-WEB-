"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Layout, ShieldCheck, Zap } from 'lucide-react';

const competitiveAdvantages = [
  { 
    title: 'Dominio Normativo CFE', 
    desc: 'Conocimiento profundo de especificaciones técnicas: DCCSED01, DCCSET01, PYCON-SE-01.',
    icon: Ruler
  },
  { 
    title: 'Capacidad Multidisciplinaria', 
    desc: 'Integración total: ingeniería + obra civil + electromecánica + consultoría en un solo frente.',
    icon: Layout
  },
  { 
    title: 'Certeza Internacional', 
    desc: 'Procesos auditados y respaldados por los más altos estándares ISO (9001, 14001, 45001).',
    icon: ShieldCheck
  },
  { 
    title: 'Estructura de Alta Eficiencia', 
    desc: 'Red de especialistas y aliados estratégicos que permite alta eficiencia en costos y tiempos de entrega.',
    icon: Zap
  }
];

export default function Capabilities() {
  return (
    <section id="capacidades" className="bg-white py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header Section (Synced with Image Title) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-l-8 border-[#008CDE] pl-8">
          <div className="max-w-2xl">
            <span className="text-[#008CDE] font-bold tracking-[0.25em] uppercase text-[10px] mb-4 block">Propuesta de Valor</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B2341] tracking-tighter uppercase leading-[0.9] mb-4">
              Ventajas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008CDE] to-[#0B2341]">Competitivas</span>
            </h2>
          </div>
          
          <div className="max-w-md">
            <p className="text-gray-400 text-base font-medium leading-relaxed italic">
              "Ingeniería y cumplimiento regulatorio integrados para garantizar la viabilidad técnica de su infraestructura."
            </p>
          </div>
        </div>

        {/* Global Glassmorphic Container (Simulating the shared light glow in the image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competitiveAdvantages.map((advantage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative h-full"
            >
              {/* GLASSMORMIC CARD DESIGN WITH NOTICEABLE REFINED BORDERS */}
              <div className="h-full relative p-8 rounded-[2.5rem] border border-[#008CDE]/10 shadow-[0_20px_40px_-15px_rgba(0,140,222,0.08)] flex flex-col items-center text-center overflow-hidden backdrop-blur-sm bg-gradient-to-b from-[#008CDE]/5 via-[#008CDE]/[0.02] to-white/95 transition-all duration-500">
                
                {/* Visual Glass Accent Spot (Enhanced Reflection) */}
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-white/40 rounded-full blur-2xl pointer-events-none"></div>

                {/* Icon Hub (Compact Size) */}
                <div className="mb-8 relative">
                  <div className="w-16 h-16 bg-white shadow-md flex items-center justify-center rounded-full border border-gray-100 text-[#008CDE]">
                    <advantage.icon size={26} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content (Directly from Image) */}
                <div className="flex-grow flex flex-col items-center justify-start">
                  <h3 className="text-xs md:text-sm font-black text-[#0B2341] mb-5 tracking-tight uppercase leading-tight min-h-[2.5rem] flex items-center justify-center px-2">
                    {advantage.title}
                  </h3>
                  
                  {/* Subtle Separator Line (Light Blue) */}
                  <div className="w-8 h-[1px] bg-[#008CDE]/20 mb-6"></div>
                  
                  <p className="text-[#0B2341]/60 text-[11px] md:text-xs leading-relaxed font-bold max-w-[90%]">
                    {advantage.desc}
                  </p>
                </div>

                {/* Blue Interaction Bar (From the bottom of the image cards) */}
                <div className="w-8 h-1.5 bg-[#008CDE] rounded-full mt-8 shadow-sm"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
