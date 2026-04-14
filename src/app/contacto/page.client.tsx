"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import MobileMenu from '@/components/MobileMenu';
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, Send } from 'lucide-react';

export default function ContactoPage() {
  const [showNav, setShowNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNav(true), 250);
    const handleScroll = () => {
      if (window.scrollY > 50) setShowNav(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 relative overflow-x-hidden w-full">
      <Header visible={showNav} onOpenMenu={() => setIsMenuOpen(true)} />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#061528] px-6 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="absolute inset-0">
          <img 
            src="/visual/imagenes/contact.jpg" 
            alt="Contacto APEN" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,140,222,0.1),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-sm border border-[#008CDE]/30 bg-[#008CDE]/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.4em] text-[#008CDE]">
              <ShieldCheck size={12} />
              Enlace Institucional
            </span>
            <h1 className="mt-8 max-w-[15ch] text-4xl font-black uppercase leading-[0.95] tracking-tighter text-white md:text-6xl lg:text-7xl">
              Contacto <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008CDE] to-cyan-300">
                Técnico
              </span>
            </h1>
            <p className="mt-8 max-w-xl border-l-2 border-[#008CDE] pl-5 text-sm font-bold leading-relaxed text-slate-300 md:text-base uppercase tracking-tight">
              Nuestro equipo está disponible para atender consultas técnicas, institucionales y comerciales relacionadas con proyectos energéticos.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Lado Izquierdo: Información y Mapa */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-[#0B2341] uppercase tracking-tighter mb-4">Información de Enlace</h2>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-tight">
                  Oficinas centrales e información de contacto corporativo.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Info block 1 */}
                <div className="space-y-4">
                   <div className="w-10 h-10 rounded-lg bg-[#008CDE]/10 flex items-center justify-center text-[#008CDE]">
                     <MapPin size={20} />
                   </div>
                   <div>
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Ubicación Central</p>
                     <p className="text-sm font-bold text-[#0B2341] leading-relaxed">
                       Av. Miguel Ángel de Quevedo 961,<br />
                       El Rosedal, Coyoacán, <br />
                       04330 Ciudad de México, CDMX
                     </p>
                   </div>
                </div>

                {/* Info block 2 */}
                <div className="space-y-4">
                   <div className="w-10 h-10 rounded-lg bg-[#008CDE]/10 flex items-center justify-center text-[#008CDE]">
                     <Clock size={20} />
                   </div>
                   <div>
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Horario de Operación</p>
                     <p className="text-sm font-bold text-[#0B2341] leading-relaxed">
                       Lunes a Viernes<br />
                       9:00 a 18:00 hrs
                     </p>
                   </div>
                </div>

                {/* Info block 3 */}
                <div className="space-y-4">
                   <div className="w-10 h-10 rounded-lg bg-[#008CDE]/10 flex items-center justify-center text-[#008CDE]">
                     <Phone size={20} />
                   </div>
                   <div>
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Contacto Telefónico</p>
                     <p className="text-sm font-bold text-[#0B2341] leading-relaxed">
                       +52 (55) 0000 0000
                     </p>
                   </div>
                </div>

                {/* Info block 4 */}
                <div className="space-y-4">
                   <div className="w-10 h-10 rounded-lg bg-[#008CDE]/10 flex items-center justify-center text-[#008CDE]">
                     <Mail size={20} />
                   </div>
                   <div>
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Dirección Electrónica</p>
                     <p className="text-sm font-bold text-[#0B2341] leading-relaxed">
                       contacto@apen.mx
                     </p>
                   </div>
                </div>
              </div>

              {/* Mapa embebido */}
              <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 shadow-sm h-80 bg-slate-200 relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.9967675669145!2d-99.1481541!3d19.3456363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce006a86fbeb63%3A0xe96cbaf388835d0b!2sAv.%20Miguel%20%C3%81ngel%20de%20Quevedo%20961%2C%20El%20Rosedal%2C%20Coyoac%C3%81n%2C%2004330%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border-2 border-[#008CDE]/0 group-hover:border-[#008CDE]/20 transition-all duration-500 rounded-2xl" />
              </div>
            </div>

            {/* Lado Derecho: Formulario */}
            <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100">
              <h2 className="text-2xl font-black text-[#0B2341] uppercase tracking-tighter mb-8">
                Formulario de Atención
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#0B2341]">Nombre Completo *</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#008CDE]/30 focus:border-[#008CDE] transition-colors" placeholder="Su nombre" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#0B2341]">Empresa u Organización *</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#008CDE]/30 focus:border-[#008CDE] transition-colors" placeholder="Su empresa" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#0B2341]">Correo Institucional *</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#008CDE]/30 focus:border-[#008CDE] transition-colors" placeholder="correo@empresa.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#0B2341]">Teléfono *</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#008CDE]/30 focus:border-[#008CDE] transition-colors" placeholder="+52" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#0B2341]">Tipo de Consulta *</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#008CDE]/30 focus:border-[#008CDE] transition-colors appearance-none p-1">
                    <option value="" disabled selected>Seleccione área de interés</option>
                    <option value="ingenieria">Ingeniería y Construcción</option>
                    <option value="legal">Materia Regulatoria / Legal</option>
                    <option value="mantenimiento">Mantenimiento y Auditorías</option>
                    <option value="ventas">Contacto Comercial</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#0B2341]">Detalle del Requerimiento *</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#008CDE]/30 focus:border-[#008CDE] transition-colors resize-none" placeholder="Describa su proyecto o solicitud..."></textarea>
                </div>

                <div className="pt-4">
                  <button type="button" className="w-full bg-[#0B2341] text-white py-4 rounded-xl flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.3em] hover:bg-[#008CDE] transition-colors duration-300 shadow-lg group">
                    Enviar Solicitud
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>

              </form>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot visible={showNav} />

      {/* MENÚ MÓVIL */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
