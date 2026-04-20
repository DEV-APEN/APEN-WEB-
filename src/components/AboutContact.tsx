"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Zap, Phone, Mail, Clock, Send, Globe, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function AboutContact() {
  return (
    <section id="nosotros" className="bg-[#0B2341] text-white py-16 md:py-20 relative overflow-hidden border-t border-white/5">
      
      {/* Background HUD Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#008CDE_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: THE TECHNICAL LEGACY */}
          <div className="space-y-10">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-[2px] bg-blue-500"></div>
                <span className="text-blue-400 font-black text-[10px] tracking-[0.4em] uppercase">Eminencia Institucional</span>
              </motion.div>
              
              <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">
                Firmas de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white italic pr-4">Autoridad</span>
              </h2>
              
              <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed max-w-xl">
                 Administradora de Proyectos Energéticos se erige como una organización 100% mexicana, estructurada bajo estándares internacionales.
              </p>
            </div>

            {/* TRUST METRICS HUD */}
            <div className="grid grid-cols-2 gap-6 border-y border-white/10 py-8">
               <div className="space-y-1">
                  <div className="text-4xl font-black text-white tracking-tighter flex items-center gap-2">
                     10<span className="text-blue-500 text-2xl">+</span>
                  </div>
                  <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Años de Trayectoria</p>
               </div>
               <div className="space-y-1">
                  <div className="text-4xl font-black text-white tracking-tighter flex items-center gap-2">
                     100<span className="text-blue-500 text-2xl">%</span>
                  </div>
                  <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Rigor Normativo</p>
               </div>
            </div>

            {/* CERTIFICATION NODES */}
            <div className="space-y-4">
               <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] mb-2">Acreditaciones y Respaldos:</p>
               <div className="flex flex-wrap gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                  <div className="flex items-center gap-2.5 group">
                     <ShieldCheck className="text-blue-500 group-hover:scale-110 transition-transform" size={20} />
                     <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase text-white">Certificación ISO</span>
                        <span className="text-[8px] text-gray-500 font-bold leading-none">9001/14001/45001</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-2.5 group">
                     <Award className="text-blue-500 group-hover:scale-110 transition-transform" size={20} />
                     <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase text-white">Achilles ID</span>
                        <span className="text-[8px] text-gray-500 font-bold leading-none">ID: 00249023</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-2.5 group">
                     <Zap className="text-blue-500 group-hover:scale-110 transition-transform" size={20} />
                     <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase text-white">Padrón CFE</span>
                        <span className="text-[8px] text-gray-500 font-bold leading-none">No. 4493015</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* RIGHT: THE CONVERSION CARD */}
          <motion.div
            id="contacto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            {/* Status Decoration */}
            <div className="absolute top-8 right-8 flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10B981]"></div>
               <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Atención Activa</span>
            </div>

            <div className="relative z-10 space-y-8">
               <div className="space-y-3">
                  <h3 className="text-2xl font-black text-[#0B2341] tracking-tighter uppercase leading-none">
                     Inicie una Evaluación <br /> de Proyecto
                  </h3>
                  <p className="text-gray-500 text-[13px] font-medium border-l-2 border-blue-500 pl-4 leading-relaxed">
                    Identificamos la viabilidad y requerimientos de sus proyectos industriales en 24h.
                  </p>
               </div>

               <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-[#0B2341] uppercase tracking-widest">Nombre y Empresa</label>
                    <input type="text" className="w-full bg-slate-50 border border-gray-100 rounded-xl px-5 py-3 text-[11px] font-bold text-[#0B2341] outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-inner" placeholder="P. Ej: Ing. Ricardo Sánchez" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-[#0B2341] uppercase tracking-widest">Enlace Corporativo</label>
                    <input type="email" className="w-full bg-slate-50 border border-gray-100 rounded-xl px-5 py-3 text-[11px] font-bold text-[#0B2341] outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-inner" placeholder="ejemplo@organizacion.com" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-[#0B2341] uppercase tracking-widest">Área Técnica</label>
                    <div className="relative">
                      <select className="w-full bg-slate-50 border border-gray-100 rounded-xl px-5 py-3 text-[10px] font-black text-[#0B2341] outline-none focus:ring-2 focus:ring-blue-500 appearance-none shadow-sm uppercase tracking-tight">
                        <option>Seleccione protocolo...</option>
                        <option>Regulación CRE / CNE</option>
                        <option>Normatividad ASEA</option>
                        <option>Ingeniería CFE</option>
                        <option>Defensa Legal</option>
                      </select>
                      <div className="absolute top-1/2 right-5 -translate-y-1/2 pointer-events-none text-[#0B2341] opacity-30">
                        <Clock size={14} />
                      </div>
                    </div>
                  </div>

                  <button type="button" className="w-full bg-[#0B2341] hover:bg-blue-600 text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all shadow-lg active:scale-[0.98] group mt-4">
                    <span>Solicitar Contacto</span>
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
               </form>

               <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                       <CheckCircle2 size={12} className="text-blue-500" />
                       <span className="text-[7.5px] font-black text-gray-400 uppercase tracking-widest">Confidencialidad_v1.0</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                       <Globe size={12} className="text-blue-500" />
                       <span className="text-[7.5px] font-black text-gray-400 uppercase tracking-widest">Global</span>
                    </div>
                  </div>
                  <div className="text-[8px] font-black text-[#0B2341] uppercase tracking-tighter">Soporte 24/7</div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
