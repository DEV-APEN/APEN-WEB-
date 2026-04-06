"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ShieldCheck, Globe, Zap, Clock, Target, ChevronRight } from 'lucide-react';

const faqs = [
  {
    id: '01',
    question: "¿Sus procesos están acreditados ante CFE y ASEA?",
    answer: "Sí, todos nuestros protocolos de ingeniería y gestión están alineados con las especificaciones técnicas vigentes de CFE y las normativas de seguridad industrial de ASEA, garantizando cumplimiento total y cero sanciones.",
    icon: ShieldCheck
  },
  {
    id: '02',
    question: "¿Cuál es la principal diferencia entre APEN y un contratista tradicional?",
    answer: "A diferencia de un contratista que solo ejecuta por fases, APEN actúa como socio estratégico integrando ingeniería, gestión y ejecución bajo un solo sistema de trazabilidad técnica y control total del riesgo operativo.",
    icon: Target
  },
  {
    id: '03',
    question: "¿Tienen capacidad para operar proyectos a nivel nacional?",
    answer: "Contamos con una red logística y técnica que nos permite movilizar especialistas a cualquier punto del territorio nacional, así como atender proyectos con estándares internacionales de interconexión eléctrica.",
    icon: Globe
  },
  {
    id: '04',
    question: "¿Cómo aseguran que los proyectos se entreguen a tiempo y sin sobrecostos?",
    answer: "Utilizamos una metodología de gestión basada en trazabilidad técnica en tiempo real. Esto nos permite detectar desviaciones antes de que se conviertan en retrasos financieros u operativos.",
    icon: Clock
  },
  {
    id: '05',
    question: "¿En qué sectores energéticos tienen mayor experiencia?",
    answer: "Nuestra especialización radica en infraestructura de media y alta tensión, modernización de subestaciones, y consultoría normativa para el sector eléctrico e hidrocarburos.",
    icon: Zap
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#008CDE]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 h-[2px] bg-[#008CDE]" />
            <span className="text-[#008CDE] font-black text-[10px] tracking-[0.5em] uppercase">Centro de Respuestas</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-black text-[#0B2341] tracking-tighter uppercase leading-none mb-6">
            CONSULTAS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008CDE] to-blue-900">FRECUENTES</span>
          </h2>
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest max-w-lg mx-auto">
            Resolviendo las dudas críticas sobre nuestra operación técnica y valor estratégico.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`border border-slate-100 rounded-3xl overflow-hidden shadow-sm transition-all duration-300 ${activeIndex === index ? 'shadow-xl shadow-blue-900/5 bg-slate-50/30' : 'bg-white hover:border-blue-500/20'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${activeIndex === index ? 'bg-[#008CDE] text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-[#008CDE]/10 group-hover:text-[#008CDE]'}`}>
                    <faq.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-[#008CDE]/50 block mb-1 uppercase tracking-widest leading-none">REF_{faq.id}</span>
                    <h3 className={`text-sm md:text-base font-black uppercase tracking-tight transition-colors ${activeIndex === index ? 'text-[#0B2341]' : 'text-slate-700'}`}>
                      {faq.question}
                    </h3>
                  </div>
                </div>
                <div className={`shrink-0 transition-transform duration-500 ${activeIndex === index ? 'rotate-180 text-[#008CDE]' : 'text-slate-300'}`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                  >
                    <div className="px-6 md:px-8 pb-8 md:pl-[6.5rem]">
                      <div className="w-full h-[1px] bg-blue-500/10 mb-6" />
                      <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-2xl italic">
                         "{faq.answer}"
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA for more questions */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center p-8 border border-dashed border-slate-200 rounded-3xl"
        >
           <HelpCircle className="mx-auto text-[#008CDE]/30 mb-4" size={32} />
           <p className="text-[12px] font-black text-slate-400 uppercase tracking-widest mb-4 italic">
             ¿Tiene alguna duda técnica específica no mencionada aquí?
           </p>
           <a 
             href="#contacto"
             className="text-[#008CDE] text-[10px] font-black uppercase tracking-[0.3em] hover:tracking-[0.4em] transition-all"
           >
             Contactar al Departamento Técnico <ChevronRight className="inline-block" size={14} />
           </a>
        </motion.div>

      </div>
    </section>
  );
}
