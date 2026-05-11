"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Zap, Droplet, Scale, ArrowRight, FileText, Mail, Phone, MapPin, X, MessageSquare, CircleDollarSign, LayoutGrid } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuLink {
  name: string;
  path: string;
  icon?: React.ElementType;
}

interface MenuCategory {
  title: string;
  id: string;
  links: MenuLink[];
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuCategories: MenuCategory[] = [
    {
      title: "Unidades Estratégicas",
      id: "01",
      links: [
        { name: 'Nuestros Servicios', path: '/servicios', icon: LayoutGrid },
        { name: 'Consultoría en Energía', path: '/servicios/energia', icon: Zap },
        { name: 'Gestión de Hidrocarburos', path: '/servicios/hidrocarburos', icon: Droplet },
        { name: 'Project Finance', path: '/servicios/project-finance', icon: CircleDollarSign },
        { name: 'Defensa Legal Técnica', path: '/servicios/legal', icon: Scale },
      ]
    },
    {
      title: "Corporativo",
      id: "02",
      links: [
        { name: 'Nuestra Firma', path: '/nosotros' },
        { name: 'Ejecución de Proyectos', path: '/capacidad-ejecutiva' },
        { name: 'Certificaciones ISO', path: '/certificaciones' },
      ]
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#040D1D] z-[10000] overflow-y-auto overflow-x-hidden"
        >
          {/* Futuristic Background Accents */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(0,140,222,0.08),transparent_70%)]" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,rgba(0,140,222,0.05),transparent_70%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
          </div>

          <div className="relative z-10 min-h-screen flex flex-col">
            
            {/* Header: Logo & Close */}
            <div className="flex justify-between items-center px-6 py-8 md:px-16 md:py-12">
              <div className="flex items-center gap-10">
                <Link href="/" onClick={onClose} className="relative block h-[40px] w-[120px] md:h-[60px] md:w-[240px]">
                  <Image 
                    src="https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png" 
                    alt="APEN Logo" 
                    fill
                    sizes="(max-width: 768px) 120px, 240px"
                    className="origin-left scale-[1.5] object-contain object-left md:scale-[1.8] brightness-0 invert"
                    priority
                  />
                </Link>
              </div>
              <button 
                onClick={onClose}
                className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full border border-white/10 transition-all active:scale-95"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Cerrar</span>
                <X size={20} className="text-[#008CDE] group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>

            {/* Main Grid Content */}
            <div className="flex-grow flex items-center">
              <div className="max-w-[1600px] mx-auto w-full px-6 md:px-16 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                  
                  {/* CATEGORIES COLUMN */}
                  <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                    {menuCategories.map((cat, catIdx) => (
                      <div key={cat.title} className="space-y-10">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + (catIdx * 0.1) }}
                          className="flex items-center gap-4"
                        >
                          <span className="text-[10px] font-black text-[#008CDE] font-mono tracking-widest">{cat.id}</span>
                          <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 border-l border-white/10 pl-4">{cat.title}</h3>
                        </motion.div>

                        <div className="flex flex-col space-y-6 md:space-y-8">
                          {cat.links.map((link, linkIdx) => (
                            <motion.div
                              key={link.name}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 + (catIdx * 0.1) + (linkIdx * 0.05) }}
                            >
                              <Link 
                                href={link.path}
                                onClick={onClose}
                                className="group inline-flex flex-col"
                              >
                                <div className="flex items-center gap-4 mb-2">
                                  {link.icon && (() => {
                                    const Icon = link.icon;
                                    return <Icon size={18} className="text-[#008CDE] opacity-40 group-hover:opacity-100 transition-opacity" />;
                                  })()}
                                  <span className="text-xl md:text-3xl font-black uppercase tracking-tight text-white/80 group-hover:text-white group-hover:translate-x-2 transition-all duration-500">
                                    {link.name}
                                  </span>
                                </div>
                                <div className="h-px w-0 bg-gradient-to-r from-[#008CDE] to-transparent group-hover:w-full transition-all duration-700 delay-100" />
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CONTACT & CTAS COLUMN */}
                  <div className="lg:col-span-4 flex flex-col justify-between space-y-16">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      className="p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-xl"
                    >
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#008CDE] mb-8">Canales de Enlace</h4>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4 group cursor-pointer">
                          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-[#008CDE] group-hover:text-white transition-all">
                            <Phone size={18} />
                          </div>
                          <div>
                            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Atención_MX</p>
                            <p className="text-sm font-bold text-white">55 7479 3873</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 group cursor-pointer">
                          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-[#008CDE] group-hover:text-white transition-all">
                            <Mail size={18} />
                          </div>
                          <div>
                            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Protocolo_Email</p>
                            <p className="text-sm font-bold text-white">contacto@apen.mx</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-12 space-y-4">
                        <Link 
                          href="/diagnostico" 
                          onClick={onClose}
                          className="w-full flex items-center justify-between p-5 bg-[#008CDE] hover:bg-[#005B97] rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all group"
                        >
                          Iniciar Diagnóstico
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link 
                          href="/contacto" 
                          onClick={onClose}
                          className="w-full flex items-center justify-between p-5 bg-white/5 hover:bg-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all border border-white/10 group"
                        >
                          Página de Contacto
                          <MessageSquare size={16} />
                        </Link>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="space-y-4 opacity-50"
                    >
                      <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.5em] leading-relaxed">
                        Administradora de Proyectos Energéticos S.A. de C.V. <br />
                        © 2025 ALL RIGHTS RESERVED
                      </p>
                    </motion.div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
