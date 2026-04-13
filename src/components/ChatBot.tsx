"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageSquare, Phone, MapPin, ShieldCheck, ChevronRight, CornerDownRight } from 'lucide-react';
import Image from 'next/image';

// Base de Conocimiento Corporativo
const KNOWLEDGE_BASE = [
  {
    category: "Servicios",
    keys: ["servicio", "ope", "asea", "cfe", "cre", "sasisopa", "mia", "clausura", "obra", "civil"],
    botMessage: "Nuestro catálogo operativo abarca ingeniería, gestión normativa y defensa legal en el sector energético:",
    details: [
      { t: "Obra Civil y Electromecánica", desc: "Ingeniería 230kV, subestaciones y mantenimiento especializado." },
      { t: "Consultoría y Regulación", desc: "Permisos CRE, pre-registro OPE, dictámenes ASEA y SASISOPA." },
      { t: "Mantenimiento Técnico", desc: "Instrumentación, control y continuidad operativa de infraestructura crítica." },
      { t: "Defensa Jurídica", desc: "Levantamiento de clausuras y litigios administrativos." }
    ],
    actionLinks: [{ label: "Ir al Catálogo de Servicios", target: "/servicios" }]
  },
  {
    category: "Nosotros",
    keys: ["nosotros", "quienes", "empresa", "trayectoria", "historia"],
    botMessage: "APEN (Administradora de Proyectos Energéticos) es una firma 100% mexicana con **+10 Años de Trayectoria**, estructurada bajo estándares internacionales:",
    details: [
      { t: "Autoridad Técnica", desc: "Combina ingeniería, cumplimiento regulatorio y ejecución operativa." },
      { t: "Modelo APEN", desc: "Unificación de áreas (Ingeniería, Legal, Auditoría) en un solo gabinete técnico." },
      { t: "Presencia", desc: "Más de 140 proyectos industriales y 60 empresas líderes respaldan nuestro valor." }
    ],
    actionLinks: [{ label: "Ver Perfil Corporativo", target: "/nosotros" }]
  },
  {
    category: "Certificaciones y Padrón",
    keys: ["certificacion", "iso", "achilles", "padron", "cfe", "calidad", "respaldo"],
    botMessage: "Operamos bajo un sistema de gestión integral avalado internacionalmente y con registros en entidades energéticas:",
    details: [
      { t: "ISO Estandarizado", desc: "Certificados en ISO 9001 (Calidad), ISO 14001 (Ambiental) e ISO 45001 (Seguridad)." },
      { t: "Padrón CFE", desc: "Proveedores Autorizados, Validación Operativa Activa." },
      { t: "Red Achilles // PEMEX", desc: "Registro ID: 00249023 para plataformas industriales y precalificación HSEQ." }
    ],
    actionLinks: [{ label: "Ver Acreditaciones", target: "/certificaciones" }]
  },
  {
    category: "Contacto Técnico",
    keys: ["contacto", "correo", "telefono", "ubicacion", "oficina", "cotizacion", "hablar", "dirección"],
    botMessage: "Estamos listos para evaluar su proyecto o atender su requerimiento. Encuéntrenos en nuestra sede central o plataformas digitales:",
    details: [
      { t: "Atención Telefónica", desc: "+52 (55) 0000 0000" },
      { t: "Correo Institucional", desc: "contacto@apen.mx" },
      { t: "Sede Centro", desc: "Av. Miguel Ángel de Quevedo 961, El Rosedal, Coyoacán, C.P. 04330, CDMX." }
    ],
    actionLinks: [{ label: "Ir al Formulario Directo", target: "/contacto" }]
  }
];

const MAIN_MENU = [
  "Servicios", 
  "Nosotros", 
  "Certificaciones y Padrón", 
  "Contacto Técnico"
];

// Estructura de Mensajes
type Message = {
  isBot: boolean;
  text: string;
  details?: { t: string, desc: string }[];
  actions?: { label: string, target: string }[];
  options?: string[]; // Botones de navegación
};

