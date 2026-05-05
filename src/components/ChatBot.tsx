"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageSquare, ChevronRight, CornerDownRight } from 'lucide-react';
import Image from 'next/image';

// ─────────────────────────────────────────────
//  SUBMENÚ — Unidades de Servicios
// ─────────────────────────────────────────────
const SERVICIOS_MENU = [
  "Hidrocarburos",
  "Sector Energético",
  "Defensa Legal",
  "Project Finance",
];

// ─────────────────────────────────────────────
//  MENÚ PRINCIPAL
// ─────────────────────────────────────────────
const MAIN_MENU_OPTIONS = [
  "Servicios",
  "Certificaciones",
  "Diagnóstico",
  "Contacto",
];

// ─────────────────────────────────────────────
//  BASE DE CONOCIMIENTO
// ─────────────────────────────────────────────
const KNOWLEDGE_BASE = [
  {
    category: "Hidrocarburos",
    keys: [
      "hidrocarburo", "gasolina", "combustible", "gasolinera", "estacion de servicio",
      "almacenamiento", "distribucion", "ducto", "gas", "petrolifero",
      "ope", "oficialía", "asea", "sasisopa", "mia", "informe preventivo",
      "nom-003", "nom-005", "nom-016", "cne", "permiso", "cre",
      "misse", "evis", "impacto social", "impacto ambiental", "riesgo ambiental",
      "tanque", "autotanque", "diesel", "turbina"
    ],
    botMessage: "Gestionamos el ciclo normativo completo para el sector hidrocarburos — desde el pre-registro hasta la operación continua ante CNE, ASEA y SENER:",
    details: [
      { t: "Permisos CNE / ASEA", desc: "Pre-registro OPE, estaciones de servicio, autoconsumo, carburación, almacenamiento, distribución y comercialización." },
      { t: "Cumplimiento Ambiental", desc: "MIA, Informe Preventivo, Estudios de Riesgo, SASISOPA, NOM-003, NOM-005 y NOM-016-CRE." },
      { t: "Trámites SENER", desc: "MISSE previa a EVIS, permisos de importación y ruta documental para nuevos desarrollos." },
      { t: "Infraestructura Operativa", desc: "Unidades tanque, autotanques, instalaciones de gas, montaje y mantenimiento de tanques." }
    ],
    actionLinks: [{ label: "Expediente Hidrocarburos", target: "/servicios/hidrocarburos" }]
  },
  {
    category: "Sector Energético",
    keys: [
      "electricidad", "electrico", "subestacion", "tension", "kv", "transformador",
      "tablero", "media tension", "alta tension", "linea transmision", "conduccion",
      "cfe", "padron", "4493015", "interconexion", "mercado electrico", "mem",
      "generacion", "transmision", "distribucion electrica", "suministro",
      "pycon", "dccsed", "dccset", "codigo de red", "comisionamiento",
      "licitacion", "ingenieria electrica", "electromagnetica", "electromecánica", "obra electrica"
    ],
    botMessage: "Ejecutamos infraestructura eléctrica hasta 230 kV bajo dirección técnica propia — con Padrón CFE No. 4493015 activo y capacidad de participación en licitaciones:",
    details: [
      { t: "Consultoría CNE", desc: "Permisos de generación, transmisión, distribución, suministro e interconexión al Mercado Eléctrico Mayorista (MEM). Código de Red 2.0." },
      { t: "Ejecución Técnica 230 kV", desc: "Subestaciones de potencia 115–230 kV, tableros MT/AT, montaje electromecánico, líneas de transmisión. Normas DCCSED01, DCCSET01, PYCON-SE-01." },
      { t: "Commissioning", desc: "Protocolos FAT/SAT, ajuste de relés de protección, pruebas de energización, verificación SCADA y expediente técnico final auditado." },
      { t: "Licitaciones CFE", desc: "Estructura, seguimiento y participación en licitaciones bajo Padrón CFE 4493015." }
    ],
    actionLinks: [{ label: "Expediente Sector Energético", target: "/servicios/energia" }]
  },
  {
    category: "Defensa Legal",
    keys: [
      "legal", "juridico", "clausura", "multa", "sancion", "requerimiento",
      "nulidad", "tfja", "amparo", "impugnacion", "recurso", "revision",
      "regularizacion", "as-built", "levantamiento", "dictamen", "peritaje",
      "emplazamiento", "defensa", "litigio", "administrativo", "expediente"
    ],
    botMessage: "Ofrecemos respuesta integral ante actos de autoridad — contención jurídica e ingeniería correctiva para proyectos del sector energético en proceso de sanción o normalización:",
    details: [
      { t: "Contención y Defensa Jurídica", desc: "Levantamiento inmediato de clausuras, Demandas de Nulidad ante el TFJA, respuesta técnica a emplazamientos, gestión de multas ante ASEA/CRE." },
      { t: "Ingeniería de Regularización", desc: "Ingeniería As-Built, levantamientos arquitectónicos, diagramas unifilares, integración de expedientes SASISOPA y memorias de cálculo técnicas." },
      { t: "Regularización Interinstitucional", desc: "Normalización integral ante ASEA, CNE y SENER con cobertura nacional." }
    ],
    actionLinks: [{ label: "Expediente Defensa Legal", target: "/servicios/legal" }]
  },
  {
    category: "Project Finance",
    keys: [
      "project finance", "financiamiento", "fondeo", "capital", "inversion", "inversor",
      "spv", "fideicomiso", "equity", "deuda", "credito", "sindicacion",
      "due diligence", "valuacion", "rentabilidad", "tir", "vpn", "capex", "opex",
      "garantia", "colateral", "fianza", "seguro infraestructura",
      "roadshow", "comite inversion", "fondo", "socio estrategico", "partnership",
      "blindaje", "asset protection", "vehiculo proposito especifico"
    ],
    botMessage: "Estructuramos la viabilidad financiera de activos energéticos críticos — conectamos proyectos de infraestructura con vehículos de inversión estratégica:",
    details: [
      { t: "Estructuración de Capital", desc: "Modelado financiero CAPEX/OPEX, sindicación de deuda, créditos puente, SPVs, análisis TIR/VPN y gestión de riesgos cambiarios." },
      { t: "Fondeo Estratégico", desc: "Presentación ante comités de inversión, roadshows institucionales, búsqueda de socios estratégicos y optimización de estructura de costos." },
      { t: "Due Diligence Técnico", desc: "Valuación de activos, auditoría de viabilidad operativa, análisis de riesgos financieros y certificación ante fondos de inversión." },
      { t: "Garantías & Blindaje", desc: "Fianzas técnicas, seguros de infraestructura, colaterales financieros y blindaje legal de capital." }
    ],
    actionLinks: [{ label: "Expediente Project Finance", target: "/servicios/project-finance" }]
  },
  {
    category: "Certificaciones",
    keys: [
      "certificacion", "iso", "iso 9001", "iso 14001", "iso 45001",
      "calidad", "ambiental", "seguridad", "hseq", "respaldo",
      "achilles", "padron cfe", "4493015", "00249023", "acreditacion", "registro"
    ],
    botMessage: "APEN opera bajo los más altos estándares internacionales y marcos regulatorios del sector energético mexicano:",
    details: [
      { t: "ISO 9001:2015 — Calidad", desc: "Folio CIE-SGC-044/2026. Estandarización de procesos, trazabilidad técnica y mejora continua." },
      { t: "ISO 14001:2015 — Ambiental", desc: "Folio CIE-SGA-022/2026. Operaciones sostenibles y mitigación de riesgos ecológicos." },
      { t: "ISO 45001:2018 — Seguridad", desc: "Folio CIE-SGSST-020/2026. Tolerancia cero a accidentes en entornos de trabajo críticos." },
      { t: "Padrón CFE 4493015", desc: "Proveedor autorizado para infraestructura y proyectos de interconexión CFE — validación operativa activa." },
      { t: "Achilles PEMEX ID 00249023", desc: "Registro Extendido Clase A, vigente 2026. +120 categorías habilitadas: eléctrico, electromecánico, hidrocarburos, obra civil." }
    ],
    actionLinks: [{ label: "Ver Certificaciones", target: "/certificaciones" }]
  },
  {
    category: "Diagnóstico",
    keys: [
      "diagnostico", "evaluacion", "viabilidad", "proyecto", "analisis", "consulta",
      "cotizacion", "presupuesto", "propuesta", "asesoria inicial", "primera reunion"
    ],
    botMessage: "Identificamos la viabilidad técnica y normativa de su proyecto energético en 24 horas — sin costo inicial:",
    details: [
      { t: "¿Qué incluye?", desc: "Mapeo de autoridades competentes, estatus regulatorio del proyecto y ruta de ejecución recomendada." },
      { t: "Respuesta en 24 horas", desc: "Nuestro equipo de ingeniería evalúa su caso y le presenta un panorama claro del alcance técnico y normativo." }
    ],
    actionLinks: [{ label: "Solicitar Diagnóstico", target: "/diagnostico" }]
  },
  {
    category: "Contacto",
    keys: [
      "contacto", "correo", "email", "telefono", "ubicacion", "oficina",
      "hablar", "comunicar", "direccion", "sede", "cdmx", "ciudad de mexico",
      "formulario", "mensaje", "atencion"
    ],
    botMessage: "Puede comunicarse con nuestro equipo técnico directamente o visitarnos en nuestra sede en Ciudad de México:",
    details: [
      { t: "Correo Institucional", desc: "contacto@apen.mx" },
      { t: "Sede", desc: "Av. Miguel Ángel de Quevedo 961, El Rosedal, Coyoacán, C.P. 04330, CDMX." }
    ],
    actionLinks: [
      { label: "Ir al Formulario de Contacto", target: "/contacto" },
      { label: "Solicitar Diagnóstico Técnico", target: "/diagnostico" }
    ]
  }
];

