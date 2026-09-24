/**
 * Motor del asistente del sitio: intenciones curadas + búsqueda en el
 * contenido real (fichas de servicio y Energy Explica).
 *
 * Es lógica pura, sin React ni datos pesados, para poder verificarla con
 * scripts/verify-assistant.cjs. El índice de contenido se descarga aparte
 * desde /api/asistente/indice cuando la persona abre el chat.
 */

// ─────────────────────────────────────────────
//  NORMALIZACIÓN
// ─────────────────────────────────────────────

/** Minúsculas, sin acentos y con cualquier signo convertido en espacio. */
export function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function tokenizar(texto: string): string[] {
  const limpio = normalizar(texto);
  return limpio ? limpio.split(" ") : [];
}

const PALABRAS_VACIAS = new Set([
  "a", "al", "algo", "como", "con", "cual", "cuales", "de", "del", "donde", "el", "en", "es", "esta",
  "este", "esto", "hay", "la", "las", "lo", "los", "me", "mi", "mis", "necesito", "o", "para", "por",
  "puedo", "que", "quiero", "se", "ser", "si", "sobre", "son", "su", "sus", "tengo", "tienen", "un",
  "una", "unos", "y", "ya", "informacion", "saber", "hacer", "ustedes", "hola", "buenas", "buen", "dia",
]);

// ─────────────────────────────────────────────
//  INTENCIONES CURADAS
// ─────────────────────────────────────────────

/** Una clave es un término (peso 2) o [término, peso] cuando es una señal fuerte. */
type Clave = string | [string, number];

export type Detalle = { t: string; desc: string };
export type Enlace = { label: string; target: string };

export type Intencion = {
  id: string;
  label: string;
  claves: Clave[];
  /** Saludos y agradecimientos: solo responden si ninguna intención de negocio aplica. */
  conversacional?: boolean;
  mensaje: string;
  detalles?: Detalle[];
  enlaces?: Enlace[];
};

