"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const flowItems = [
  { 
    id: '01', 
    title: 'ISO 9001:2015', 
    label: 'Calidad', 
    reg: 'CIE-SGC-044/2026',
    logo: 'https://1000marcas.net/wp-content/uploads/2020/11/ISO-Logo.png'
  },
  { 
    id: '02', 
    title: 'ISO 14001:2015', 
    label: 'Ambiental', 
    reg: 'CIE-SGA-022/2026',
    logo: 'https://1000marcas.net/wp-content/uploads/2020/11/ISO-Logo.png'
  },
  { 
    id: '03', 
    title: 'ISO 45001:2018', 
    label: 'Seguridad', 
    reg: 'CIE-SGSST-020/2026',
    logo: 'https://1000marcas.net/wp-content/uploads/2020/11/ISO-Logo.png'
  },
  { 
    id: '04', 
    title: 'Achilles PEMEX', 
    label: 'Registro Nacional', 
    reg: 'ID: 00249023 / 2026',
    logo: 'https://toroca.com.mx/wp-content/uploads/2025/12/Logo-Certificado-Achilles.webp'
  },
  { 
    id: '05', 
    title: 'Padrón de Proveedores CFE', 
    label: 'Registro Oficial', 
    reg: 'No: 4493015 / 2026',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Logo_neutral_de_la_Comisi%C3%B3n_Federal_de_Electricidad.svg'
  }
];

export default function Certifications() {
  return (
    <section className="py-24 md:py-32 bg-[#FBFDFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER: ELITE MINIMALISM */}
        <div className="mb-40 text-center max-w-xl mx-auto">
           <motion.div 
             initial={{ opacity: 0, y: -5 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="flex items-center justify-center gap-3 mb-2"
           >
              <div className="w-8 h-[1px] bg-[#008CDE]"></div>
              <span className="text-[9px] font-black text-[#008CDE] uppercase tracking-[0.5em]">Certificación Institucional</span>
           </motion.div>
           <h2 className="text-3xl md:text-5xl font-black text-[#0B2341] tracking-tighter uppercase leading-none">
             Ruta de <span className="text-[#008CDE]">Certeza</span>
           </h2>
        </div>

        {/* FLOW ARCHITECTURE - Responsive Adaptation */}
        <div className="relative md:py-20 flex min-h-auto md:min-h-[500px] items-center">
           
           {/* THE ELECTRIC CORE LINE - Only Desktop */}
           <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 hidden lg:block overflow-visible">
              <motion.div 
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#008CDE]/10 blur-[2px]"
              />
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#008CDE] to-transparent shadow-[0_0_15px_rgba(0,140,222,0.8)]"
              />
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-0 relative w-full items-center">
              {flowItems.map((item, idx) => (
                <div key={item.id} className="relative flex flex-col items-center justify-center lg:h-px group">
                   
                   {/* NODE ANCHOR - Only Desktop */}
                   <div className="absolute w-4 h-4 rounded-full border-2 border-[#008CDE]/20 bg-white z-30 hidden lg:flex items-center justify-center shadow-lg transition-transform group-hover:scale-125 duration-500">
                      <div className="w-1.5 h-1.5 bg-[#008CDE] rounded-full"></div>
                   </div>

                   {/* VERTICAL STEM - Only Desktop */}
                   <div className={`absolute w-[2px] bg-[#008CDE]/20 hidden lg:block ${idx % 2 === 0 ? 'bottom-0 h-[100px]' : 'top-0 h-[100px]'}`}></div>

                   {/* THE CARD */}
                   <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.6, ease: "easeOut" }}
                     className={`w-full lg:absolute lg:w-[180px] min-h-[160px] bg-white border-[1.5px] border-[#008CDE] rounded-[2.5rem] p-6 flex flex-col items-center justify-between text-center shadow-[0_12px_45px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_45px_100px_-30px_rgba(0,140,222,0.2)] transition-all duration-500 z-10 ${
                       idx % 2 === 0 
                       ? 'lg:-top-[280px]' 
                       : 'lg:top-[110px]' 
                     }`}
                   >
                      {/* Logo Engine */}
                      <div className="flex-grow flex flex-col items-center justify-center space-y-4 w-full">
                         <div className="h-12 w-full flex items-center justify-center transition-transform hover:scale-110 duration-500">
                             <img 
                               src={item.logo} 
                               alt={item.title} 
                               className={`${item.title.includes('Achilles') ? 'w-24' : 'w-16'} h-auto object-contain max-h-full`} 
                             />
                         </div>
                         <div className="space-y-1">
                            <span className="text-[7px] font-black text-[#008CDE] uppercase tracking-[0.4em] block">{item.label}</span>
                            <h3 className="text-[12px] font-black text-[#0B2341] tracking-tight uppercase leading-tight">
                               {item.title}
                            </h3>
                         </div>
                      </div>

                      {/* Register Footer */}
                      <div className="w-full pt-4 mt-2 border-t border-gray-50 flex items-center justify-center">
                         <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">{item.reg}</p>
                      </div>

                      {/* Floating Validation Mark */}
                      <div className="absolute top-4 right-4 text-emerald-500 opacity-80">
                         <CheckCircle size={10} strokeWidth={3} />
                      </div>
                   </motion.div>
                </div>
              ))}
           </div>
        </div>

        {/* ALCANCE MARKER - Precision Footer */}
        <div className="mt-24 md:mt-40 text-center">
           <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-6 py-4 md:py-2 px-8 md:px-10 bg-white border-[1.5px] border-[#008CDE] rounded-3xl md:rounded-full shadow-sm hover:scale-[1.02] transition-transform duration-500">
              <span className="text-[8px] font-black text-[#008CDE] uppercase tracking-[0.6em] md:border-r md:border-[#008CDE]/30 md:pr-6">Alcance Registrado</span>
              <p className="text-gray-400 text-[9px] md:text-[10px] font-extrabold uppercase tracking-widest italic leading-relaxed text-center">
                 Hidrocarburos • Civil • Eléctrica • Electromecánica
              </p>
           </div>
        </div>

      </div>
    </section>
  );
}
