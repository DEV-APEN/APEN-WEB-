"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Construction, 
  Zap, 
  Droplets, 
  Leaf, 
  Cpu,
  ChevronRight,
  ShieldCheck,
  Target
} from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Regulación y Normatividad',
    subtitle: 'Cumplimiento ASEA / CRE / SENER',
    description: 'Gestión de permisos y asesoría legal especializada para evitar sanciones operativas en toda la cadena de valor.',
    icon: FileText,
    color: 'from-blue-600 to-[#008CDE]'
  },
  {
    id: '02',
    title: 'Ingeniería y Obras',
    subtitle: 'Diseño y Supervisión QA/QC',
    description: 'Diseño conceptual, básico y de detalle. Gerencia de proyectos de infraestructura energética con rigor técnico.',
    icon: Construction,
    color: 'from-[#0B2341] to-blue-900'
  },
  {
    id: '03',
    title: 'Energía Eléctrica y Renovables',
    subtitle: 'Interconexión al SEN',
    description: 'Estudios eléctricos y soluciones de eficiencia energética para el sector industrial y proyectos de generación.',
    icon: Zap,
    color: 'from-blue-400 to-[#008CDE]'
  },
  {
    id: '04',
    title: 'Upstream y Downstream',
    subtitle: 'Hidrocarburos y Petrolíferos',
    description: 'Consultoría en exploración, extracción, almacenamiento y comercialización de recursos energéticos.',
    icon: Droplets,
    color: 'from-blue-800 to-[#0B2341]'
  },
  {
    id: '05',
    title: 'Sostenibilidad',
    subtitle: 'Impacto Ambiental y Social',
    description: 'Evaluaciones EIA/EVIS, planes de remediación y estrategias de descarbonización corporativa certificada.',
    icon: Leaf,
    color: 'from-green-600 to-blue-600'
  },
  {
    id: '06',
    title: 'Innovación Tecnológica',
    subtitle: 'Digitalización Operativa',
    description: 'Implementación de tecnologías de monitoreo y optimización de recursos mediante digitalización avanzada.',
    icon: Cpu,
    color: 'from-blue-900 to-[#008CDE]'
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="servicios" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* BACKGROUND GRADIENT TRANSITION */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-slate-50/50 to-white" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-slate-50/30 to-white" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header Block */}
        <div className="mb-12 border-b border-gray-100 pb-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-8 h-[2px] bg-[#008CDE]" />
              <span className="text-[#008CDE] font-bold tracking-[0.3em] uppercase text-[9px]">Especialización 360°</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-[#0B2341] tracking-tighter uppercase leading-[0.85] mb-4"
            >
              Soluciones <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008CDE] via-[#0B2341] to-[#0B2341]">Especializadas</span>
            </motion.h2>

            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="text-gray-400 text-sm md:text-base font-medium max-w-lg leading-relaxed mt-4"
            >
              Un portafolio diseñado para cubrir el ciclo de vida completo de los proyectos del sector energético e hidrocarburos.
            </motion.p>
          </div>
        </div>

        {/* Dynamic Service Interactor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.05)] bg-white">
          {/* Navigation Column */}
          <div className="lg:col-span-5 border-r border-gray-100 bg-[#F8FAFC]">
            {services.map((service, idx) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(idx)}
                onMouseEnter={() => setActiveTab(idx)}
                className={`w-full flex items-center justify-between p-6 text-left transition-all duration-300 group relative border-b border-gray-50 last:border-0 ${activeTab === idx ? 'bg-white' : 'hover:bg-gray-50/50'}`}
              >
                {activeTab === idx && (
                  <motion.div 
                    layoutId="activeGlow"
                    className="absolute left-0 top-0 w-1.5 h-full bg-[#008CDE]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                <div className="flex items-center gap-5">
                  <span className={`text-lg font-black transition-colors ${activeTab === idx ? 'text-[#008CDE]' : 'text-gray-300 group-hover:text-gray-400'}`}>
                    {service.id}
                  </span>
                  <div>
                    <h3 className={`text-md font-bold transition-colors ${activeTab === idx ? 'text-[#0B2341]' : 'text-gray-400 group-hover:text-gray-500'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-[9px] font-bold uppercase tracking-widest transition-colors ${activeTab === idx ? 'text-[#008CDE]' : 'text-gray-300'}`}>
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <div className={`transition-all duration-300 ${activeTab === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'}`}>
                  <ChevronRight size={16} className="text-[#008CDE]" />
                </div>
              </button>
            ))}
          </div>

          {/* Display Stage */}
          <div className="lg:col-span-7 bg-white relative overflow-hidden flex items-center justify-center min-h-[400px]">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, x: 30 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -30 }}
                 transition={{ duration: 0.4, ease: "circOut" }}
                 className="p-10 md:p-14 w-full relative z-10"
               >
                 <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
                   <div className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br ${services[activeTab].color} flex items-center justify-center text-white shadow-xl shadow-blue-900/10 shrink-0`}>
                      {React.createElement(services[activeTab].icon, { size: 40, strokeWidth: 1.2 })}
                   </div>
                   <div className="space-y-3">
                      <h4 className="text-2xl md:text-4xl font-black text-[#0B2341] tracking-tighter uppercase leading-none">
                         {services[activeTab].title}
                      </h4>
                      <div className="flex items-center gap-3 text-[#008CDE]">
                         <Target size={14} />
                         <span className="text-[10px] font-black uppercase tracking-[0.2em]">{services[activeTab].subtitle}</span>
                      </div>
                   </div>
                 </div>

                 <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed mb-10 border-l-4 border-gray-50 pl-6 italic">
                   "{services[activeTab].description}"
                 </p>

                 <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-50">
                    <div className="flex items-start gap-3">
                       <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#008CDE]">
                          <ShieldCheck size={16} />
                       </div>
                       <div>
                          <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1">Certificación</p>
                          <p className="text-[11px] font-bold text-[#0B2341]">Acreditada ante ASEA e ISO</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-3 text-left">
                       <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#0B2341]">
                          <Target size={16} />
                       </div>
                       <div>
                          <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1">Alcance</p>
                          <p className="text-[11px] font-bold text-[#0B2341]">Nacional // Internacional</p>
                       </div>
                    </div>
                 </div>
               </motion.div>
             </AnimatePresence>

             {/* BACKGROUND BRANDING DETAIL */}
             <div className="absolute bottom-[-2%] right-[-2%] text-[8rem] font-black text-gray-100/50 pointer-events-none select-none">
                {services[activeTab].id}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