export const INTENCIONES: Intencion[] = [
  {
    id: "hidrocarburos",
    label: "Hidrocarburos",
    claves: [
      "hidrocarburo", "hidrocarburos", "gasolina", "gasolinera", "gasolineras", "combustible", "combustibles",
      "estacion de servicio", "estaciones de servicio", "almacenamiento", "distribucion", "ducto", "ductos",
      "gas", "gas lp", "gas natural", "petrolifero", "petroliferos", "diesel", "expendio", "carburacion",
      "ope", "oficialia", ["asea", 3], ["sasisopa", 3], ["mia", 3], "informe preventivo", "nom 003", "nom 005",
      "nom 016", "cne", "cre", "permiso", "permisos", "misse", "evis", "impacto social", "impacto ambiental",
      "riesgo ambiental", "licencia ambiental", "lau", "tanque", "tanques", "autotanque", "autotanques",
      ["renagas", 3], ["pronagas", 3], "seguridad industrial", "control volumetrico", "controles volumetricos",
      "complemento de hidrocarburos", "timbrado",
    ],
    mensaje: "Gestionamos el ciclo normativo completo del sector hidrocarburos, del pre-registro a la operación continua ante **CNE, ASEA y SENER**:",
    detalles: [
      { t: "Permisos CNE y ASEA", desc: "Pre-registro OPE, estaciones de servicio, autoconsumo, carburación, almacenamiento, distribución y comercialización." },
      { t: "Cumplimiento ambiental", desc: "MIA, Informe Preventivo, estudios de riesgo, SASISOPA, NOM-003, NOM-005 y NOM-016-CRE." },
      { t: "Trámites SENER", desc: "MISSE previa a EVIS, permisos de importación y ruta documental para nuevos desarrollos." },
      { t: "Coque de petróleo", desc: "Comercialización directa de petcoke: compra, venta, manejo, importación y exportación." },
    ],
    enlaces: [{ label: "Ver servicios de hidrocarburos", target: "/servicios/hidrocarburos" }],
  },
  {
    id: "electrico",
    label: "Sector Eléctrico",
    claves: [
      "electricidad", "electrico", "electrica", "electricos", "electricas", "subestacion", "subestaciones",
      "tension", "kv", "transformador", "transformadores", "tablero", "tableros", "media tension", "alta tension",
      "linea de transmision", "lineas de transmision", "transmision", "cfe", "padron", "4493015",
      ["interconexion", 3], "mercado electrico", "mercado electrico mayorista", "mem", "generacion",
      "generacion distribuida", "distribucion electrica", "suministro", "suministro electrico", "pycon", "dccsed",
      "dccset", ["codigo de red", 3], "comisionamiento", "commissioning", "licitacion", "licitaciones",
      "ingenieria electrica", "electromecanica", "electromecanico", "obra electrica", ["cenace", 3], "autoconsumo",
      "cogeneracion", "almacenamiento de energia", "baterias", "cels", "energias limpias", "solar", "eolica",
      "eolico", "fotovoltaica", "fotovoltaico", "paneles solares",
    ],
    mensaje: "Ejecutamos infraestructura eléctrica hasta **230 kV** con dirección técnica propia, Padrón CFE No. 4493015 activo y participación en licitaciones:",
    detalles: [
      { t: "Permisos CNE", desc: "Generación, transmisión, distribución, suministro e interconexión al Mercado Eléctrico Mayorista (MEM). Código de Red 2.0." },
      { t: "Ejecución técnica hasta 230 kV", desc: "Subestaciones de potencia de 115 a 230 kV, tableros MT/AT, montaje electromecánico y líneas de transmisión. DCCSED01, DCCSET01, PYCON-SE-01." },
      { t: "Puesta en servicio", desc: "Protocolos FAT/SAT, ajuste de relés de protección, pruebas de energización, verificación SCADA y expediente técnico final." },
      { t: "Licitaciones CFE", desc: "Estructura, seguimiento y participación en licitaciones con Padrón CFE 4493015." },
    ],
    enlaces: [{ label: "Ver servicios del sector eléctrico", target: "/servicios/energia" }],
  },
  {
    id: "legal",
    label: "Defensa Legal",
    claves: [
      "legal", "juridico", "juridica", ["clausura", 4], ["clausuras", 4], ["clausurado", 4], ["clausurada", 4],
      ["clausuraron", 4], ["multa", 3], ["multas", 3], "sancion", "sanciones", "requerimiento", ["nulidad", 3],
      ["tfja", 4], ["amparo", 4], "impugnacion", "impugnar", "recurso de revision", "regularizacion", "regularizar",
      "as built", "levantamiento", "peritaje", "emplazamiento", "defensa", "litigio", "procedimiento administrativo",
      "pas", ["afirmativa ficta", 4], "abogado", "abogados", "demanda",
    ],
    mensaje: "Respondemos ante actos de autoridad con contención jurídica e ingeniería correctiva para proyectos del sector energético en sanción o regularización:",
    detalles: [
      { t: "Contención y defensa jurídica", desc: "Levantamiento de clausuras, demandas de nulidad ante el TFJA, respuesta técnica a emplazamientos y gestión de multas ante ASEA y CNE." },
      { t: "Ingeniería de regularización", desc: "As-Built, levantamientos, diagramas unifilares, integración de expedientes SASISOPA y memorias de cálculo." },
      { t: "Regularización interinstitucional", desc: "Normalización integral ante ASEA, CNE y SENER con cobertura nacional." },
    ],
    enlaces: [{ label: "Ver servicios de defensa legal", target: "/servicios/legal" }],
  },
  {
    id: "financiamiento",
    label: "Financiamiento de proyectos",
    claves: [
      ["project finance", 4], "financiamiento", "financiar", "fondeo", "capital", "inversion", "inversiones",
      "inversor", "inversionista", "inversionistas", "spv", "fideicomiso", "equity", "deuda", ["credito", 3],
      ["creditos", 3], "prestamo", "sindicacion", "due diligence", "valuacion", "rentabilidad", "tir", "vpn",
      "capex", "opex", "garantia", "garantias", "colateral", "fianza", "fianzas", "roadshow",
      "comite de inversion", "fondo", "fondos", "socio estrategico", ["nafin", 3], ["bancomext", 3],
      "banca de desarrollo", "bankabilidad", "vehiculo de proposito especifico", "modelo financiero",
      "modelado financiero",
    ],
    mensaje: "Estructuramos la viabilidad financiera de activos energéticos y conectamos proyectos de infraestructura con fuentes de inversión:",
    detalles: [
      { t: "Estructuración de capital", desc: "Modelado financiero CAPEX/OPEX, sindicación de deuda, créditos puente, SPVs, análisis TIR/VPN y riesgo cambiario." },
      { t: "Fondeo", desc: "Presentación ante comités de inversión, roadshows institucionales y búsqueda de socios estratégicos." },
      { t: "Due diligence técnico", desc: "Valuación de activos, auditoría de viabilidad operativa y análisis de riesgos financieros." },
      { t: "Garantías y protección del capital", desc: "Fianzas técnicas, seguros de infraestructura y colaterales financieros." },
    ],
    enlaces: [{ label: "Ver servicios de financiamiento", target: "/servicios/financiamiento-de-proyectos" }],
  },
  {
    id: "coque",
    label: "Coque de petróleo",
    claves: [
      ["coque", 5], ["petcoke", 5], ["pet coke", 5], ["coque de petroleo", 6], ["petroleum coke", 6],
      ["suministro de coque", 6], ["suministro de petcoke", 6],
    ],
    mensaje: "APEN **compra, vende, maneja, importa y exporta coque de petróleo por cuenta propia**. Estructuramos el suministro según el volumen, destino y perfil de cada operación:",
    detalles: [
      { t: "Comercialización directa", desc: "Compra y venta de petcoke por cuenta propia." },
      { t: "Suministro", desc: "Acceso a suministro PEMEX y a fuentes alternativas de abastecimiento." },
      { t: "Manejo y logística", desc: "Coordinación logística según volumen, destino y frecuencia de entrega." },
      { t: "Para cotizar, compártenos", desc: "Volumen, especificación y uso industrial; origen o destino, frecuencia y condiciones de entrega." },
    ],
    enlaces: [{ label: "Ver ficha de coque de petróleo", target: "/servicios/hidrocarburos/coque-de-petroleo-petcoke" }],
  },
  {
    id: "certificaciones",
    label: "Certificaciones",
    claves: [
      "certificacion", "certificaciones", "certificado", "certificados", ["iso", 3], "iso 9001", "iso 14001",
      "iso 45001", "gestion de calidad", "gestion ambiental", "hseq", ["achilles", 3], "padron cfe", "4493015",
      "00249023", "acreditacion", "acreditaciones", "registro de proveedor", "proveedor pemex", "proveedor cfe",
    ],
    mensaje: "APEN opera bajo estándares internacionales y los registros del sector energético mexicano:",
    detalles: [
      { t: "ISO 9001:2015 · Calidad", desc: "Folio CIE-SGC-044/2026. Estandarización de procesos, trazabilidad técnica y mejora continua." },
      { t: "ISO 14001:2015 · Ambiental", desc: "Folio CIE-SGA-022/2026. Operación sostenible y mitigación de riesgos ambientales." },
      { t: "ISO 45001:2018 · Seguridad y salud", desc: "Folio CIE-SGSST-020/2026. Gestión de la seguridad en entornos de trabajo críticos." },
      { t: "Padrón CFE 4493015", desc: "Proveedor autorizado para infraestructura y proyectos de interconexión CFE." },
      { t: "Achilles PEMEX 00249023", desc: "Registro Extendido Clase A, vigente 2026, con más de 120 categorías habilitadas." },
    ],
    enlaces: [{ label: "Ver certificaciones", target: "/certificaciones" }],
  },
  {
    id: "diagnostico",
    label: "Diagnóstico",
    claves: [
      ["diagnostico", 3], "evaluacion", "viabilidad", ["cotizacion", 3], ["cotizar", 3], "presupuesto", "propuesta",
      ["precio", 3], ["precios", 3], "costo", "costos", ["cuanto cuesta", 4], ["cuanto cobran", 4], "honorarios",
      "asesoria inicial", "primera reunion",
    ],
    mensaje: "Evaluamos **sin costo** la viabilidad técnica y normativa de tu proyecto y te entregamos una ruta de ejecución en 24 horas:",
    detalles: [
      { t: "Qué incluye", desc: "Mapeo de autoridades competentes, estatus regulatorio del proyecto y ruta de ejecución recomendada." },
      { t: "Sobre precios", desc: "No publicamos tarifas fijas: el honorario depende del alcance regulatorio, técnico y legal, y se cotiza después del diagnóstico." },
    ],
    enlaces: [{ label: "Solicitar diagnóstico", target: "/diagnostico" }],
  },
  {
    id: "contacto",
    label: "Contacto",
    claves: [
      "contacto", "contactar", "correo", "email", "mail", "telefono", "whatsapp", "ubicacion", "oficina", "oficinas",
      "hablar", "comunicar", "direccion", "domicilio", "sede", "cdmx", "ciudad de mexico", "formulario", "atencion",
      "horario", "donde estan", "donde se ubican",
    ],
    mensaje: "Puedes escribirle directamente a nuestro equipo técnico o visitarnos en Ciudad de México:",
    detalles: [
      { t: "Correo", desc: "contacto@apen.mx" },
      { t: "Domicilio corporativo", desc: "Av. Miguel Ángel de Quevedo 961, El Rosedal, Coyoacán, C.P. 04330, CDMX." },
      { t: "Domicilio fiscal", desc: "Av. Coyoacán 644, Del Valle Centro, Benito Juárez, C.P. 03100, CDMX." },
      { t: "Horario", desc: "Lunes a viernes, de 9:00 a 18:00 h." },
    ],
    enlaces: [
      { label: "Ir al formulario de contacto", target: "/contacto" },
      { label: "Solicitar diagnóstico", target: "/diagnostico" },
    ],
  },
  {
    id: "saludo",
    label: "Saludo",
    conversacional: true,
    claves: ["hola", "buenas", "buenos dias", "buenas tardes", "buenas noches", "hey", "saludos", "que tal"],
    mensaje: "¡Hola! Soy el asistente de APEN. Cuéntame qué necesita tu proyecto o elige un área:",
  },
  {
    id: "gracias",
    label: "Gracias",
    conversacional: true,
    claves: ["gracias", "muchas gracias", "agradezco", "te agradezco"],
    mensaje: "Con gusto. Si surge otra duda técnica o regulatoria, aquí sigo.",
  },
];

