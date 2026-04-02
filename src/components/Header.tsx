"use client";
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  visible: boolean;
}

export default function Header({ visible }: HeaderProps) {
  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-1000 transform ${
      visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="absolute inset-0 bg-white/20 backdrop-blur-md border-b border-white/10 pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 w-full">
          {/* Logo a la izquierda */}
          <div className="flex-shrink-0 flex items-center h-16 w-72 overflow-visible transform transition-transform hover:scale-105">
            <Link href="/" className="relative h-full w-full overflow-visible">
              <Image 
                src="https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png" 
                alt="APEN Logo" 
                fill
                className="object-contain scale-[2.2] transform origin-center"
                priority
              />
            </Link>
          </div>
          
          {/* Navigation en el medio */}
          <nav className="hidden md:flex items-center space-x-16">
            {['Servicios', 'Capacidades', 'Nosotros'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="relative text-[11px] font-black uppercase tracking-[0.2em] text-apen-gray hover:text-apen-electric transition-all duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-apen-electric transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Contacto a la derecha */}
          <div className="hidden md:flex items-center">
            <a 
              href="#contacto" 
              className="relative overflow-hidden inline-flex items-center justify-center px-8 py-2.5 bg-apen-blue text-white text-[10px] font-black uppercase tracking-widest rounded-sm transition-all duration-500 hover:bg-apen-electric hover:shadow-[0_0_20px_rgba(0,91,181,0.4)] active:scale-95 group"
            >
              <span className="relative z-10">Contacto Técnico</span>
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:left-[100%]"></div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
