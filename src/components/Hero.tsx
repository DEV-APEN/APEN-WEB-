interface HeroProps {
  onVideoEnd: () => void;
  showIndicator?: boolean;
}

export default function Hero({ onVideoEnd, showIndicator }: HeroProps) {
  return (
    <section className="relative bg-white w-full h-[70vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-white overflow-hidden flex items-center justify-center">
        <video 
          autoPlay 
          muted 
          playsInline 
          onEnded={onVideoEnd}
          className="w-full h-full md:h-full object-contain md:object-cover scale-100 md:scale-105"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Tu navegador no es compatible con videos.
        </video>
      </div>
      
      {/* SEO Title - Visually Hidden but readable by search engines */}
      <h1 className="sr-only">
        APEN | Administradora de Proyectos Energéticos - Consultoría e Ingeniería Especializada en Hidrocarburos y Electricidad en México
      </h1>

      {/* Smooth transition to content */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/20 to-transparent pointer-events-none"></div>

      {/* Scroll indicator - Relative to Hero only */}
      {showIndicator && (
        <a 
          href="#servicios"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center animate-in fade-in duration-[2500ms] delay-500"
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
      )}
    </section>
  );
}