// ─────────────────────────────────────────────
//  PUNTUACIÓN DE INTENCIONES
// ─────────────────────────────────────────────

type ClaveCompilada = { tokens: string[]; peso: number };

function compilarClave(clave: Clave): ClaveCompilada {
  const [termino, pesoBase] = typeof clave === "string" ? [clave, 2] : clave;
  const tokens = tokenizar(termino);
  // Una frase de varias palabras es más específica que una palabra suelta.
  const peso = tokens.length > 1 ? pesoBase + 3 * (tokens.length - 1) : pesoBase;
  return { tokens, peso };
}

/**
 * ¿La clave aparece en la consulta?
 *  - Palabras de 4 letras o menos deben coincidir completas: así "crédito" no
 *    activa "cre", "economía" no activa "mia" y "gastos" no activa "gas".
 *  - Palabras más largas aceptan el plural o una terminación extra
 *    ("certificacion" ↔ "certificaciones").
 *  - Las frases deben aparecer seguidas.
 */
function coincide(clave: ClaveCompilada, consulta: string[]): boolean {
  const { tokens } = clave;
  const encaja = (token: string, palabra: string) =>
    palabra.length <= 4 ? token === palabra : token === palabra || token.startsWith(palabra);

  for (let inicio = 0; inicio + tokens.length <= consulta.length; inicio++) {
    if (tokens.every((palabra, i) => encaja(consulta[inicio + i], palabra))) return true;
  }
  return false;
}

