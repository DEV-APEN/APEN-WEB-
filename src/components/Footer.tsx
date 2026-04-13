import Image from 'next/image';
import { Mail, Phone, MapPin, ShieldCheck, Award, Target, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navItems = [
    { label: 'Servicios', href: '/servicios' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Certificaciones', href: '/certificaciones' },
  ];

  return (
    <footer className="bg-[#061427] text-white pt-20 pb-12 relative overflow-hidden border-t border-white/5">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          
          {/* COLUMN 1: BRAND IDENTITY */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="h-16 w-48 relative transform origin-left scale-150">
               <Image 
                  src="https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png" 
                  alt="APEN Logo" 
                  fill
                  className="object-contain brightness-0 invert"
                />
            </div>
            <p className="text-gray-400 text-sm md:text-base font-bold leading-relaxed max-w-sm">
              Administradora de Proyectos Energéticos. Especialistas en cumplimiento regulatorio y alta ingeniería para la cadena de valor de hidrocarburos y electricidad en México.
            </p>
            <div className="flex gap-4">
               <div className="flex flex-col">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Padrón CFE</span>
                  <span className="text-xs font-black">No. 4493015</span>
               </div>
               <div className="w-[1px] h-10 bg-white/10"></div>
               <div className="flex flex-col">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Achilles ID</span>
                  <span className="text-xs font-black">00249023</span>
               </div>
            </div>
          </div>

          {/* COLUMN 2: QUICK NAVIGATION */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-white border-b border-white/10 pb-4 mb-6">Navegación</h4>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white text-xs font-black uppercase tracking-widest transition-all inline-flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/contacto"
                  className="text-gray-400 hover:text-white text-xs font-black uppercase tracking-widest transition-all"
                >
                  Contacto Técnico
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: EXPERTISE BREADTH */}
          <div className="lg:col-span-3">
             <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-white border-b border-white/10 pb-4 mb-6">Especialización</h4>
             <ul className="space-y-4">
                {[
                  'Consultoría CRE / CNE',
                  'Normatividad ASEA',
                  'Ingeniería CFE / SENER',
                  'Gestión SASISOPA',
                  'Código de Red 2.0'
                ].map((service) => (
                  <li key={service} className="text-gray-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                     <Target size={12} className="text-blue-500/50" />
                     {service}
                  </li>
                ))}
             </ul>
          </div>

          {/* COLUMN 4: GLOBAL HEADQUARTERS */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-white border-b border-white/10 pb-4 mb-6">Sede Central</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin size={22} className="text-blue-500 shrink-0" />
                <p className="text-gray-400 text-xs font-black uppercase tracking-tight leading-loose">
                  Av. Miguel Ángel de Quevedo 961, <br />
                  El Rosedal, Coyoacán, <br />
                  C.P. 04330, CDMX.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                 <a href="tel:+525500000000" className="flex items-center gap-4 text-xs font-black text-gray-400 hover:text-white transition-colors">
                    <Phone size={18} className="text-blue-500" /> +52 (55) 0000 0000
                 </a>
                 <a href="mailto:contacto@apen.mx" className="flex items-center gap-4 text-xs font-black text-gray-400 hover:text-white transition-colors">
                    <Mail size={18} className="text-blue-500" /> contacto@apen.mx
                 </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP: ACCREDITATIONS & LEGAL */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="flex items-center gap-2">
                <ShieldCheck size={20} />
                <span className="text-[9px] font-black uppercase tracking-widest">ISO 9001:2015</span>
             </div>
             <div className="flex items-center gap-2">
                <Award size={20} />
                <span className="text-[9px] font-black uppercase tracking-widest">ISO 14001:2015</span>
             </div>
             <div className="flex items-center gap-2">
                <ShieldCheck size={20} />
                <span className="text-[9px] font-black uppercase tracking-widest">ISO 45001:2018</span>
             </div>
          </div>

          <div className="text-center lg:text-right">
             <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">
                &copy; {currentYear} APEN Group - Administradora de Proyectos Energéticos S.A. de C.V.
             </p>
             <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest">
                Certeza Jurídica y Técnica en el Sector Energía. México.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
