import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section className="relative bg-white w-full h-[65vh] md:h-screen pt-20 md:pt-0 flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-white overflow-hidden flex items-center justify-center">
        <HeroVideo />
      </div>
      
      {/* SEO Headings - Visually Hidden */}
      <h1 className="sr-only">
        APEN Administradora de Proyectos Energéticos — Consultoría energética regulatoria en México: permisos CNE, cumplimiento ASEA e ingeniería eléctrica.
      </h1>
      <h2 className="sr-only">
        Consultoría regulatoria ante CNE, ASEA y CFE para proyectos de energía eléctrica e hidrocarburos en México.
      </h2>

      {/* Smooth transition to content */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-40 bg-gradient-to-t from-white via-white/20 to-transparent pointer-events-none"></div>

      {/* Scroll indicator */}
      <a
        href="#servicios"
        className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center animate-in fade-in duration-700"
      >
        <div className="animate-bounce flex flex-col items-center cursor-pointer group">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-apen-blue/60 group-hover:text-apen-blue transition-colors mb-2">
            Explorar
          </span>
          <svg className="w-8 h-8 text-apen-blue/60 group-hover:text-apen-blue transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </a>
    </section>
  );
}
