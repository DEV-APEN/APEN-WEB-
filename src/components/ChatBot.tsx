"use client";
import { useCallback, useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle2, MessageSquare, RotateCcw, Send, X } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";
import {
  buscarContenido, esAfirmacion, esNegacion, esPreguntaExplicativa, mejorIntencion, normalizar, partirNegritas,
  type Coincidencia, type Detalle, type Enlace, type EntradaIndice,
} from "@/lib/asistente";

// ─────────────────────────────────────────────
//  RESPUESTAS RÁPIDAS
// ─────────────────────────────────────────────
const MENU_PRINCIPAL = ["Servicios", "Coque de petróleo", "Diagnóstico", "Certificaciones", "Contacto"];
const MENU_SERVICIOS = ["Hidrocarburos", "Sector Eléctrico", "Defensa Legal", "Financiamiento de proyectos", "Menú principal"];
const HABLAR = "Hablar con un especialista";
const TRAS_RESPUESTA = [HABLAR, "Menú principal"];

const BIENVENIDA = "¡Hola! Soy el asistente de **APEN**. Te oriento sobre permisos, cumplimiento, defensa legal, financiamiento y coque de petróleo. Elige un área o escribe tu pregunta:";

// ─────────────────────────────────────────────
//  TIPOS
// ─────────────────────────────────────────────
type Mensaje = {
  id: number;
  deBot: boolean;
  texto: string;
  detalles?: Detalle[];
  enlaces?: Enlace[];
  resultados?: Coincidencia[];
  opciones?: string[];
  formulario?: boolean;
  formularioEnviado?: boolean;
};

type Borrador = Omit<Mensaje, "id">;

// ─────────────────────────────────────────────
//  TEXTO CON NEGRITAS (sin HTML inyectado)
// ─────────────────────────────────────────────
function TextoEnriquecido({ texto, oscuro }: { texto: string; oscuro?: boolean }) {
  return (
    <p className="whitespace-pre-line">
      {partirNegritas(texto).map((segmento, i) =>
        segmento.negrita
          ? <strong key={i} className={oscuro ? "font-bold text-white" : "font-bold text-[#0b2341]"}>{segmento.texto}</strong>
          : <span key={i}>{segmento.texto}</span>
      )}
    </p>
  );
}

