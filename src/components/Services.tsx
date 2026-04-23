"use client";

import { motion } from "framer-motion";
import { ArrowRight, Droplets, Gavel, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

const serviceSections = [
  {
    id: "01",
    title: "Hidrocarburos",
    label: "Energía & Regulación",
    subtitle: "Consultoría regulatoria integral para empresarios del sector.",
    description: "Permisos CNE, cumplimiento ASEA, regularización y defensa ante autoridades. Acompañamos desde la idea hasta la operación.",
    image: "/hidro.jpg",
    icon: Droplets,
    color: "#008CDE",
    accent: "from-blue-600 to-cyan-500",
    items: [
      "Trámites integrales ante OPE y CNE.",
      "Permisos para Estaciones de Servicio y Autoconsumo.",
      "Logística de Almacenamiento y Distribución.",
      "Dictámenes SASISOPA, MIA y NOM-016-CRE.",
      "Monitoreo de trazabilidad y calidad de producto."
    ],
    reverse: false,
    url: "/servicios/hidrocarburos"
  },
  {
    id: "02",
    title: "Sector Energético",
    label: "Infraestructura Eléctrica",
    subtitle: "Infraestructura eléctrica hasta 230 kV bajo dirección técnica propia.",
    description: "Subestaciones, tableros, montaje electromecánico y licitaciones CFE. Padrón No. 4493015 activo.",
    image: "/ener.jpg",
    icon: Zap,
    color: "#D97706",
    accent: "from-amber-400 to-orange-500",
    items: [
      "Permisos CNE de Generación y Suministro.",
      "Gestión de Interconexión al Mercado Eléctrico.",
      "Ingeniería Detallada de Subestaciones 230 kV.",
      "Asesoría Técnica en Normas DCCSED01/DCCSET01.",
      "Licitaciones Estratégicas y Padrón CFE."
    ],
    reverse: true,
    url: "/servicios/energia"
  },
  {
    id: "03",
    title: "Defensa Legal",
    label: "Certeza Jurídica",
    subtitle: "Dirección jurídica especializada en energía desde el origen.",
    description: "Amparo, nulidad, clausuras e impugnaciones con conocimiento técnico-operativo de primera mano. No como servicio externo.",
    image: "/legal.jpg",
    icon: Gavel,
    color: "#EF4444",
    accent: "from-rose-600 to-red-500",
    items: [
      "Defensa legal especializada en proyectos energéticos.",
      "Levantamiento de clausuras e impugnación de multas.",
      "Demandas de Nulidad y Recursos de Revisión.",
      "Atención a requerimientos ASEA, CNE y SENER.",
      "Regularización integral de expedientes técnicos."
    ],
    reverse: false,
    url: "/servicios/legal"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="bg-white">
      {serviceSections.map((service, index) => (
        <div 
          key={service.id} 
          className={`py-24 md:py-40 relative flex items-center overflow-hidden border-t border-slate-50 ${index === serviceSections.length - 1 ? 'border-b' : ''}`}
        >
          {/* Fondo Dinámico Sutil */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          
          <div className="mx-auto max-w-7xl px-6">
            <div className={`flex flex-col gap-16 md:gap-24 items-center ${service.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              
              {/* Contenido Visual (Columna Imagen) */}
              <motion.div 
                initial={{ opacity: 0, x: service.reverse ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-1/2 relative group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[3rem] shadow-2xl">
                   <img
                     src={service.image}
                     alt={service.title}
                     loading="lazy"
                     decoding="async"
                     className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0B2341]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                   
                   {/* Inset Icon Overlay */}
                   <div className={`absolute top-10 right-10 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-gradient-to-br ${service.accent} text-white shadow-2xl backdrop-blur-md`}>
                      <service.icon size={36} />
                   </div>
                </div>

                {/* Floating Big Number Background */}
                <div className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 z-0 pointer-events-none">
                   <span className="text-[180px] md:text-[280px] font-black text-slate-100 leading-none select-none italic tracking-tighter">
                     {service.id}
                   </span>
                </div>
              </motion.div>

              {/* Contenido Texto (Columna Info) */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full md:w-1/2 flex flex-col items-start"
              >
                <div className="mb-4 flex items-center gap-3">
                   <span className="text-[11px] font-black uppercase tracking-[0.5em] text-apen-blue">{service.label}</span>
                </div>
                
                <h2 className="text-4xl font-black uppercase tracking-tighter text-[#0B2341] md:text-5xl lg:text-6xl mb-6">
                  {service.title}
                </h2>

                <p className="text-xl font-bold italic text-slate-400 mb-8 leading-tight">
                  "{service.subtitle}"
                </p>

                <p className="text-sm font-semibold text-slate-500 mb-10 leading-relaxed max-w-xl">
                  {service.description}
                </p>

                {/* Lista de Puntos Estratégicos */}
                <div className="grid grid-cols-1 gap-4 mb-12 w-full">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group/item cursor-default">
                       <div className="h-2 w-2 rounded-full bg-slate-200 transition-all duration-300 group-hover/item:bg-apen-blue group-hover/item:scale-150" />
                       <span className="text-[12px] md:text-[13px] font-black uppercase tracking-tight text-[#0B2341] group-hover/item:translate-x-2 transition-transform duration-300">
                         {item}
                       </span>
                    </div>
                  ))}
                </div>

                {/* Link Detalle Sector */}
                <Link
                  href={service.url}
                  className="group/btn inline-flex items-center gap-6 rounded-full bg-[#0B2341] py-4 px-10 text-[10px] font-black uppercase tracking-[0.4em] text-white shadow-xl transition-all hover:bg-apen-blue hover:scale-105"
                >
                  Expediente Completo
                  <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-2" />
                </Link>
              </motion.div>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