export default function ChatBot({ visible = true }: { visible?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Inicializar Bot
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        isBot: true,
        text: "Bienvenido al área de Asistencia Corporativa de APEN. Seleccione una de las siguientes áreas para conocer más información, o escriba su necesidad específica:",
        options: MAIN_MENU
      }]);
    }
  }, [isOpen, messages.length]);

  // Autoscroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Manejador de Navegación del Sitio
  const handleNavigation = (target: string) => {
    // Si empieza con '/', enviamos a esa URL
    if (target.startsWith('/')) {
      window.location.href = target;
    } else {
      // Intento local de ancla
      const el = document.getElementById(target);
      if (el) {
         el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleUserInput = (input: string) => {
    if (!input.trim()) return;

    // Agregar mensaje de usuario
    setMessages(prev => [...prev, { isBot: false, text: input }]);
    setInputValue("");

    // Analizar entrada
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      const exactCategory = KNOWLEDGE_BASE.find(kb => kb.category === input);
      const fuzzyMatch = KNOWLEDGE_BASE.find(kb => kb.keys.some(k => lowerInput.includes(k)));
      
      const foundData = exactCategory || fuzzyMatch;

      if (foundData) {
        setMessages(prev => [...prev, {
          isBot: true,
          text: foundData.botMessage,
          details: foundData.details,
          actions: foundData.actionLinks,
          options: ["Menú Principal", "Contacto Técnico"] // Siempre permite volver o contactar
        }]);
      } else if (lowerInput === "menú principal") {
        setMessages(prev => [...prev, {
          isBot: true,
          text: "Listado principal de información institucional:",
          options: MAIN_MENU
        }]);
      } else {
        setMessages(prev => [...prev, {
          isBot: true,
          text: "Su consulta requiere la atención de un experto para brindarle una respuesta precisa. ¿Desea comunicarse con nuestra oficina?",
          options: ["Contacto Técnico", "Menú Principal"]
        }]);
      }
    }, 600);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[50000]"
        >
          
          {/* TOOLTIP CORPORATIVO NO INTRUSIVO (CICLO ACTIVO) */}
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
              <span className="text-[10px] font-black text-[#0B2341] uppercase tracking-[0.2em] flex items-center gap-2">
                 ¿Requiere Asistencia?
              </span>
            </motion.div>
          )}

          {/* BOTÓN FLOTANTE MINIMALISTA */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 bg-[#008CDE] hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#008CDE]"
            aria-label="Toggle Asistente"
          >
            {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
          </button>

          {/* CHAT WINDOW CORPORATIVO */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-20 right-0 w-[340px] md:w-[400px] h-[550px] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
            >
              {/* Header Sobrio */}
              <div className="bg-[#0B2341] p-4 flex items-center gap-3 shrink-0">
                 <div className="w-9 h-9 bg-white/10 flex items-center justify-center rounded-full shrink-0 overflow-hidden border border-white/10">
                   <Image src="/visual/imagenes/bot.png" alt="Bot APEN" width={36} height={36} className="w-full h-full object-cover" />
                 </div>
                 <div>
                   <h3 className="text-white text-[13px] font-bold tracking-wide">Asistencia APEN</h3>
                   <p className="text-blue-300 text-[10px] uppercase font-semibold">Gabinete Técnico</p>
                 </div>
              </div>

              {/* Historial de Mensajes */}
              <div ref={scrollRef} className="flex-grow p-5 overflow-y-auto bg-gray-50 space-y-6">
                 {messages.map((msg, index) => (
                    <div key={index} className={`flex w-full ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                      <div className={`flex flex-col gap-3 max-w-[90%] ${msg.isBot ? 'items-start' : 'items-end'}`}>
                        
                        {/* Texto Principal */}
                        <div className={`p-3.5 rounded-lg text-[13px] leading-relaxed shadow-sm font-medium ${
                          msg.isBot 
                          ? 'bg-white border border-gray-200 text-gray-700 rounded-tl-none' 
                          : 'bg-[#008CDE] text-white rounded-tr-none'
                        }`}>
                          <p dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#0B2341] font-bold">$1</strong>') }}></p>
                        </div>

                        {/* Detalles Organizacionales (Si existen) */}
                        {msg.details && (
                          <div className="w-full space-y-2 bg-white border border-gray-200 p-3 rounded-lg shadow-sm">
                             {msg.details.map((detail, dIdx) => (
                                <div key={dIdx} className="flex items-start gap-2">
                                   <CornerDownRight size={12} className="text-gray-400 mt-1 shrink-0" />
                                   <div>
                                     <p className="text-[11px] font-bold text-[#0B2341] uppercase">{detail.t}</p>
                                     <p className="text-[11px] text-gray-500">{detail.desc}</p>
                                   </div>
                                </div>
                             ))}
                          </div>
                        )}

                        {/* Acciones de Navegación del Sitio */}
                        {msg.actions && (
                          <div className="w-full flex">
                            {msg.actions.map((act, aIdx) => (
                               <button
                                 key={aIdx}
                                 onClick={() => handleNavigation(act.target)}
                                 className="w-full flex items-center justify-between px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-gray-200 rounded-md text-[11px] font-bold text-[#008CDE] transition-colors group"
                               >
                                 {act.label} <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                               </button>
                            ))}
                          </div>
                        )}

                        {/* Botones de Consulta Híbrida (Flujo del Bot) */}
                        {msg.options && (
                          <div className="flex flex-wrap gap-2 mt-1">
                            {msg.options.map((opt, oIdx) => (
                               <button
                                 key={oIdx}
                                 onClick={() => handleUserInput(opt)}
                                 className={`px-3 py-1.5 border rounded-md text-[11px] font-bold transition-colors ${
                                   opt === "Contacto Técnico" 
                                   ? 'border-[#0B2341] text-[#0B2341] hover:bg-[#0B2341] hover:text-white'
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

              {/* Input Real (Caja de Texto) */}
              <form 
                onSubmit={(e) => { e.preventDefault(); handleUserInput(inputValue); }}
                className="p-3 bg-white border-t border-gray-200 flex gap-2 shrink-0"
              >
                 <input 
                   type="text" 
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   placeholder="Escriba su consulta..."
                   className="flex-grow bg-transparent border border-gray-300 rounded-md px-3 py-2 text-[13px] text-gray-700 outline-none focus:border-[#008CDE] transition-colors"
                 />
                 <button 
                   type="submit" 
                   className="w-10 h-10 bg-[#0B2341] hover:bg-blue-900 text-white rounded-md flex items-center justify-center transition-colors shadow-sm shrink-0 disabled:opacity-50"
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
