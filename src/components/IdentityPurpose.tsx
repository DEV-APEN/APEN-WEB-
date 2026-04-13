"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, ShieldCheck, LayoutDashboard } from 'lucide-react';

export default function IdentityPurpose() {
  const pillars = [
    { 
      title: 'Ingeniería y Obra', 
      desc: 'Ejecución física con precisión milimétrica. Subestaciones, media y alta tensión (hasta 230 kV).', 
      icon: HardHat, 
      pos: 'md:top-[0%] md:left-[8%]', 
      delay: 0 
    },
    { 
      title: 'Consultoría Normativa', 
      desc: 'Dominio absoluto de las Disposiciones Generales de la CFE y NOMs aplicables.', 
      icon: ShieldCheck, 
      pos: 'md:top-[0%] md:right-[8%]', 
      delay: 1 
    },
    { 
      title: 'Gestión de Proyectos', 
      desc: 'Administración integral de contratos, estimaciones y avances físico-financieros.', 
      icon: LayoutDashboard, 
      pos: 'md:bottom-[-22%] md:left-1/2 md:-translate-x-1/2', 
      delay: 2 
    }
  ];

  return (
    <section id="capacidades" className="bg-white pt-16 pb-32 md:pt-24 md:pb-48 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative min-h-[500px] md:min-h-[600px] flex items-center justify-center scale-85 md:scale-90">
        
        {/* ORBITAL RINGS - DECORATIVE ANIMATION */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-[400px] h-[400px] border-2 border-[#008CDE]/20 rounded-full shadow-[0_0_30px_rgba(0,140,222,0.1)]"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-[550px] h-[550px] border-2 border-[#008CDE]/10 rounded-full absolute"
          />
        </div>

        {/* NUCLEUS - STATIC HUB WITH ONE-SIDE GRADIENT SHADOW */}
        <div className="z-20 w-56 h-56 md:w-[320px] md:h-[320px] bg-white rounded-full flex flex-col items-center justify-center relative p-1 text-center overflow-hidden shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)]">
          {/* Subtle Side Gradient Glow for Nucleus */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#008CDE]/15 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center">
            <span className="text-[#008CDE]/50 font-mono text-[10px] tracking-[0.4em] mb-2 uppercase block scale-90">APEN Group</span>
            <h2 className="text-2xl md:text-[3.2rem] font-black text-[#0B2341] uppercase leading-none tracking-tighter mb-4 px-4">
              Certeza <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008CDE] to-[#0B2341]">Operativa</span>
            </h2>
            <div className="w-10 h-0.5 bg-[#008CDE] mb-5 rounded-full"></div>
            <p className="text-gray-400 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] scale-90">Rigor Técnico Certificado</p>
          </div>
        </div>

        {/* ORBITING CARDS - ULTRA-SUBTLE FLOATING ANIMATION (SYNCED CONTENT) */}
        <div className="absolute inset-0 pointer-events-none">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              animate={{ 
                y: [6, -10, 6],
                x: idx === 0 ? [2, -2, 2] : idx === 1 ? [-2, 2, -2] : [0, 0, 0],
                rotate: [idx === 0 ? 0.3 : -0.3, idx === 0 ? -0.3 : 0.3, idx === 0 ? 0.3 : -0.3]
              }}
              transition={{ 
                duration: 6 + (idx * 1.2),
                repeat: Infinity, 
                ease: "easeInOut",
                delay: idx * 0.4
              }}
              className={`absolute ${p.pos} bg-white p-8 border border-[#008CDE]/20 shadow-[0_25px_60px_-15px_rgba(140,222,255,0.15)] w-full md:w-[280px] pointer-events-auto rounded-3xl hidden md:block overflow-hidden transition-none`}
            >
              {/* Persistent Corner Gradient Glow (#008CDE to Transparent) */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-[#008CDE]/20 to-transparent rounded-full blur-3xl opacity-100"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-5">
                  <div className="p-4 bg-[#008CDE] text-white rounded-2xl shadow-sm border border-[#008CDE]/10">
                    <p.icon size={36} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-black text-[#008CDE] uppercase tracking-tighter leading-tight">{p.title}</h4>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed border-t border-gray-50 pt-5">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Pillars List */}
        <div className="md:hidden mt-20 grid grid-cols-1 gap-4 w-full px-4">
          {pillars.map((p, idx) => (
            <div key={idx} className="bg-white p-5 border border-[#008CDE]/20 shadow-lg rounded-2xl">
                <div className="flex items-center gap-4">
                    <p.icon className="text-[#008CDE]" size={24} />
                    <h4 className="text-sm font-black text-[#008CDE] uppercase">{p.title}</h4>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
