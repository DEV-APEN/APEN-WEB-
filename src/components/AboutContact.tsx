"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Send, CheckCircle } from 'lucide-react';
import { Turnstile } from '@marsidev/react-turnstile';

export default function AboutContact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/submit-protocol", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        setFormState('success');
      } else {
        console.error("Error en envío:", result);
        setFormState('error');
      }
    } catch (error) {
      console.error("Fallo de red:", error);
      setFormState('error');
    }
  };

  if (!mounted) return null;

  const certs = [
    {
      logo: "/visual/imagenes/isologo.svg",
      alt: "ISO",
      title: "Sistemas de Gestión",
      subtitle: "ISO 9001 / 14001 / 45001",
      tag: "Certificado",
    },
    {
      logo: "https://toroca.com.mx/wp-content/uploads/2025/12/Logo-Certificado-Achilles.webp",
      alt: "Achilles",
      title: "Padrón Achilles",
      subtitle: "ID: 00249023 // PEMEX",
      tag: "Registrado",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Logo_neutral_de_la_Comisi%C3%B3n_Federal_de_Electricidad.svg",
      alt: "CFE",
      title: "Padrón de Proveedores",
      subtitle: "CFE // Registro 4493015 Vigente",
      tag: "Vigente",
    },
  ];

  return (
    <section id="nosotros" className="bg-[#071828] text-white pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden border-t border-white/5">

      {/* Gradient orb top-right */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#008CDE]/10 blur-[120px] pointer-events-none" />
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[radial-gradient(#008CDE_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-[2px] bg-[#4fc3ff]" />
                <span className="text-[#4fc3ff] font-black text-[10px] tracking-[0.55em] uppercase">Respaldo Institucional</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black uppercase leading-[0.95] tracking-tighter text-white">
                Respaldo y<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white italic">Certificaciones</span>
              </h2>
              <p className="text-white/40 text-sm font-medium max-w-sm leading-relaxed">
                Registros activos ante las principales entidades reguladoras y organismos industriales de México.
              </p>
            </motion.div>

            {/* Cert cards */}
            <div className="flex flex-col gap-3">
              {certs.map((c, i) => (
                <motion.div
                  key={c.alt}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center gap-5 p-4 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.07] hover:border-[#008CDE]/30 transition-all duration-300 cursor-default"
                >
                  {/* Logo container */}
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-3 shrink-0 shadow-lg group-hover:shadow-[0_0_24px_rgba(0,140,222,0.25)] transition-shadow duration-300 overflow-hidden">
                    <img src={c.logo} alt={c.alt} className="h-full w-full object-contain" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-black uppercase tracking-widest text-white truncate">{c.title}</p>
                    <p className="text-[10px] text-[#4fc3ff] font-bold uppercase tracking-tight mt-0.5">{c.subtitle}</p>
                  </div>

                  {/* Tag */}
                  <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <div className="w-1 h-1 rounded-full bg-emerald-400" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400">{c.tag}</span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* RIGHT: THE CONVERSION CARD */}
          <motion.div
            id="contacto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow behind card */}
            <div className="absolute -inset-4 bg-[#008CDE]/10 rounded-[3rem] blur-2xl" />

            <div className="relative bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#008CDE] via-[#4fc3ff] to-[#008CDE]" />

              {/* Status */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10B981]" />
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Atención Activa</span>
                </div>
                <div className="text-[9px] font-black text-[#008CDE] uppercase tracking-widest">Soporte 24/7</div>
              </div>

            <div className="space-y-7">
               <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-black text-[#0B2341] tracking-tighter uppercase leading-[0.95]">
                     Inicie una Evaluación <br /> de Proyecto
                  </h3>
                  <p className="text-slate-400 text-[12px] font-medium border-l-2 border-[#008CDE] pl-3 leading-relaxed">
                    Identificamos la viabilidad y requerimientos de sus proyectos industriales en 24h.
                  </p>
               </div>

               <AnimatePresence mode="wait">
                 {formState === 'success' ? (
                   <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                   >
                     <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-500">
                       <CheckCircle size={40} />
                     </div>
                     <h4 className="text-xl font-black text-[#0B2341] uppercase tracking-tighter">Solicitud Enviada</h4>
                     <p className="text-sm text-gray-500 font-medium max-w-xs mx-auto">Su requerimiento ha sido registrado en nuestro sistema técnico. Un enlace se contactará en breve.</p>
                     <button onClick={() => setFormState('idle')} className="text-[10px] font-black uppercase tracking-widest text-blue-500 hover:text-blue-600 transition-colors">Enviar otra solicitud</button>
                   </motion.div>
                 ) : (
                    <form
                     className="space-y-5"
                     onSubmit={handleSubmit}
                    >
                      <input type="hidden" name="access_key" value="b6daf502-85e9-44e5-a260-cc506e17a443" />
                      <input type="hidden" name="subject" value="Nuevo Contacto desde APEN Web" />
                      
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-[#0B2341] uppercase tracking-[0.2em]">Nombre y Empresa</label>
                        <input name="name" required type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-[12px] font-bold text-[#0B2341] outline-none focus:ring-2 focus:ring-[#008CDE] focus:bg-white transition-all shadow-inner" placeholder="Ej. Ing. Ricardo Sánchez" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-[#0B2341] uppercase tracking-[0.2em]">Email Corporativo</label>
                        <input name="email" required type="email" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-[12px] font-bold text-[#0B2341] outline-none focus:ring-2 focus:ring-[#008CDE] focus:bg-white transition-all shadow-inner" placeholder="ejemplo@organizacion.com" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-[#0B2341] uppercase tracking-[0.2em]">Mensaje / Requerimiento</label>
                        <textarea name="message" required rows={4} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-[12px] font-bold text-[#0B2341] outline-none focus:ring-2 focus:ring-[#008CDE] focus:bg-white transition-all shadow-inner resize-none" placeholder="Describa brevemente su proyecto o trámite..." />
                      </div>

                      <div className="pt-2 flex justify-center">
                        <Turnstile siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!} />
                      </div>

                      <button 
                        type="submit" 
                        disabled={formState === 'submitting'}
                        className="w-full bg-[#0B2341] hover:bg-[#008CDE] disabled:bg-gray-400 text-white py-5 rounded-xl text-[10px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-3 transition-all shadow-xl active:scale-[0.98] group mt-6"
                      >
                        <span>{formState === 'submitting' ? 'Transmitiendo...' : 'Solicitar Diagnóstico'}</span>
                        <Send size={16} className={formState === 'submitting' ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'} />
                      </button>
                   </form>
                 )}
               </AnimatePresence>

               <div className="flex items-center gap-2 pt-6 border-t border-slate-100">
                  <ShieldCheck size={13} className="text-[#008CDE] shrink-0" />
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Información confidencial — uso exclusivo APEN</span>
               </div>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
