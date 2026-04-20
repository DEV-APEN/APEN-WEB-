"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users2, Award, Building2 } from 'lucide-react';

const trustStats = [
  { 
    label: "Proyectos Industriales", 
    value: "140", 
    suffix: "+",
    desc: "Infraestructura crítica operando.",
    icon: CheckCircle2
  },
  { 
    label: "Clientes Corporativos", 
    value: "60", 
    suffix: "+",
    desc: "Empresas líderes del sector energético.",
    icon: Users2
  },
  { 
    label: "Certeza Normativa", 
    value: "100", 
    suffix: "%",
    desc: "Cumplimiento ante CFE/ASEA.",
    icon: Award
  },
  { 
    label: "Presencia Nacional", 
    value: "32", 
    suffix: "",
    desc: "Cobertura total de la república.",
    icon: Building2
  }
];

export default function CorporateMetrics() {
  return (
    <section className="relative bg-[#040D1D] py-24 md:py-36 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/visual/imagenes/metricas.jpg"
          alt="Métricas de fondo"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,13,29,0.95)_0%,rgba(4,13,29,0.5)_50%,rgba(4,13,29,0.95)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,140,222,0.1),transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
            Sólidez <span className="text-[#008CDE]">Operativa</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {trustStats.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#008CDE]/20 border border-[#008CDE]/30 flex items-center justify-center text-[#008CDE]">
                   <item.icon size={24} />
                </div>
                <div className="flex items-baseline gap-1">
                   <span className="text-4xl md:text-5xl font-black text-white italic tracking-tighter leading-none">{item.value}</span>
                   <span className="text-xl font-black text-[#008CDE]">{item.suffix}</span>
                </div>
              </div>

              <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/90 mb-3">{item.label}</h3>
              
              <div className="relative h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-4">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: '100%' }}
                   viewport={{ once: true }}
                   transition={{ duration: 1.5, ease: "circOut" }}
                   className="h-full bg-gradient-to-r from-blue-700 to-[#008CDE]"
                 />
              </div>

              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-10">
           <div className="max-w-2xl">
              <h4 className="text-xl md:text-2xl font-black text-white/80 uppercase tracking-tighter italic">
                Certeza técnica institucional que impulsa la continuidad de activos energéticos.
              </h4>
           </div>
           <div className="flex items-center gap-4 px-8 py-4 rounded-xl bg-[#008CDE]/10 border border-[#008CDE]/30 backdrop-blur-sm">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-black text-[#008CDE] uppercase tracking-[0.4em]">Capacidad Ejecutiva Certificada</span>
           </div>
        </div>
      </div>
    </section>
  );
}
