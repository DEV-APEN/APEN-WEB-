"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Plus, Minus, Search, ChevronRight, 
  Zap, ShieldCheck, Gavel, BarChart3, 
  Droplets, FileText, ArrowRight,
  MessageSquare, AlertCircle, HelpCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutContact from "@/components/AboutContact";
import MobileMenu from "@/components/MobileMenu";

const FAQ_DATA = [
  {
    id: "cne",
    title: "CNE & Regulación",
    icon: <Zap size={20} />,
    questions: [
      {
        q: "¿Qué es la CNE y por qué reemplazó a la CRE?",
        a: "La Comisión Nacional de Energía (CNE) es el organismo creado en marzo de 2025 que absorbió las funciones de la Comisión Reguladora de Energía (CRE) y la Comisión Nacional de Hidrocarburos (CNH). Hoy es la única autoridad que otorga permisos para almacenamiento, distribución, transporte, expendio y comercialización de hidrocarburos, así como permisos de generación y suministro eléctrico en México.",
        type: "general"
      },
      {
        q: "¿Qué permiso necesito para operar una estación de servicio?",
        a: "Necesitas el Permiso de Comercialización de Petrolíferos (excepto Gas LP) ante la CNE. El trámite es 100% digital, el costo de derechos es de $32,081 MXN y el plazo oficial de respuesta es de 70 días hábiles — reducido de 90 a partir del acuerdo publicado en julio de 2025.",
        type: "general"
      },
      {
        q: "¿Cuánto dura el permiso de la CNE para una gasolinera?",
        a: "Los permisos otorgados desde finales de 2022 tienen vigencia de 10 años, reducida desde los 30 años que era el estándar anterior. Esto tiene implicaciones importantes para el retorno de inversión y para el financiamiento de proyectos. Desde abril de 2026, además, tu permiso debe aparecer activo en la Lista L_CNE o no podrás timbrar facturas de gasolina.",
        type: "general"
      },
      {
        q: "Mi permiso es de la antigua CRE. ¿Sigue siendo válido con la CNE?",
        a: "Sí, los permisos vigentes emitidos por la CRE mantienen sus términos y condiciones originales conforme a los transitorios de la reforma. Sin embargo, desde el 24 de abril de 2026 tu permiso debe estar activo en la L_CNE para poder timbrar el Complemento de Hidrocarburos en tu CFDI. Si hay discrepancias en la lista, hay que corregirlas antes de que te bloqueen el timbrado.",
        type: "critical"
      },
      {
        q: "Desde abril de 2026 no puedo timbrar mis facturas de gasolina. ¿Qué está pasando?",
        a: "El SAT implementó el Complemento de Hidrocarburos obligatorio en el CFDI. Al momento de timbrar, el PAC valida en tiempo real que tu número de permiso CNE esté activo en la L_CNE. Si el permiso no aparece, está vencido, o hay un error en la razón social, el timbrado falla automáticamente. No es un problema de tu sistema de facturación — es un problema de cumplimiento regulatorio. Necesitas regularizar el permiso ante la CNE.",
        type: "critical"
      },
      {
        q: "Presenté mi trámite ante la CRE antes de marzo de 2025 y no tengo respuesta. ¿Qué pasó con mi expediente?",
        a: "Durante la transición a la CNE, los plazos se suspendieron por 90 días naturales y hubo un rezago estimado de 600 solicitudes pendientes. La CNE reanudó trámites el 2 de junio de 2025. Si tu solicitud fue ratificada antes del 5 de junio de 2025, se resuelve bajo las reglas antiguas. Si no la ratificaste, puede estar en limbo. Lo revisamos contigo.",
        type: "critical"
      }
    ]
  },
  {
    id: "asea",
    title: "ASEA & SASISOPA",
    icon: <ShieldCheck size={20} />,
    questions: [
      {
        q: "¿Qué es la ASEA?",
        a: "La Agencia de Seguridad, Energía y Ambiente es el regulador federal responsable de la seguridad industrial, la seguridad operativa y la protección ambiental en todas las actividades del sector hidrocarburos en México. Depende de SEMARNAT y tiene facultades de inspección, sanción, clausura y autorización de sistemas de administración.",
        type: "general"
      },
      {
        q: "¿Qué es el SASISOPA y quién está obligado a tenerlo?",
        a: "Es el Sistema de Administración de Seguridad Industrial, Seguridad Operativa y Protección al Medio Ambiente. Es obligatorio para cualquier empresa que realice actividades en el sector hidrocarburos: gasolineras, distribuidoras de Gas LP, almacenistas, transportistas, entre otros. Consta de 18 elementos interrelacionados. No tenerlo es la principal causa de clausura en México hoy.",
        type: "general"
      },
      {
        q: "¿Cuál es la diferencia entre la Conformación y la Autorización del SASISOPA?",
        a: "La Conformación es el registro del sistema a nivel de razón social — se tramita una sola vez. La Autorización es el acto por instalación — cada estación necesita la suya. Muchos operadores tienen la Conformación pero no la Autorización por instalación, y eso los expone igual.",
        type: "general"
      },
      {
        q: "Tengo la Conformación del SASISOPA pero no la Autorización. ¿Estoy en riesgo?",
        a: "Sí. La Conformación sin Autorización es un cumplimiento incompleto. La ASEA diferencia ambos actos en sus actas de inspección y puede iniciar un procedimiento sancionatorio aunque tengas la Conformación. El riesgo se mide también por cuántas visitas de inspección han ocurrido en tu zona — los operativos de 2025 clausuraron el 80% de las estaciones verificadas.",
        type: "critical"
      },
      {
        q: "Me llegó un acta de inspección con observaciones. ¿Tengo tiempo de corregirlas antes de que llegue la clausura?",
        a: "Depende del tipo de observación y del criterio del inspector. Algunas irregularidades generan clausura inmediata; otras dan plazo para subsanar. Lo crítico es que el plazo para impugnar el acta o presentar pruebas de corrección corre desde la notificación. No esperes para revisarla — cada día que pasa sin acción puede complicar la defensa.",
        type: "critical"
      },
      {
        q: "Mi estación fue clausurada en uno de los operativos recientes de ASEA-Profeco. ¿Qué documentos necesito para reabrirla?",
        a: "El primer paso es revisar el acta de clausura para identificar la causa exacta. En los operativos de 2025 la causa más frecuente fue MIA no vigente o ausente. Para el levantamiento necesitas: corregir el incumplimiento (MIA, SASISOPA, LAU según sea el caso), obtener dictamen de Tercero Autorizado ASEA, presentar la documentación ante la Agencia y solicitar reinspección. El proceso sin asesoría puede tomar meses. Con el expediente correcto desde el inicio, es semanas.",
        type: "critical"
      },
      {
        q: "¿Qué es la Manifestación de Impacto Ambiental (MIA) y cuándo vence?",
        a: "La MIA es el estudio que evalúa y autoriza los impactos ambientales de tu instalación. A diferencia de la Licencia Ambiental Única (LAU), la MIA no tiene una vigencia fija establecida en ley, pero la ASEA puede requerir actualizarla si hubo modificaciones a la instalación o si el resolutivo tiene más de cierto número de años. Es el documento más verificado en los operativos recientes.",
        type: "general"
      },
      {
        q: "¿La PROY-NOM-023-ASEA-2025 ya me afecta si tengo una estación en operación?",
        a: "Aún está en consulta pública, pero la señal es clara: la NOM-005-ASEA-2016 será cancelada y reemplazada por un marco técnico más exigente con evaluación sistémica de riesgos, mayor carga documental y criterios de fiscalización más estrictos. Para estaciones existentes, el riesgo está en la transición. Quienes ya tienen su expediente técnico bien integrado tendrán una adaptación ordenada. Quienes no, van a enfrentar dictámenes negativos en la siguiente verificación.",
        type: "critical"
      },
      {
        q: "Mi dictamen de Operación y Mantenimiento bajo la NOM-005 venció. ¿Puedo renovarlo o necesito uno nuevo?",
        a: "Debe renovarse anualmente — la ASEA no otorga prórrogas. Si venció, la estación está en incumplimiento activo y es sujeto de sanción en cualquier inspección. La renovación implica una nueva visita de Unidad de Verificación acreditada. Si además ya hay observaciones abiertas de dictámenes anteriores, hay que cerrarlas primero.",
        type: "critical"
      }
    ]
  },
  {
    id: "legal",
    title: "Defensa Legal",
    icon: <Gavel size={20} />,
    questions: [
      {
        q: "¿Qué es un Procedimiento Administrativo Sancionatorio (PAS)?",
        a: "Es el proceso formal mediante el cual la ASEA impone sanciones a un regulado por incumplimiento normativo. Tiene etapas definidas: inicio, pruebas y alegatos, resolución. Las multas van de $1.3 hasta $43 millones de pesos dependiendo del tipo de infracción. El PAS puede iniciarse después de una inspección, de una negativa de acceso al inspector, o de oficio.",
        type: "general"
      },
      {
        q: "Me notificaron el inicio de un PAS. ¿Qué tan urgente es reaccionar?",
        a: "Muy urgente. La etapa de pruebas y alegatos tiene plazos cortos desde la notificación y es donde se define el resultado. Lo que presentes ahí —o lo que no presentes— puede ser la diferencia entre una multa reducida y una sanción máxima o clausura definitiva. La defensa tiene que ser técnica y jurídica al mismo tiempo. Necesitamos el expediente completo desde hoy.",
        type: "critical"
      },
      {
        q: "Ya interpuse un Recurso de Revisión y lo perdí. ¿Qué sigue?",
        a: "El siguiente paso es la Demanda de Nulidad ante el Tribunal Federal de Justicia Administrativa (TFJA). Si hay violaciones graves de forma o de fondo en el procedimiento, también puede proceder el Amparo. La estrategia depende de lo que pasó en el Recurso y de los argumentos que ya se plantearon. Revisamos el expediente para ver qué vías siguen abiertas.",
        type: "critical"
      },
      {
        q: "Me multaron pero cuento con SASISOPA activo. ¿Eso me ayuda?",
        a: "Sí, directamente. El SASISOPA activo es un atenuante legal reconocido en la Ley de la ASEA para la imposición de sanciones. No elimina la multa pero puede reducir significativamente el monto. Además, es un argumento para demostrar buena fe regulatoria en el procedimiento.",
        type: "critical"
      },
      {
        q: "¿Qué es el levantamiento de clausura y cuánto tarda?",
        a: "Es el acto administrativo mediante el cual la ASEA retira los sellos de clausura y permite reanudar operaciones. El tiempo depende de la causa de la clausura y de la rapidez con que se subsanen las irregularidades y se presente la documentación ante la autoridad. Con un expediente correcto desde el inicio, los casos documentales pueden resolverse en semanas; los que requieren obras o nuevos dictámenes toman más.",
        type: "general"
      },
      {
        q: "¿Pueden defenderme aunque no hayan llevado el caso desde el inicio?",
        a: "Sí. Podemos incorporarnos al caso en cualquier etapa — PAS, Recurso de Revisión, Nulidad o Amparo — y también como apoyo técnico-regulatorio si ya tienes abogado pero el caso requiere conocimiento específico del sector energético.",
        type: "general"
      }
    ]
  },
  {
    id: "energia",
    title: "Sector Eléctrico",
    icon: <Zap size={20} />,
    questions: [
      {
        q: "¿Qué es el Padrón de Contratistas de CFE y quién lo necesita?",
        a: "Es el registro habilitante para participar en licitaciones de obra y servicios de la Comisión Federal de Electricidad. Sin padrón activo no puedes concursar, ni firmar contrato aunque te adjudiquen. APEN tiene el Padrón No. 4493015 y puede apoyarte en la gestión del tuyo.",
        type: "general"
      },
      {
        q: "Ganamos una licitación CFE pero nuestro padrón está por vencer en el momento de la firma del contrato. ¿Qué pasa?",
        a: "Padrón vencido al momento de la firma es causal de descalificación o cancelación del contrato adjudicado. La renovación tiene tiempos que no siempre cuadran con el calendario licitatorio. Si ya estás en esa situación, hay que moverse esta semana.",
        type: "critical"
      },
      {
        q: "CFE nos rechazó la ingeniería de la subestación por incumplimiento de DCCSED01/DCCSET01. ¿Pueden retomar el proyecto?",
        a: "Sí. Revisamos la ingeniería existente, identificamos las brechas contra los criterios de diseño y construcción de CFE, y tomamos la dirección técnica desde donde esté el proyecto. Es más rápido corregir que reiniciar si el diseño conceptual ya tiene avance.",
        type: "critical"
      },
      {
        q: "Queremos vender energía al Mercado Eléctrico Mayorista pero no sabemos si nuestro proyecto califica para interconexión.",
        a: "El primer filtro es el estudio de impacto en la red para verificar capacidad disponible en el punto de interconexión. Antes de eso hacemos el pre-análisis técnico-regulatorio — muchos proyectos no llegan al estudio porque no resuelven este paso primero. Nosotros lo resolvemos antes de que inviertas en estudios formales.",
        type: "critical"
      },
      {
        q: "¿Qué permiso de generación necesito ante la CNE para un proyecto de energía renovable o cogeneración?",
        a: "Dependiendo de la capacidad y el esquema comercial, necesitas un Permiso de Generación para Suministro Básico, Calificado, o para Autoabasto. Cada tipo tiene obligaciones distintas ante CENACE, CFE y la propia CNE. El proceso inicia con la solicitud de punto de interconexión y la ingeniería básica del proyecto.",
        type: "general"
      }
    ]
  },
  {
    id: "finance",
    title: "Project Finance",
    icon: <BarChart3 size={20} />,
    questions: [
      {
        q: "¿Qué es el Project Finance aplicado a infraestructura energética?",
        a: "Es la estructuración financiera de un proyecto a través de sus propios flujos de caja futuros, sin comprometer el balance de la empresa sponsor. El proyecto se aísla en un vehículo especial (SPV), se estructura la deuda con garantías sobre los activos y contratos del proyecto, y se conecta con fondos de capital o banca de desarrollo según el perfil de riesgo-retorno.",
        type: "general"
      },
      {
        q: "Tenemos el permiso CNE activo pero no logramos cerrar el financiamiento. ¿Dónde se rompen estas estructuras normalmente?",
        a: "Casi siempre en tres puntos: modelo financiero que no resiste el due diligence de la banca, garantías insuficientes para el monto de deuda requerido, o SPV mal estructurado que no da la certeza jurídica que exige el inversionista. Revisamos el estado actual de tu estructura y te decimos dónde está la fuga antes de que pierdas más tiempo con fondos.",
        type: "critical"
      },
      {
        q: "Nuestro proyecto tiene permiso, tiene terreno, tiene offtaker. El banco nos pide más colateral del que tenemos. ¿Qué opciones hay?",
        a: "Hay estructuras que reducen el requerimiento de colateral: garantías parciales de banca de desarrollo (NAFIN, Banobras), estructuras de fideicomiso sobre flujos, o co-inversión con capital privado que apalanca la deuda sénior. El camino depende del tamaño del proyecto y del tipo de banco que estás trabajando. Lo analizamos contigo.",
        type: "critical"
      },
      {
        q: "¿Qué es un SPV y por qué la banca lo exige en proyectos energéticos?",
        a: "Un Special Purpose Vehicle es una sociedad creada exclusivamente para el proyecto, que mantiene los activos y contratos aislados del balance corporativo del desarrollador. La banca lo exige porque reduce el riesgo de contagio — si otras operaciones del grupo tienen problemas, no afectan el proyecto financiado. También facilita la ejecución de garantías en caso de incumplimiento.",
        type: "general"
      }
    ]
  },
  {
    id: "achilles",
    title: "PEMEX & Achilles",
    icon: <Droplets size={20} />,
    questions: [
      {
        q: "¿Qué es el Registro Achilles y para qué sirve en el sector energético?",
        a: "Achilles es el sistema internacional de calificación y habilitación de proveedores utilizado por PEMEX y otras empresas del sector de hidrocarburos. Tener registro activo en Achilles es requisito para participar en procesos de contratación con PEMEX. APEN tiene el ID 00249023, clase A extendida, con vigencia hasta noviembre de 2026 y más de 120 categorías habilitadas.",
        type: "general"
      },
      {
        q: "Queremos licitar con PEMEX pero no tenemos registro Achilles. ¿Cuánto tarda y qué implica?",
        a: "El proceso de registro y evaluación Achilles toma entre 4 y 8 semanas dependiendo de la documentación disponible. Implica acreditación de capacidad técnica, financiera, legal y en materia de seguridad y medio ambiente. Si ya tienes ISO 9001, 14001 o 45001, el proceso se facilita significativamente. Si quieres entrar a una licitación específica, el timing es crítico.",
        type: "critical"
      },
      {
        q: "Tenemos registro Achilles pero solo en pocas categorías. ¿Podemos ampliar sin repetir todo el proceso?",
        a: "Sí. La ampliación de categorías se gestiona sobre el registro existente y requiere acreditación específica para las nuevas áreas. Es un proceso más ágil que el registro inicial pero igual requiere evidencia técnica y documental por cada categoría que se agrega.",
        type: "critical"
      }
    ]
  }
];

