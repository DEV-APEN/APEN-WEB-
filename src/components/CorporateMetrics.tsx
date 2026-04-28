"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users2, Award, Building2 } from 'lucide-react';

const trustStats = [
  { 
    label: "Trámites Realizados", 
    value: "94", 
    suffix: "",
    desc: "Gestiones integrales ante autoridades.",
    icon: CheckCircle2
  },
  { 
    label: "Concluidos Exitosamente", 
    value: "79", 
    suffix: "",
    desc: "Resoluciones positivas obtenidas.",
    icon: Award
  },
  { 
    label: "Clientes Atendidos", 
    value: "82", 
    suffix: "",
    desc: "Empresas con certeza operativa.",
    icon: Users2
  },
  { 
    label: "Tasa de Conclusión", 
    value: "84", 
    suffix: "%",
    desc: "Eficacia en resolución de trámites.",
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
            Sólidez <span className="text-[#4fc3ff]">Operativa</span>
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
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-[#4fc3ff]">
                   <item.icon size={24} />
                </div>
                <div className="flex items-baseline gap-1">
                   <span className="text-4xl md:text-5xl font-black text-white italic tracking-tighter leading-none">{item.value}</span>
                   <span className="text-xl font-black text-[#4fc3ff]">{item.suffix}</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-24">
          {/* Authority Breakdown */}
          <div className="space-y-8">
            <h3 className="text-sm font-black text-[#4fc3ff] uppercase tracking-[0.4em] mb-8">Por Autoridad</h3>
            {[
              { label: 'CNE', value: 72, color: 'bg-orange-500' },
              { label: 'ASEA', value: 11, color: 'bg-cyan-400' },
              { label: 'SENER', value: 11, color: 'bg-lime-400' }
            ].map((auth) => (
              <div key={auth.label} className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-black text-white uppercase tracking-widest">{auth.label}</span>
                  <span className="text-xs font-black text-[#4fc3ff]">{auth.value}</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(auth.value / 94) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-full ${auth.color} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Team Breakdown */}
          <div className="space-y-8">
            <h3 className="text-sm font-black text-[#4fc3ff] uppercase tracking-[0.4em] mb-8">Equipo Responsable</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { name: 'Lic. Izanami', value: 74, color: 'bg-orange-500' },
                { name: 'Ing. Guillermo', value: 11, color: 'bg-cyan-400' },
                { name: 'Ing. Carlos', value: 7, color: 'bg-lime-400' },
                { name: 'Ing. Jessica', value: 2, color: 'bg-rose-500' }
              ].map((member) => (
                <div key={member.name} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${member.color}`} />
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">{member.name}</span>
                  </div>
                  <span className="text-xs font-black text-[#4fc3ff]">{member.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5 pt-12">
           <div className="max-w-2xl">
              <h4 className="text-xl md:text-2xl font-black text-white/80 uppercase tracking-tighter italic">
                Certeza técnica institucional que impulsa la continuidad de activos energéticos.
              </h4>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-4 italic">Datos Actualizados · 2025</p>
           </div>
           <div className="flex items-center gap-4 px-8 py-4 rounded-xl bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-black text-[#4fc3ff] uppercase tracking-[0.4em]">Capacidad Ejecutiva Certificada</span>
           </div>
        </div>
      </div>
    </section>
  );
}
