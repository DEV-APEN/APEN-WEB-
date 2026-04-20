"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutWho() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-60" />
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#008CDE] mb-4">Identidad Institucional</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0B2341] leading-[0.9] mb-8">
              ¿Quién es <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008CDE] to-[#0B2341]">APEN?</span>
            </h3>
            <p className="text-base text-slate-500 font-medium leading-relaxed mb-6">
              APEN (Administradora de Proyectos Energéticos) es una plataforma técnica mexicana de alto desempeño especializada en la integración de ingeniería estratégica y regulación federal para el sector de Hidrocarburos y Electricidad.
            </p>
            <p className="text-base text-slate-500 font-medium leading-relaxed">
              Nuestra estructura operativa está diseñada para proporcionar certeza técnica y jurídica absoluta, actuando como el brazo derecho operativo para empresas que requieren normalización, defensa y ejecución de infraestructura bajo los más estrictos estándares de CFE, ASEA y PEMEX.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <div className="relative group p-12 bg-[#F8FAFC] rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src="/visual/imagenes/Logo de APEN con texto fondo transparente.png"
                alt="APEN Logo"
                loading="lazy"
                decoding="async"
                className="relative z-10 w-full max-w-[400px] h-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
