import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, ShieldCheck, Award, Target } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const currentYear = new Date().getFullYear();
  const navItems = [
    { label: 'Servicios', href: '/servicios' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Certificaciones', href: '/certificaciones' },
  ];

  if (!mounted) return null;

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#061427] pb-12 pt-20 text-white">
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute right-0 top-0 h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-20">
          <div className="flex flex-col gap-8 lg:col-span-4">
            <div className="relative h-16 w-48 origin-left scale-150 transform">
              <Image
                src="https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png"
                alt="APEN Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="max-w-sm text-sm font-bold leading-relaxed text-gray-400 md:text-base">
              Administradora de Proyectos Energéticos. Especialistas en cumplimiento regulatorio y alta ingeniería
              para la cadena de valor de hidrocarburos y electricidad en México.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="mb-1 text-[10px] font-black uppercase tracking-widest text-blue-400">Padrón CFE</span>
                <span className="text-xs font-black">No. 4493015</span>
              </div>
              <div className="h-10 w-[1px] bg-white/10" />
              <div className="flex flex-col">
                <span className="mb-1 text-[10px] font-black uppercase tracking-widest text-blue-400">Achilles ID</span>
                <span className="text-xs font-black">00249023</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-6 border-b border-white/10 pb-4 text-[11px] font-black uppercase tracking-[0.3em] text-white">
              Navegación
            </h4>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 transition-all hover:text-white"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contacto"
                  className="text-xs font-black uppercase tracking-widest text-gray-400 transition-all hover:text-white"
                >
                  Contacto Técnico
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-6 border-b border-white/10 pb-4 text-[11px] font-black uppercase tracking-[0.3em] text-white">
              Especialización
            </h4>
            <ul className="space-y-4">
              {[
                'Consultoría CNE',
                'Normatividad ASEA',
                'Ingeniería CFE / SENER',
                'Gestión SASISOPA',
                'Código de Red 2.0',
              ].map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400"
                >
                  <Target size={12} className="text-blue-500/50" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-6 border-b border-white/10 pb-4 text-[11px] font-black uppercase tracking-[0.3em] text-white">
              Sede Central
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin size={22} className="shrink-0 text-blue-500" />
                <p className="text-xs font-black uppercase leading-loose tracking-tight text-gray-400">
                  Av. Miguel Ángel de Quevedo 961, <br />
                  El Rosedal, Coyoacán, <br />
                  C.P. 04330, CDMX.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+525574793873"
                  className="flex items-center gap-4 text-xs font-black text-gray-400 transition-colors hover:text-white"
                >
                  <Phone size={18} className="text-blue-500" /> 55 7479 3873
                </a>
                <a
                  href="mailto:contacto@apen.mx"
                  className="flex items-center gap-4 text-xs font-black text-gray-400 transition-colors hover:text-white"
                >
                  <Mail size={18} className="text-blue-500" /> contacto@apen.mx
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-12 lg:flex-row">
          <div className="flex flex-wrap justify-center gap-10 opacity-40 grayscale transition-all duration-700 hover:grayscale-0 lg:justify-start">
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
            <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-gray-500">
              &copy; {currentYear} APEN Group - Administradora de Proyectos Energéticos S.A. de C.V.
            </p>
            <div className="mb-2 flex flex-wrap items-center justify-center gap-3 text-[9px] font-black uppercase tracking-[0.22em] text-gray-500 lg:justify-end">
              <Link href="/terminos-y-condiciones" className="transition-colors hover:text-white">
                Términos y Condiciones
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/politica-de-privacidad" className="transition-colors hover:text-white">
                Política de Privacidad
              </Link>
            </div>
            <p className="text-[8px] font-black uppercase tracking-widest text-gray-600">
              Certeza jurídica y técnica en el sector energía. México.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