export default function FAQsPageClient() {
  const [activeCategory, setActiveCategory] = useState(FAQ_DATA[0].id);
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const filteredData = FAQ_DATA.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
      q.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  // Generar JSON-LD para SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.flatMap(cat => 
      cat.questions.map(q => ({
        "@type": "Question",
        "name": q.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.a
        }
      }))
    )
  };

  return (
    <main className="min-h-screen bg-white">
      <Header visible={true} onOpenMenu={() => setIsMenuOpen(true)} />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-24 bg-[#061427] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#008CDE]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4fc3ff]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#008CDE]/20 border border-[#008CDE]/30 flex items-center justify-center text-[#4fc3ff]">
                  <HelpCircle size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#4fc3ff]">Centro de Soporte Técnico</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                Preguntas<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4fc3ff] to-[#008CDE] italic">Frecuentes</span>
              </h1>
              <p className="max-w-lg text-blue-100/60 text-lg font-medium leading-relaxed mb-10">
                Información actualizada 2025-2026 sobre el nuevo marco regulatorio energético en México. Resolvemos sus dudas críticas sobre la CNE, ASEA y CFE.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-md">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-blue-400">
                  <Search size={18} />
                </div>
                <input 
                  type="text"
                  placeholder="Buscar por tema, autoridad o trámite..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white placeholder-white/20 outline-none focus:border-[#008CDE] transition-all backdrop-blur-sm"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square lg:aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image 
                src="/visual/imagenes/faqs-hero.jpg"
                alt="FAQ Support"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061427] via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-24 bg-slate-50 min-h-screen">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Sidebar Categories */}
            <aside className="lg:col-span-3">
              <div className="sticky top-32 space-y-2">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 pl-4">Categorías</p>
                {FAQ_DATA.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all font-bold text-sm ${
                      activeCategory === cat.id 
                      ? "bg-white text-[#008CDE] shadow-xl shadow-blue-900/5 translate-x-2" 
                      : "text-slate-500 hover:bg-white hover:text-[#0B2341]"
                    }`}
                  >
                    <div className={`${activeCategory === cat.id ? "text-[#008CDE]" : "text-slate-300"}`}>
                      {cat.icon}
                    </div>
                    {cat.title}
                    {activeCategory === cat.id && <motion.div layoutId="activeCat" className="ml-auto w-1.5 h-1.5 rounded-full bg-[#008CDE]" />}
                  </button>
                ))}

                <div className="mt-12 p-6 bg-[#0B2341] rounded-[2rem] text-white overflow-hidden relative">
                   <div className="relative z-10">
                     <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">¿Duda Específica?</p>
                     <p className="text-sm font-bold mb-4">Consulte a nuestro gabinete técnico directo.</p>
                     <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-[#008CDE] px-5 py-3 rounded-xl hover:bg-blue-600 transition-colors">
                        <MessageSquare size={14} /> Chatear ahora
                     </button>
                   </div>
                   <AlertCircle className="absolute -bottom-4 -right-4 text-white/5 w-24 h-24" />
                </div>
              </div>
            </aside>

            {/* Questions List */}
            <div className="lg:col-span-9 space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory + searchTerm}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {filteredData.find(c => c.id === activeCategory)?.questions.map((q, idx) => (
                    <div 
                      key={idx}
                      className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                        openItems.includes(`${activeCategory}-${idx}`) 
                        ? "border-[#008CDE]/30 shadow-2xl shadow-blue-900/5" 
                        : "border-slate-200 hover:border-slate-300 shadow-sm"
                      }`}
                    >
                      <button
                        onClick={() => toggleItem(`${activeCategory}-${idx}`)}
                        className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                      >
                        <div className="flex gap-4 md:gap-6">
                           <div className={`mt-1 shrink-0 ${q.type === 'critical' ? 'text-rose-500' : 'text-[#008CDE]'}`}>
                              {q.type === 'critical' ? <AlertCircle size={20} /> : <FileText size={20} />}
                           </div>
                           <div>
                              <p className={`text-sm md:text-lg font-black leading-tight uppercase tracking-tight ${
                                q.type === 'critical' ? 'text-[#0B2341]' : 'text-[#0B2341]'
                              }`}>
                                {q.q}
                              </p>
                              <div className="flex gap-2 mt-2">
                                 {q.type === 'critical' && (
                                   <span className="text-[9px] font-black uppercase tracking-widest bg-rose-50 text-rose-600 px-2 py-0.5 rounded">Riesgo Crítico</span>
                                 )}
                                 <span className="text-[9px] font-black uppercase tracking-widest bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                                   {activeCategory.toUpperCase()}
                                 </span>
                              </div>
                           </div>
                        </div>
                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                          openItems.includes(`${activeCategory}-${idx}`) 
                          ? "bg-[#008CDE] border-[#008CDE] text-white rotate-180" 
                          : "border-slate-200 text-slate-400 group-hover:border-[#008CDE] group-hover:text-[#008CDE]"
                        }`}>
                          {openItems.includes(`${activeCategory}-${idx}`) ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                      </button>

                      <AnimatePresence>
                        {openItems.includes(`${activeCategory}-${idx}`) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-8 md:p-10 pt-0 bg-slate-50/50 border-t border-slate-100">
                               <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed mb-6">
                                  {q.a}
                               </p>
                               <div className="flex items-center gap-4">
                                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#008CDE] hover:text-[#0B2341] transition-colors group">
                                     Consultar sobre este tema <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                  </button>
                               </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  {filteredData.find(c => c.id === activeCategory)?.questions.length === 0 && (
                    <div className="py-20 text-center bg-white rounded-3xl border border-dashed border-slate-300">
                       <HelpCircle size={48} className="mx-auto text-slate-200 mb-4" />
                       <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No se encontraron resultados para "{searchTerm}"</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <AboutContact />
      <Footer />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