const CLAVES_COMPILADAS = new Map(INTENCIONES.map(intencion => [intencion.id, intencion.claves.map(compilarClave)]));

export type Resultado = { intencion: Intencion; puntaje: number };

export function puntuarIntenciones(consulta: string): Resultado[] {
  const tokens = tokenizar(consulta);
  return INTENCIONES.map(intencion => {
    const claves = CLAVES_COMPILADAS.get(intencion.id)!;
    const puntaje = claves.reduce((total, clave) => total + (coincide(clave, tokens) ? clave.peso : 0), 0);
    return { intencion, puntaje };
  })
    .filter(resultado => resultado.puntaje > 0)
    .sort((a, b) => b.puntaje - a.puntaje);
}

/**
 * Mejor intención para una consulta, o null. Los saludos solo ganan cuando
 * no hay ninguna señal de negocio: "hola, necesito un permiso" es un permiso.
 */
export function mejorIntencion(consulta: string): Intencion | null {
  const exacta = INTENCIONES.find(intencion => !intencion.conversacional && normalizar(intencion.label) === normalizar(consulta));
  if (exacta) return exacta;

  const resultados = puntuarIntenciones(consulta);
  const negocio = resultados.filter(resultado => !resultado.intencion.conversacional);
  if (negocio.length) {
    // Empate entre dos sectores ("permiso de autoconsumo" es eléctrico y de
    // hidrocarburos): elegir uno sería arbitrario, mejor que hable el contenido.
    if (negocio.length > 1 && negocio[0].puntaje === negocio[1].puntaje) return null;
    return negocio[0].intencion;
  }
  return resultados[0]?.intencion ?? null;
}

// ─────────────────────────────────────────────
//  BÚSQUEDA EN EL CONTENIDO DEL SITIO
// ─────────────────────────────────────────────

export type EntradaIndice = {
  tipo: "servicio" | "ficha";
  titulo: string;
  url: string;
  resumen: string;
  claves: string[];
};

export type Coincidencia = EntradaIndice & { puntaje: number };

/**
 * ¿Dos palabras comparten raíz? Funciona en ambos sentidos, así
 * "clausuraron" encuentra "clausura" y "credito" encuentra "creditos".
 * Las palabras de 3 letras o menos exigen coincidencia exacta.
 */