// ─────────────────────────────────────────────
//  FORMULARIO DE CONTACTO DENTRO DEL CHAT
// ─────────────────────────────────────────────
function FormularioContacto({ tema, pagina, onEnviado }: { tema: string | null; pagina: string; onEnviado: () => void }) {
  const [estado, setEstado] = useState<"idle" | "enviando" | "error">("idle");
  const id = useId();
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const enviar = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEstado("enviando");
    const datos: Record<string, string> = Object.fromEntries(
      Array.from(new FormData(event.currentTarget).entries()).map(([clave, valor]) => [clave, valor.toString()])
    );
    // El asunto conserva "CHAT BOT": la API lo usa para enrutar al formulario correcto.
    datos.subject = "Nuevo Lead desde CHAT BOT - APEN";
    datos.from_name = "Asistente ChatBot";

    try {
      const respuesta = await fetch("/api/submit-protocol", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(datos),
      });
      const resultado = await respuesta.json();
      if (resultado.success) onEnviado();
      else setEstado("error");
    } catch {
      setEstado("error");
    }
  };

  const campo = "w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-[14px] text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-[#0075b6] focus:ring-2 focus:ring-[#0075b6]/20";
  const etiqueta = "text-[12px] font-bold text-[#0b2341]";

  return (
    <form onSubmit={enviar} className="w-full space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="space-y-1.5">
        <label htmlFor={`${id}-nombre`} className={etiqueta}>Nombre completo</label>
        <input id={`${id}-nombre`} name="name" required type="text" autoComplete="name" className={campo} placeholder="Tu nombre" />
      </div>
      <div className="space-y-1.5">
        <label htmlFor={`${id}-telefono`} className={etiqueta}>Celular</label>
        <input id={`${id}-telefono`} name="phone" required type="tel" inputMode="tel" autoComplete="tel"
          pattern="[0-9+()\s-]{10,}" title="Escribe al menos 10 dígitos" className={campo} placeholder="10 dígitos" />
      </div>
      <div className="space-y-1.5">
        <label htmlFor={`${id}-correo`} className={etiqueta}>Correo <span className="font-medium text-slate-500">(opcional)</span></label>
        <input id={`${id}-correo`} name="email" type="email" autoComplete="email" className={campo} placeholder="tu@empresa.com" />
      </div>
      <div className="space-y-1.5">
        <label htmlFor={`${id}-mensaje`} className={etiqueta}>¿Qué necesitas?</label>
        <textarea id={`${id}-mensaje`} name="message" required rows={3} maxLength={1500}
          className={campo + " resize-none"} placeholder="Describe brevemente tu proyecto o situación" />
      </div>

      {/* Contexto para el equipo: de qué hablaba la persona y desde qué página escribió. */}
      <input type="hidden" name="tema" value={tema ?? "Sin tema específico"} />
      <input type="hidden" name="pagina" value={pagina} />
      {/* Trampa para bots: Formspree descarta los envíos que llenan este campo. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      {siteKey && <Turnstile siteKey={siteKey} options={{ size: "flexible", theme: "light", language: "es" }} />}

      <button type="submit" disabled={estado === "enviando"}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0b2341] py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#0075b6] disabled:cursor-not-allowed disabled:bg-slate-400">
        {estado === "enviando" ? "Enviando…" : "Enviar solicitud"}
      </button>

      {estado === "error" && (
        <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-[12px] font-semibold leading-relaxed text-red-700">
          No pudimos enviar tu solicitud. Revisa tu conexión e inténtalo de nuevo; si usas un bloqueador de anuncios, desactívalo para este sitio. También puedes escribir a contacto@apen.mx.
        </p>
      )}
    </form>
  );
}

// ─────────────────────────────────────────────
//  INDICADOR DE ESCRITURA
// ─────────────────────────────────────────────
function Escribiendo({ sinMovimiento }: { sinMovimiento: boolean }) {
  return (
    <div className="flex justify-start" aria-hidden="true">
      <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-md border border-slate-200 bg-white px-4 py-3.5 shadow-sm">
        {sinMovimiento
          ? <span className="text-[13px] text-slate-500">Escribiendo…</span>
          : [0, 150, 300].map(retraso => (
            <span key={retraso} className="h-2 w-2 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: `${retraso}ms` }} />
          ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
//  COMPONENTE PRINCIPAL
// ─────────────────────────────────────────────
export default function ChatBot({ visible = true }: { visible?: boolean }) {
  const [abierto, setAbierto] = useState(false);
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);
  const [entrada, setEntrada] = useState("");
  const [escribiendo, setEscribiendo] = useState(false);
  const [tema, setTema] = useState<string | null>(null);
  const [mostrarInvitacion, setMostrarInvitacion] = useState(false);
  const [yaAbierto, setYaAbierto] = useState(false);

  const router = useRouter();
  const pagina = usePathname() ?? "/";
  const sinMovimiento = useReducedMotion() ?? false;
  const tituloId = useId();

  const siguienteId = useRef(0);
  const disparador = useRef<HTMLButtonElement>(null);
  const campoEntrada = useRef<HTMLInputElement>(null);
  const registro = useRef<HTMLDivElement>(null);
  const indice = useRef<Promise<EntradaIndice[]> | null>(null);

  const nuevo = useCallback((borrador: Borrador): Mensaje => ({ ...borrador, id: siguienteId.current++ }), []);
  const agregar = useCallback((...borradores: Borrador[]) => setMensajes(previos => [...previos, ...borradores.map(nuevo)]), [nuevo]);

  // El índice del sitio se descarga solo cuando la persona abre el chat.
  const cargarIndice = useCallback(() => {
    if (!indice.current) {
      indice.current = fetch("/api/asistente/indice")
        .then(respuesta => (respuesta.ok ? respuesta.json() : []))
        .catch(() => []);
    }
    return indice.current;
  }, []);

  const abrir = () => {
    setAbierto(true);
    setYaAbierto(true);
    setMostrarInvitacion(false);
    cargarIndice();
    setMensajes(previos => (previos.length ? previos : [nuevo({ deBot: true, texto: BIENVENIDA, opciones: MENU_PRINCIPAL })]));
  };

  const cerrar = useCallback((devolverFoco = true) => {
    setAbierto(false);
    if (devolverFoco) requestAnimationFrame(() => disparador.current?.focus());
  }, []);

  const reiniciar = () => {
    setTema(null);
    setMensajes([nuevo({ deBot: true, texto: BIENVENIDA, opciones: MENU_PRINCIPAL })]);
    campoEntrada.current?.focus();
  };

  // Invitación discreta: aparece una sola vez y nunca si la persona ya abrió el chat.
  useEffect(() => {
    if (yaAbierto) return;
    const mostrar = window.setTimeout(() => setMostrarInvitacion(true), 6000);
    const ocultar = window.setTimeout(() => setMostrarInvitacion(false), 14000);
    return () => { window.clearTimeout(mostrar); window.clearTimeout(ocultar); };
  }, [yaAbierto]);

  // Foco al campo al abrir; Escape cierra y devuelve el foco al botón.
  useEffect(() => {
    if (!abierto) return;
    const foco = requestAnimationFrame(() => campoEntrada.current?.focus());
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") cerrar(); };
    document.addEventListener("keydown", escape);
    return () => { cancelAnimationFrame(foco); document.removeEventListener("keydown", escape); };
  }, [abierto, cerrar]);

  useEffect(() => {
    registro.current?.scrollTo({ top: registro.current.scrollHeight, behavior: sinMovimiento ? "auto" : "smooth" });
  }, [mensajes, escribiendo, sinMovimiento]);

  const navegar = (destino: string) => {
    // La conversación sigue viva: el chat vive en el layout y no se desmonta.
    cerrar(false);
    router.push(destino);
  };

  const ultimoBot = () => [...mensajes].reverse().find(mensaje => mensaje.deBot);

  const responder = async (texto: string, desdeBoton = false) => {
    const limpio = texto.trim();
    if (!limpio || escribiendo) return;

    agregar({ deBot: false, texto: limpio });
    setEntrada("");
    setEscribiendo(true);

    const pausa = new Promise(resolver => setTimeout(resolver, sinMovimiento ? 150 : 450));
    const conTiempoLimite = Promise.race([cargarIndice(), new Promise<EntradaIndice[]>(resolver => setTimeout(() => resolver([]), 1500))]);
    const [, contenido] = await Promise.all([pausa, conTiempoLimite]);

    setEscribiendo(false);
    const consulta = normalizar(limpio);

    if (consulta === "servicios") {
      agregar({ deBot: true, texto: "Trabajamos en cuatro áreas. ¿Sobre cuál quieres saber?", opciones: MENU_SERVICIOS });
      return;
    }
    if (["menu principal", "menu", "inicio", "volver"].includes(consulta)) {
      agregar({ deBot: true, texto: "¿Sobre qué área te oriento?", opciones: MENU_PRINCIPAL });
      return;
    }
    const ofrecioContacto = ultimoBot()?.opciones?.includes(HABLAR);
    if (consulta === normalizar(HABLAR) || consulta === "si contactar" || (esAfirmacion(limpio) && ofrecioContacto)) {
      agregar({ deBot: true, texto: "Déjanos tus datos y un especialista del Gabinete Técnico tomará tu caso:", formulario: true });
      return;
    }
    if (esNegacion(limpio)) {
      agregar({ deBot: true, texto: "De acuerdo. Si surge otra duda técnica o regulatoria, aquí sigo.", opciones: MENU_PRINCIPAL });
      return;
    }

    const intencion = mejorIntencion(limpio);
    const destinos = new Set(intencion?.enlaces?.map(enlace => enlace.target));
    const resultados = desdeBoton ? [] : buscarContenido(limpio, contenido).filter(resultado => !destinos.has(resultado.url));

    if (intencion?.conversacional) {
      agregar({ deBot: true, texto: intencion.mensaje, opciones: MENU_PRINCIPAL });
      return;
    }
    // "¿Qué es…?" se contesta con la explicación, no con la presentación del sector.
    if (esPreguntaExplicativa(limpio) && resultados.length) {
      setTema(intencion?.label ?? resultados[0].titulo);
      agregar({ deBot: true, texto: "Esto lo explicamos a detalle:", resultados, enlaces: intencion?.enlaces, opciones: TRAS_RESPUESTA });
      return;
    }
    if (intencion) {
      setTema(intencion.label);
      agregar({
        deBot: true, texto: intencion.mensaje, detalles: intencion.detalles, enlaces: intencion.enlaces,
        resultados: resultados.length ? resultados : undefined, opciones: TRAS_RESPUESTA,
      });
      return;
    }
    if (resultados.length) {
      setTema(resultados[0].titulo);
      agregar({ deBot: true, texto: "Esto es lo que encontré en el sitio:", resultados, opciones: TRAS_RESPUESTA });
      return;
    }
    agregar({
      deBot: true,
      texto: "No encontré una respuesta precisa para eso. Un especialista puede revisarlo contigo, o puedes elegir un área:",
      opciones: [HABLAR, "Servicios", "Menú principal"],
    });
  };

  const alEnviarFormulario = (idMensaje: number) => {
    setMensajes(previos => previos.map(mensaje =>
      mensaje.id === idMensaje ? { ...mensaje, formularioEnviado: true, texto: "**Solicitud enviada.**" } : mensaje
    ));
    agregar({
      deBot: true,
      texto: "Un especialista se pondrá en contacto contigo en un estimado de **24 a 48 horas**.\n\nEl tiempo puede variar según la complejidad técnica del caso y la disponibilidad del especialista asignado.",
      opciones: ["Menú principal"],
    });
  };

  const enviarEntrada = (event: FormEvent) => {
    event.preventDefault();
    responder(entrada);
  };

  const transicion = sinMovimiento ? { duration: 0 } : { duration: 0.22, ease: [0.22, 0.61, 0.36, 1] as const };

  if (!visible) return null;

  return (
    <>
      {/* ── Panel ── */}
      <AnimatePresence>
        {abierto && (
          <motion.div
            id="asistente-apen"
            role="dialog"
            aria-modal="false"
            aria-labelledby={tituloId}
            initial={sinMovimiento ? false : { opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={sinMovimiento ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            transition={transicion}
            className="fixed inset-x-3 bottom-[calc(5.5rem_+_var(--aviso-cookies,0px))] z-[50000] flex h-[min(640px,calc(100dvh_-_7rem_-_var(--aviso-cookies,0px)))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_60px_rgba(11,35,65,0.28)] sm:inset-x-auto sm:right-5 sm:w-[400px] md:bottom-[calc(7rem_+_var(--aviso-cookies,0px))] md:right-10 md:h-[min(640px,calc(100dvh_-_9rem_-_var(--aviso-cookies,0px)))]"
          >
            {/* Encabezado con el degradado del sitio */}
            <div className="relative shrink-0 bg-[#0b2341] px-4 pb-4 pt-5">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#b3e9ff] to-[#168fd0]" />
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/15 bg-white/10">
                  <Image src="/visual/imagenes/bot.webp" alt="" width={40} height={40} className="h-full w-full object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 id={tituloId} className="text-[15px] font-bold leading-tight text-white">Asistente APEN</h2>
                  <p className="mt-0.5 text-[12px] font-medium text-[#b3e9ff]">Orientación técnica y regulatoria</p>
                </div>
                <button type="button" onClick={reiniciar} aria-label="Reiniciar conversación" title="Reiniciar conversación"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b3e9ff]">
                  <RotateCcw size={17} aria-hidden="true" />
                </button>
                <button type="button" onClick={() => cerrar()} aria-label="Cerrar asistente"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b3e9ff]">
                  <X size={19} aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Conversación */}
            <div ref={registro} role="log" aria-live="polite" aria-relevant="additions" aria-label="Conversación con el asistente"
              className="flex-1 space-y-4 overflow-y-auto overscroll-contain bg-slate-50 px-4 py-5">
              {mensajes.map(mensaje => (
                <div key={mensaje.id} className={`flex w-full ${mensaje.deBot ? "justify-start" : "justify-end"}`}>
                  <div className={`flex max-w-[92%] flex-col gap-2.5 ${mensaje.deBot ? "items-start" : "items-end"}`}>

                    <div className={`rounded-2xl px-4 py-3 text-[14px] leading-relaxed shadow-sm ${mensaje.deBot
                      ? "rounded-tl-md border border-slate-200 bg-white text-slate-700"
                      : "rounded-tr-md bg-[#0b2341] text-white"}`}>
                      <TextoEnriquecido texto={mensaje.texto} oscuro={!mensaje.deBot} />
                    </div>

                    {mensaje.detalles && (
                      <ul className="w-full space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                        {mensaje.detalles.map(detalle => (
                          <li key={detalle.t} className="flex gap-2.5">
                            <CheckCircle2 size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-[#0075b6]" />
                            <div>
                              <p className="text-[13px] font-bold text-[#0b2341]">{detalle.t}</p>
                              <p className="mt-0.5 text-[13px] leading-relaxed text-slate-600">{detalle.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}

                    {mensaje.enlaces && (
                      <div className="flex w-full flex-col gap-2">
                        {mensaje.enlaces.map(enlace => (
                          <BotonEnlace key={enlace.target} onClick={() => navegar(enlace.target)}>{enlace.label}</BotonEnlace>
                        ))}
                      </div>
                    )}

                    {mensaje.resultados && (
                      <div className="w-full">
                        {mensaje.detalles && <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">Relacionado en el sitio</p>}
                        <div className="flex flex-col gap-2">
                          {mensaje.resultados.map(resultado => (
                            <button key={resultado.url} type="button" onClick={() => navegar(resultado.url)}
                              className="group w-full rounded-xl border border-slate-200 bg-white p-3.5 text-left shadow-sm transition-colors hover:border-[#79b7da] hover:bg-[#f0f8fd] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0075b6]">
                              <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] ${resultado.tipo === "ficha"
                                ? "bg-[#e6f4fb] text-[#005f96]" : "bg-slate-100 text-slate-600"}`}>
                                {resultado.tipo === "ficha" ? "Energy Explica" : "Servicio"}
                              </span>
                              <span className="mt-1.5 flex items-start justify-between gap-2">
                                <span className="text-[14px] font-bold leading-snug text-[#0b2341]">{resultado.titulo}</span>
                                <ArrowUpRight size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-[#0075b6] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                              </span>
                              <span className="mt-1 line-clamp-2 block text-[12.5px] leading-relaxed text-slate-600">{resultado.resumen}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {mensaje.formulario && !mensaje.formularioEnviado && (
                      <FormularioContacto tema={tema} pagina={pagina} onEnviado={() => alEnviarFormulario(mensaje.id)} />
                    )}

                    {mensaje.opciones && (
                      <div className="flex flex-wrap gap-2">
                        {mensaje.opciones.map(opcion => (
                          <button key={opcion} type="button" onClick={() => responder(opcion, true)} disabled={escribiendo}
                            className={`rounded-full border px-3.5 py-2 text-[13px] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0075b6] disabled:opacity-50 ${opcion === HABLAR
                              ? "border-[#0b2341] bg-[#0b2341] text-white hover:bg-[#0075b6] hover:border-[#0075b6]"
                              : "border-slate-300 bg-white text-slate-700 hover:border-[#0075b6] hover:text-[#0075b6]"}`}>
                            {opcion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {escribiendo && <Escribiendo sinMovimiento={sinMovimiento} />}
            </div>

            {/* Entrada */}
            <form onSubmit={enviarEntrada} className="flex shrink-0 gap-2 border-t border-slate-200 bg-white p-3">
              <input ref={campoEntrada} type="text" value={entrada} maxLength={500}
                onChange={event => setEntrada(event.target.value)}
                placeholder="Escribe tu pregunta…" aria-label="Escribe tu pregunta al asistente"
                className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-[14px] text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-[#0075b6] focus:ring-2 focus:ring-[#0075b6]/20" />
              <button type="submit" aria-label="Enviar mensaje" disabled={!entrada.trim() || escribiendo}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0b2341] text-white transition-colors hover:bg-[#0075b6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0075b6] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-300">
                <Send size={17} aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Botón flotante e invitación ── */}
      <div className="fixed bottom-[calc(1.25rem_+_var(--aviso-cookies,0px))] right-5 z-[50000] transition-[bottom] duration-300 ease-out motion-reduce:transition-none md:bottom-[calc(2.5rem_+_var(--aviso-cookies,0px))] md:right-10">
        <AnimatePresence>
          {mostrarInvitacion && !abierto && (
            <motion.div
              role="status"
              initial={sinMovimiento ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={transicion}
              className="pointer-events-none absolute bottom-[4.5rem] right-0 w-max max-w-[240px] rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-lg"
            >
              <span className="text-[13px] font-semibold text-[#0b2341]">¿Tienes una duda? Pregúntame</span>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          ref={disparador}
          type="button"
          onClick={() => (abierto ? cerrar() : abrir())}
          aria-expanded={abierto}
          aria-controls={abierto ? "asistente-apen" : undefined}
          aria-label={abierto ? "Cerrar asistente de APEN" : "Abrir asistente de APEN"}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#168fd0] to-[#0b5d95] text-white shadow-[0_10px_28px_rgba(11,93,149,0.45)] transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#168fd0]/40 motion-reduce:transition-none motion-reduce:hover:scale-100"
        >
          {abierto ? <X size={24} aria-hidden="true" /> : <MessageSquare size={24} aria-hidden="true" />}
        </button>
      </div>
    </>
  );
}

function BotonEnlace({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick}
      className="group flex w-full items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-[13px] font-bold text-[#0075b6] shadow-sm transition-colors hover:border-[#79b7da] hover:bg-[#f0f8fd] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0075b6]">
      {children}
      <ArrowRight size={16} aria-hidden="true" className="shrink-0 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
    </button>
  );
}
