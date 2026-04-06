"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Settings, 
  Zap, 
  AlertCircle,
  Activity,
  Maximize,
  ChevronRight,
  Database
} from 'lucide-react';

const technicalModules = [
  { id: '01', title: 'Socio Estratégico', detail: 'Integración en cadena de valor', icon: Maximize },
  { id: '02', title: 'Cumplimiento Normativo', detail: 'Sincronización ASEA/CFE', icon: ShieldCheck },
  { id: '03', title: 'Control de Riesgo', detail: 'Mitigación HSEQ 360°', icon: Activity },
  { id: '04', title: 'Ingeniería Integral', detail: 'Diseño basado en ejecución', icon: Database },
  { id: '05', title: 'Precisión Técnica', detail: 'Tolerancia cero desviaciones', icon: Settings },
  { id: '06', title: 'Trazabilidad', detail: 'Auditoría interna continua', icon: Zap },
];

export default function Differentiator() {
  const [view, setView] = useState<'apen' | 'tradicional'>('apen');
  const [mounted, setMounted] = React.useState(false);
  const [radius, setRadius] = React.useState(250);

  React.useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 100 : 250);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen bg-[#0B2341] py-16 md:py-24 flex flex-col justify-center overflow-x-clip">
      
      {/* ... (background remains the same) ... */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        <motion.div 
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-[#005BB5]/10 to-transparent skew-x-12"
        />

        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-[#005BB5]/5 [mask-image:linear-gradient(to_top,black,transparent)] rotate-x-60 origin-bottom transform-gpu">
           <div className="w-full h-full border-t border-[#005BB5]/20 bg-[linear-gradient(to_right,#005BB5/10_1px,transparent_1px),linear-gradient(to_bottom,#005BB5/10_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          
          {/* LADO IZQUIERDO: HUD TEXTUAL */}
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="space-y-8 md:space-y-12"
          >
            <div>
              <div className="flex items-center gap-4 mb-4 md:mb-8">
                <div className="w-2 h-2 bg-[#005BB5] shadow-[0_0_10px_#005BB5]"></div>
                <span className="text-[#005BB5] font-black text-[10px] md:text-[12px] tracking-[0.5em] uppercase border-l border-white/10 pl-4">Operating Interface 01_Diff</span>
              </div>
              
              <h2 className="text-3xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-6 md:mb-8">
                Un paso <br />
                <span className="text-[#005BB5]">más allá</span> del <br />
                contratista.
              </h2>

              <p className="text-blue-100/80 text-base md:text-xl font-bold max-w-lg mb-6 md:mb-8 leading-relaxed">
                APEN es un sistema integrado de ingeniería y gestión diseñado para reducir el riesgo en entornos críticos.
              </p>

              <div className="flex flex-wrap gap-4 pt-6 md:pt-8 border-t border-white/5">
                {['Socio Estratégico', 'Integración 360°', 'Trazabilidad Técnica'].map((tag) => (
                   <span key={tag} className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#005BB5]/70 flex items-center gap-2">
                     <ChevronRight size={14} /> {tag}
                   </span>
                ))}
              </div>
            </div>

            {/* CINEMATIC SELECTOR */}
            <div className="flex items-center gap-4">
               <button 
                 onClick={() => setView('tradicional')}
                 className={`group relative overflow-hidden px-6 md:px-10 py-3 md:py-4 rounded-sm transition-all duration-500 border ${view === 'tradicional' ? 'bg-red-600 border-red-600 text-white shadow-[0_0_30px_rgba(220,38,38,0.4)]' : 'bg-transparent border-white/10 text-white/40 hover:text-white'}`}
               >
                 <span className="relative z-10 text-[8px] md:text-[10px] font-black uppercase tracking-widest">Modelo Tradicional</span>
               </button>

               <button 
                 onClick={() => setView('apen')}
                 className={`group relative overflow-hidden px-6 md:px-10 py-3 md:py-4 rounded-sm transition-all duration-500 border ${view === 'apen' ? 'bg-[#005BB5] border-[#005BB5] text-white shadow-[0_0_30px_rgba(0,91,181,0.4)]' : 'bg-transparent border-white/10 text-white/40 hover:text-white'}`}
               >
                 <span className="relative z-10 text-[8px] md:text-[10px] font-black uppercase tracking-widest">Modelo APEN</span>
               </button>
            </div>
          </motion.div>

          {/* LADO DERECHO: THE SYSTEM CORE (Kinetic Visual) */}
          <div className="relative h-[400px] md:h-[600px] flex items-center justify-center [perspective:1000px]">
            
            {/* CENTRAL REACTOR CORE */}
            <motion.div 
               animate={{ 
                 rotate: 0, 
                 scale: view === 'apen' ? [0.8, 0.82, 0.8] : 0.7, 
                 opacity: view === 'apen' ? 1 : 0.3 
               }}
               className="md:scale-125 relative w-56 h-56 md:w-80 md:h-80 rounded-full border border-[#005BB5]/30 flex items-center justify-center group"
            >
               <div className="absolute inset-0 border-2 border-dashed border-[#005BB5]/10 rounded-full"></div>
               {/* Inner Nucleus */}
               <div className="relative z-20 w-28 h-28 md:w-44 md:h-44 bg-[#061528] rounded-full border border-white/10 shadow-[0_0_100px_rgba(0,91,181,0.3)] flex flex-col items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[#005BB5]/20 blur-2xl rounded-full scale-50"></div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={view}
                      className="text-center"
                    >
                       {view === 'apen' ? (
                          <div className="space-y-1">
                             <div className="text-[8px] md:text-[10px] font-black text-[#005BB5] tracking-[0.6em] uppercase">Status</div>
                             <div className="text-xl md:text-3xl font-black text-white tracking-widest italic">ACTIVE</div>
                          </div>
                       ) : (
                          <div className="space-y-1">
                             <div className="text-[8px] md:text-[10px] font-black text-red-500 tracking-[0.6em] uppercase">Status</div>
                             <div className="text-xl md:text-3xl font-black text-red-500/50 tracking-widest italic">ERROR</div>
                          </div>
                       )}
                    </motion.div>
                  </AnimatePresence>
               </div>
            </motion.div>

            {/* SATELLITE MODULES */}
            <div className="absolute inset-0 pointer-events-none">
               {technicalModules.map((mod, idx) => {
                  const angle = (idx / technicalModules.length) * Math.PI * 2;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={mod.id}
                      animate={view === 'apen' ? {
                        opacity: 1,
                        x: x,
                        y: y,
                        scale: 1,
                        z: 0,
                        rotateX: 0
                      } : {
                        opacity: 0.4,
                        x: x * 1.4,
                        y: y * 0.5,
                        scale: 0.7,
                        z: -200,
                        rotateX: 45
                      }}
                      transition={{ delay: idx * 0.05, type: 'spring', stiffness: 70 }}
                      className="absolute left-1/2 top-1/2 -ml-20 -mt-10 w-40 h-20"
                    >
                       {/* Connection Laser (Only APEN) */}
                       <motion.div 
                         animate={view === 'apen' ? { width: radius - 60, opacity: 0.4 } : { width: 0, opacity: 0 }}
                         className="absolute right-full top-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#005BB5] to-[#005BB5] origin-right"
                       />
                       
                       {/* Technical Module HUD */}
                       <div className={`p-4 border rounded shadow-2xl backdrop-blur-md flex flex-col justify-between h-full group ${view === 'apen' ? 'bg-[#061528]/80 border-blue-500/20' : 'bg-red-950/20 border-red-500/20'}`}>
                          <div className="flex justify-between items-start">
                             <span className={`text-[8px] font-mono ${view === 'apen' ? 'text-blue-400' : 'text-red-500'}`}>MOD_{mod.id}</span>
                             <mod.icon size={14} className={view === 'apen' ? 'text-blue-500' : 'text-red-500/40'} />
                          </div>
                          <div>
                             <h4 className={`text-[10px] font-black uppercase tracking-tighter ${view === 'apen' ? 'text-white' : 'text-slate-500'}`}>{mod.title}</h4>
                             <p className={`text-[8px] font-bold uppercase tracking-widest ${view === 'apen' ? 'text-blue-300/40' : 'text-red-500/20'}`}>
                                {view === 'apen' ? mod.detail : 'Signal Lost'}
                             </p>
                          </div>
                          {/* Alert Badge for Tradicional */}
                          {view === 'tradicional' && (
                             <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center animate-pulse">
                                <AlertCircle size={10} className="text-white" />
                             </div>
                          )}
                       </div>
                    </motion.div>
                  );
               })}
            </div>

            {/* WARNING OVERLAY FOR TRADICIONAL */}
            <AnimatePresence>
              {view === 'tradicional' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-red-600/5 [mask-image:radial-gradient(circle_at_center,transparent_0%,black_100%)] pointer-events-none"
                >
                   <div className="absolute top-10 w-full text-center">
                      <p className="text-red-500 font-mono text-[9px] tracking-[1em] animate-pulse">CRITICAL_SYSTEM_FRAGMENTATION_DETECTOR</p>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

        {/* CIERRE DE SECCIÓN (HUD FOOTER) */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-16">
           <div className="flex flex-col gap-6">
              <p className="text-[#F8FAFC]/50 text-base md:text-2xl font-black leading-tight uppercase tracking-tighter max-w-xl">
                 El resultado: proyectos ejecutados con <span className="text-white">precisión quirúrgica</span> y <span className="text-white">control absoluto</span> de la trazabilidad técnica.
              </p>
              <div className="flex gap-10">
                 <div>
                    <p className="text-[9px] font-black text-white/30 uppercase mb-2">Auth Code</p>
                    <p className="text-[14px] font-black text-[#005BB5] tracking-widest">APEN_X001</p>
                 </div>
                 <div>
                    <p className="text-[9px] font-black text-white/30 uppercase mb-2">Protocol</p>
                    <p className="text-[14px] font-black text-[#005BB5] tracking-widest italic">MAX_INTEGRITY</p>
                 </div>
              </div>
           </div>

           <div className="w-full md:w-auto p-8 border border-white/5 bg-[#061528]/30 backdrop-blur-md rounded-sm text-center md:text-right group">
              <span className="text-[10px] font-black text-white/30 uppercase mb-4 block tracking-widest">Certificación Operativa</span>
              <p className="text-3xl font-black text-white leading-none mb-2 italic">100%</p>
              <p className="text-[11px] font-black text-[#005BB5] uppercase tracking-widest">Certeza Técnica APEN</p>
           </div>
        </div>

      </div>
    </section>
  );
}