function mismaRaiz(termino: string, palabra: string) {
  if (termino === palabra) return true;
  const corta = Math.min(termino.length, palabra.length);
  if (corta <= 3) return false;
  let comun = 0;
  while (comun < corta && termino[comun] === palabra[comun]) comun++;
  return comun >= Math.max(4, corta - 2);
}

/** Preguntas explicativas: se responden mejor con Energy Explica que con una ficha de venta. */
const PREGUNTA_EXPLICATIVA = /^(que es|que son|como|cuando|por que|para que|cual es|cuales son|cuanto)\b/;

export function esPreguntaExplicativa(consulta: string) {
  return PREGUNTA_EXPLICATIVA.test(normalizar(consulta));
}

/**
 * Busca servicios y fichas de Energy Explica. Exige que algún término aparezca
 * en el título o en las palabras clave: una coincidencia solo en el cuerpo del
 * resumen es demasiado débil para recomendar la página. Descarta además los
 * resultados que quedan muy por debajo del mejor.
 */
export function buscarContenido(consulta: string, indice: EntradaIndice[], limite = 3): Coincidencia[] {
  const terminos = tokenizar(consulta).filter(termino => !PALABRAS_VACIAS.has(termino));
  if (!terminos.length) return [];
  const frase = terminos.join(" ");
  const explicativa = esPreguntaExplicativa(consulta);

  const resultados = indice
    .map(entrada => {
      const titulo = tokenizar(entrada.titulo);
      const claves = entrada.claves.map(normalizar);
      const clavesTokens = claves.flatMap(clave => clave.split(" "));
      const cuerpo = tokenizar(entrada.resumen);

      let puntaje = 0;
      let fuerte = false;
      for (const termino of terminos) {
        if (titulo.some(palabra => mismaRaiz(termino, palabra))) { puntaje += 3; fuerte = true; }
        else if (clavesTokens.some(palabra => mismaRaiz(termino, palabra))) { puntaje += 2; fuerte = true; }
        else if (cuerpo.some(palabra => mismaRaiz(termino, palabra))) puntaje += 1;
      }
      if (terminos.length > 1 && normalizar(entrada.titulo).includes(frase)) puntaje += 5;
      if (terminos.length > 1 && claves.some(clave => clave.includes(frase))) puntaje += 4;
      if (fuerte && explicativa && entrada.tipo === "ficha") puntaje += 2;

      return { ...entrada, puntaje: fuerte ? puntaje : 0 };
    })
    .filter(entrada => entrada.puntaje >= 3);

  if (!resultados.length) return [];
  resultados.sort((a, b) => b.puntaje - a.puntaje || (a.tipo === b.tipo ? 0 : a.tipo === "servicio" ? -1 : 1));
  const minimo = resultados[0].puntaje * 0.6;
  return resultados.filter(entrada => entrada.puntaje >= minimo).slice(0, limite);
}

// ─────────────────────────────────────────────
//  TEXTO ENRIQUECIDO SEGURO
// ─────────────────────────────────────────────

export type Segmento = { texto: string; negrita: boolean };

/**
 * Parte "**negrita**" en segmentos para renderizarlos como nodos de React.
 * Nunca se inyecta HTML: lo que escribe la persona se muestra tal cual.
 */
export function partirNegritas(texto: string): Segmento[] {
  const segmentos: Segmento[] = [];
  const patron = /\*\*(.+?)\*\*/g;
  let ultimo = 0;
  let encontrado: RegExpExecArray | null;
  while ((encontrado = patron.exec(texto))) {
    if (encontrado.index > ultimo) segmentos.push({ texto: texto.slice(ultimo, encontrado.index), negrita: false });
    segmentos.push({ texto: encontrado[1], negrita: true });
    ultimo = encontrado.index + encontrado[0].length;
  }
  if (ultimo < texto.length) segmentos.push({ texto: texto.slice(ultimo), negrita: false });
  return segmentos;
}

// ─────────────────────────────────────────────
//  RESPUESTAS CORTAS
// ─────────────────────────────────────────────

const AFIRMACIONES = new Set(["si", "sip", "claro", "ok", "vale", "va", "dale", "adelante", "por favor", "porfavor", "de acuerdo"]);
const NEGACIONES = new Set(["no", "nop", "despues", "luego", "mas tarde", "no gracias", "ahorita no"]);

export function esAfirmacion(consulta: string) {
  return AFIRMACIONES.has(normalizar(consulta));
}

export function esNegacion(consulta: string) {
  return NEGACIONES.has(normalizar(consulta));
}
