"use client";

export default function AboutContact() {
  return (
    <section id="nosotros" className="bg-apen-blue text-white py-24 border-t-4 border-apen-electric">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* SOBRE APEN */}
          <div>
            <h2 className="text-sm font-semibold text-apen-electric tracking-wide uppercase mb-3">Sobre APEN</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-6">Firma Mexicana de Excelencia</h3>
            <div className="w-20 h-1 bg-apen-electric mb-8"></div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Somos una organización 100% mexicana estructurada para responder a los estándares más exigentes del sector energético nacional e internacional.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Nuestra capacidad operativa probada nos permite participar en el desarrollo, ejecución y consolidación de proyectos de hidrocarburos, infraestructura eléctrica y obra electromecánica con estricto apego regulatorio.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-700">
              <div>
                <p className="text-4xl font-bold text-white mb-1">15+</p>
                <p className="text-sm text-gray-400">Años de experiencia conjunta</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-1">100%</p>
                <p className="text-sm text-gray-400">Enfoque Técnico</p>
              </div>
            </div>
          </div>

          {/* CONTACTO / CTA INSTITUCIONAL */}
          <div id="contacto" className="bg-white rounded-lg p-8 sm:p-10 shadow-xl text-apen-gray">
            <h3 className="text-2xl font-bold text-apen-blue mb-2">Inicie una Evaluación de Proyecto</h3>
            <p className="text-gray-600 mb-8 text-sm">
              Contacte a nuestra área técnica para identificar la viabilidad y requerimientos de sus proyectos en desarrollo o ejecución.
            </p>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo y Empresa</label>
                <input type="text" id="name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:ring-apen-electric focus:border-apen-electric outline-none transition-colors" placeholder="Ej. Ing. Roberto Sánchez - Empresa S.A. de C.V." />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico Corporativo</label>
                <input type="email" id="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:ring-apen-electric focus:border-apen-electric outline-none transition-colors" placeholder="contacto@empresa.com" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Área de Interés</label>
                <select id="service" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:ring-apen-electric focus:border-apen-electric outline-none transition-colors">
                  <option>Seleccione un área...</option>
                  <option>Regulación y Normatividad</option>
                  <option>Ingeniería y Obras</option>
                  <option>Energía Eléctrica y Renovables</option>
                  <option>Upstream y Downstream</option>
                  <option>Sostenibilidad y Cumplimiento</option>
                  <option>Otro</option>
                </select>
              </div>
              <button type="button" className="w-full bg-apen-blue hover:bg-apen-electric text-white font-medium py-3 px-4 rounded transition-colors mt-2">
                Solicitar Contacto Técnico
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-5 text-center">
              Su información será tratada con estricta confidencialidad corporativa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
