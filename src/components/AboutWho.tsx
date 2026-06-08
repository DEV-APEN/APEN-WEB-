"use client";
import Image from 'next/image';
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
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#008CDE] mb-4">Identidad Institucional</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0B2341] leading-[0.9] mb-8">
              ¿Quién es <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008CDE] to-[#0B2341]">APEN?</span>
            </h2>
            <p className="text-base text-slate-500 font-medium leading-relaxed mb-6 italic">
              La firma que conoce la norma porque la litiga — y puede ejecutar porque tiene los registros.
            </p>
            <p className="text-base text-slate-500 font-medium leading-relaxed mb-6">
              No somos un despacho que asesora desde afuera, ni un contratista que ejecuta sin entender la norma. Somos el equipo que hace las dos cosas bajo el mismo techo. Nuestra práctica principal es la consultoría regulatoria: representamos y acompañamos a empresarios del sector ante ASEA, CNE y SENER para que sus proyectos, permisos y procesos administrativos se resuelvan a su favor. Con más de 3,000 trámites gestionados y 500 juicios ganados, somos la firma con mayor trayectoria verificable en consultoría regulatoria energética en México.
            </p>
            <p className="text-base text-slate-500 font-medium leading-relaxed">
              Además de nuestra práctica consultiva, participamos por cuenta propia en licitaciones ante CFE y PEMEX. Con Padrón CFE No. 4493015 y registro Achilles ID 00249023 activo en más de 120 categorías, tenemos la habilitación para armar consorcios y ejecutar proyectos de gran escala. El empresario que empieza con un permiso ASEA puede terminar con APEN como socio ejecutor de su proyecto completo — sin cambiar de firma.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/visual/imagenes/quien-es-apen.png"
                alt="Equipo APEN"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
