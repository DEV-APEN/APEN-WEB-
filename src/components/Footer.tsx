import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#061528] py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 h-16 w-56 relative overflow-visible">
             <Image 
                src="https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png" 
                alt="APEN Logo" 
                fill
                className="object-contain scale-[2.2] transform origin-center brightness-0 invert opacity-80"
              />
          </div>
          <div className="text-sm text-gray-400 text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} APEN (Administradora de Proyectos Energéticos).</p>
            <p className="mt-1">Todos los derechos reservados. México.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