// ─────────────────────────────────────────────
//  TIPOS
// ─────────────────────────────────────────────
type Message = {
  isBot: boolean;
  text: string;
  details?: { t: string; desc: string }[];
  actions?: { label: string; target: string }[];
  options?: string[];
  formType?: 'contact';
  isFormSuccess?: boolean;
};

// ─────────────────────────────────────────────
//  COMPONENTE FORMULARIO INTERNO
// ─────────────────────────────────────────────
function ChatForm({ onSubmitSuccess }: { onSubmitSuccess: () => void }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    formData.append("subject", "Nuevo Lead desde CHAT BOT - APEN");
    formData.append("from_name", "Asistente ChatBot");

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await resp.json();

      if (result.success) {
        onSubmitSuccess();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3 bg-white border border-gray-200 p-4 rounded-lg shadow-sm mt-2">
      <div className="space-y-1">
        <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Nombre Completo</label>
        <input name="name" required type="text" className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-xs outline-none focus:border-[#008CDE]" placeholder="Su nombre" />
      </div>
      <div className="space-y-1">
        <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Correo Corporativo</label>
        <input name="email" required type="email" className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-xs outline-none focus:border-[#008CDE]" placeholder="correo@empresa.com" />
      </div>
      <div className="space-y-1">
        <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Breve Requerimiento</label>
        <textarea name="message" required rows={2} className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-xs outline-none focus:border-[#008CDE] resize-none" placeholder="¿En qué podemos ayudarle?"></textarea>
      </div>
      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="w-full bg-[#0B2341] text-white py-2 rounded text-[10px] font-black uppercase tracking-widest hover:bg-[#008CDE] transition-colors disabled:bg-slate-300"
      >
        {status === 'loading' ? 'Enviando...' : 'Solicitar Enlace Técnico'}
      </button>
      {status === 'error' && (
        <div className="bg-red-50 p-2 rounded border border-red-100">
          <p className="text-[9px] text-red-600 font-bold leading-tight">
            Error de conexión. Por favor, revise su red o desactive bloqueadores de publicidad (AdBlock) e intente de nuevo.
          </p>
        </div>
      )}
    </form>
  );
}

// ─────────────────────────────────────────────
//  COMPONENTE PRINCIPAL
// ─────────────────────────────────────────────
export default function ChatBot({ visible = true }: { visible?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    if (isOpen && messages.length === 0) {
      setMessages([{
        isBot: true,
        text: "Bienvenido a **Asistencia Corporativa APEN**. Seleccione un área o describa su necesidad directamente:",
        options: MAIN_MENU_OPTIONS
      }]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleNavigation = (target: string) => {
    if (target.startsWith('/')) {
      window.location.href = target;
    } else {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleUserInput = (input: string) => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { isBot: false, text: input }]);
    setInputValue("");

    setTimeout(() => {
      const lowerInput = input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

      // — Respuestas al flujo de contacto
      if (input === "Sí, contactar") {
        setMessages(prev => [...prev, {
          isBot: true,
          text: "Excelente. Por favor, proporcione sus datos para que un especialista técnico se asigne a su caso:",
          formType: 'contact'
        }]);
        return;
      }

      if (["no, gracias", "despues"].includes(lowerInput)) {
        setMessages(prev => [...prev, {
          isBot: true,
          text: "Entendido. Quedo a su disposición para cualquier otra consulta técnica.",
          options: MAIN_MENU_OPTIONS
        }]);
        return;
      }

      // — "Servicios" despliega el submenú de las 4 unidades
      if (input === "Servicios") {
        setMessages(prev => [...prev, {
          isBot: true,
          text: "Contamos con cuatro unidades estratégicas. ¿Sobre cuál desea información?",
          options: [...SERVICIOS_MENU, "Menú Principal"]
        }]);
        return;
      }

      // — Menú Principal
      if (["menú principal", "menu principal", "menu", "inicio"].includes(lowerInput)) {
        setMessages(prev => [...prev, {
          isBot: true,
          text: "Seleccione el área sobre la que desea información:",
          options: MAIN_MENU_OPTIONS
        }]);
        return;
      }

      // — Coincidencia exacta por categoría (clic en botón)
      const exactMatch = KNOWLEDGE_BASE.find(kb => kb.category === input);

      // — Búsqueda fuzzy por palabras clave (texto libre)
      const fuzzyMatch = KNOWLEDGE_BASE.find(kb =>
        kb.keys.some(k =>
          lowerInput.includes(k.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
        )
      );

      const found = exactMatch || fuzzyMatch;

      if (found) {
        setMessages(prev => [...prev, {
          isBot: true,
          text: found.botMessage,
          details: found.details,
          actions: found.actionLinks,
        }]);

        // Pregunta de seguimiento para contacto
        setTimeout(() => {
          setMessages(prev => [...prev, {
            isBot: true,
            text: "¿Desea que un especialista técnico se ponga en contacto con usted para profundizar en este requerimiento?",
            options: ["Sí, contactar", "No, gracias", "Después"]
          }]);
        }, 800);
        return;
      }

      // — Fallback
      setMessages(prev => [...prev, {
        isBot: true,
        text: "Su consulta requiere la atención de un especialista para brindarle una respuesta precisa. ¿Desea que un integrante de nuestro gabinete técnico se contacte con usted?",
        options: ["Sí, contactar", "Menú Principal"]
      }]);
    }, 500);
  };

  const handleFormSubmit = () => {
    setMessages(prev => {
      const newMessages = [...prev];
      const lastMsg = newMessages[newMessages.length - 1];
      if (lastMsg && lastMsg.formType === 'contact') {
        lastMsg.isFormSuccess = true;
        lastMsg.text = "¡Solicitud enviada con éxito!";
      }
      return newMessages;
    });

    setTimeout(() => {
      setMessages(prev => [...prev, {
        isBot: true,
        text: "Un especialista se pondrá en contacto con usted en un estimado de **24 a 48 horas**. \n\n*Nota: El tiempo de respuesta puede variar según la complejidad técnica del requerimiento y la disponibilidad de peritos asignados al área.*",
        options: ["Menú Principal"]
      }]);
    }, 1000);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[50000]"
        >

          {/* TOOLTIP */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [10, 0, 0, 10],
                scale: [0.95, 1, 1, 0.95]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatDelay: 15,
                times: [0, 0.1, 0.9, 1],
                ease: "easeInOut"
              }}
              className="absolute bottom-16 right-0 mb-2 w-max bg-white px-5 py-2.5 rounded-xl shadow-lg border border-gray-100 pointer-events-none"
            >
              <span className="text-[10px] font-black text-[#0B2341] uppercase tracking-[0.2em]">
                ¿Requiere Asistencia?
              </span>
            </motion.div>
          )}

          {/* BOTÓN FLOTANTE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 bg-[#008CDE] hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#008CDE]"
            aria-label="Toggle Asistente APEN"
          >
            {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
          </button>

          {/* VENTANA DE CHAT */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-20 right-0 w-[340px] md:w-[400px] h-[580px] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="bg-[#0B2341] p-4 flex items-center gap-3 shrink-0">
                <div className="w-9 h-9 bg-white/10 flex items-center justify-center rounded-full shrink-0 overflow-hidden border border-white/10">
                  <Image
                    src="/visual/imagenes/bot.png"
                    alt="Asistente APEN"
                    width={36}
                    height={36}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white text-[13px] font-bold tracking-wide">Asistencia APEN</h3>
                  <p className="text-blue-300 text-[10px] uppercase font-semibold tracking-widest">Gabinete Técnico</p>
                </div>
              </div>

              {/* Historial */}
              <div ref={scrollRef} className="flex-grow p-5 overflow-y-auto bg-gray-50 space-y-5">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex w-full ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                    <div className={`flex flex-col gap-2.5 max-w-[92%] ${msg.isBot ? 'items-start' : 'items-end'}`}>

                      {/* Burbuja */}
                      <div className={`p-3.5 rounded-lg text-[13px] leading-relaxed shadow-sm font-medium ${msg.isBot
                          ? 'bg-white border border-gray-200 text-gray-700 rounded-tl-none'
                          : 'bg-[#008CDE] text-white rounded-tr-none'
                        }`}>
                        <p dangerouslySetInnerHTML={{
                          __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#0B2341] font-bold">$1</strong>')
                        }} />
                      </div>

                      {/* Detalles */}
                      {msg.details && (
                        <div className="w-full space-y-2 bg-white border border-gray-200 p-3 rounded-lg shadow-sm">
                          {msg.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2">
                              <CornerDownRight size={12} className="text-gray-400 mt-1 shrink-0" />
                              <div>
                                <p className="text-[11px] font-bold text-[#0B2341] uppercase tracking-wide">{detail.t}</p>
                                <p className="text-[11px] text-gray-500 leading-relaxed">{detail.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Formulario */}
                      {msg.formType === 'contact' && !msg.isFormSuccess && (
                        <ChatForm onSubmitSuccess={handleFormSubmit} />
                      )}

                      {/* Links de navegación */}
                      {msg.actions && (
                        <div className="w-full flex flex-col gap-1.5">
                          {msg.actions.map((act, aIdx) => (
                            <button
                              key={aIdx}
                              onClick={() => handleNavigation(act.target)}
                              className="w-full flex items-center justify-between px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-gray-200 rounded-md text-[11px] font-bold text-[#008CDE] transition-colors group"
                            >
                              {act.label}
                              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Botones de opción */}
                      {msg.options && (
                        <div className="flex flex-wrap gap-1.5 mt-0.5">
                          {msg.options.map((opt, oIdx) => (
                            <button
                              key={oIdx}
                              onClick={() => handleUserInput(opt)}
                              className={`px-3 py-1.5 border rounded-md text-[11px] font-bold transition-colors ${opt === "Contacto" || opt === "Sí, contactar"
                                  ? 'border-[#0B2341] text-[#0B2341] hover:bg-[#0B2341] hover:text-white'
                                  : opt === "Diagnóstico"
                                    ? 'border-[#008CDE] text-[#008CDE] hover:bg-[#008CDE] hover:text-white'
                                    : 'border-gray-200 text-gray-600 hover:bg-gray-100 bg-white'
                                }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <form
                onSubmit={(e) => { e.preventDefault(); handleUserInput(inputValue); }}
                className="p-3 bg-white border-t border-gray-200 flex gap-2 shrink-0"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Escriba su consulta técnica..."
                  aria-label="Escribir mensaje al asistente"
                  className="flex-grow bg-transparent border border-gray-300 rounded-md px-3 py-2 text-[13px] text-gray-700 outline-none focus:border-[#008CDE] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Enviar mensaje"
                  className="w-10 h-10 bg-[#0B2341] hover:bg-blue-900 text-white rounded-md flex items-center justify-center transition-colors shadow-sm shrink-0 disabled:opacity-40"
                  disabled={!inputValue.trim()}
                >
                  <Send size={16} />
                </button>
              </form>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}