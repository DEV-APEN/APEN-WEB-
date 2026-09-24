import { consultations, getConsultation } from "@/data/consultas";
import { services, serviceHref, getService } from "@/data/services";
import { serviceAreas } from "@/data/service-areas";

export const SITE_URL = "https://apen.mx";

/**
 * Rutas en inglés / variantes históricas que los agentes suelen probar.
 * Se resuelven al equivalente canónico en español.
 */
export const PATH_ALIASES: Record<string, string> = {
  "/capacidad-ejecutiva": "/servicios",
  "/servicios/project-finance": "/servicios/financiamiento-de-proyectos",
  "/about": "/nosotros",
  "/about-us": "/nosotros",
  "/sobre-nosotros": "/nosotros",
  "/quienes-somos": "/nosotros",
  "/contact": "/contacto",
  "/contact-us": "/contacto",
  "/privacy": "/politica-de-privacidad",
  "/privacy-policy": "/politica-de-privacidad",
  "/aviso-de-privacidad": "/politica-de-privacidad",
  "/terms": "/terminos-y-condiciones",
  "/terms-and-conditions": "/terminos-y-condiciones",
  "/services": "/servicios",
  "/faq": "/faqs",
  "/pricing": "/diagnostico",
  "/precios": "/diagnostico",
};

const FOOTER = [
  "---",
  "",
  "**APEN — Administradora de Proyectos Energéticos** (Grupo APEN, S.A. de C.V.)",
  "Domicilio corporativo: Av. Miguel Ángel de Quevedo 961, El Rosedal, Coyoacán, Ciudad de México, C.P. 04330, México.",
  "Domicilio fiscal: Av. Coyoacán 644, Del Valle Centro, Benito Juárez, Ciudad de México, C.P. 03100, México.",
  "Contacto: contacto@apen.mx · <https://apen.mx/contacto>",
  "",
  "Índice completo para agentes: <https://apen.mx/llms.txt> · Instrucciones de uso: <https://apen.mx/agent-instructions.md> · Sitemap: <https://apen.mx/sitemap.xml>",
  "",
].join("\n");

type StaticDoc = {
  title: string;
  description: string;
  body: string;
};

const IDENTITY = [
  "- **Nombre legal:** Grupo APEN, S.A. de C.V.",
  "- **Nombre comercial:** APEN — Administradora de Proyectos Energéticos",
  "- **Sector:** consultoría regulatoria energética, ingeniería eléctrica, hidrocarburos y defensa legal técnica en México",
  "- **Constitución:** 24 de julio de 2024",
  "- **Registros:** Padrón CFE 4493015 · Achilles PEMEX 00249023 (vig. nov 2026) · ISO 9001 / 14001 / 45001",
  "- **Cobertura:** Ciudad de México y toda la República Mexicana",
].join("\n");

const STATIC_DOCS: Record<string, StaticDoc> = {
  "/": {
    title: "APEN — Administradora de Proyectos Energéticos",
    description:
      "Consultoría energética regulatoria en México: permisos CNE, cumplimiento ASEA, ingeniería eléctrica hasta 230 kV y defensa legal ante el TFJA.",
    body: [
      "## Qué hace APEN",
      "",
      "APEN es una firma mexicana que resuelve el frente regulatorio, técnico y legal de proyectos de energía e hidrocarburos: tramita permisos ante la CNE, cumple ante ASEA, ejecuta obra eléctrica con Padrón CFE y defiende clausuras y multas ante el TFJA.",
      "",
      "## Identidad",
      "",
      IDENTITY,
      "",
      "## Unidades de negocio",
      "",
      "1. **Hidrocarburos — ASEA / CNE / SENER** (<https://apen.mx/servicios/hidrocarburos>): permisos de expendio de petrolíferos, gasolineras, gas LP, almacenamiento y distribución; SASISOPA, MIA, Informe Preventivo, Estudio de Riesgo Ambiental, RENAGAS/PRONAGAS, controles volumétricos.",
      "2. **Sector eléctrico — CNE / CENACE / CFE** (<https://apen.mx/servicios/energia>): permisos de generación, autoconsumo interconectado, comercialización, interconexión y acceso al MEM, Código de Red 2.0, CELs, subestaciones y líneas hasta 230 kV.",
      "3. **Financiamiento de proyectos energéticos** (<https://apen.mx/servicios/financiamiento-de-proyectos>): modelación financiera, SPVs, levantamiento de capital equity & debt, due diligence técnico-financiero, fondeo NAFIN / Bancomext.",
      "4. **Defensa legal técnica** (<https://apen.mx/servicios/legal>): levantamiento de clausuras ASEA, afirmativa ficta, PAS, demandas de nulidad ante el TFJA y juicio de amparo.",
      "",
      "## Para quién es",
      "",
      "Estaciones de servicio y gasolineras, distribuidores y plantas de gas LP, terminales de almacenamiento, desarrolladores de generación y autoconsumo, industria con centros de carga, fondos e inversionistas de infraestructura energética y proveedores de CFE y PEMEX.",
      "",
      "## Cómo empezar",
      "",
      "- Diagnóstico regulatorio sin costo con ruta de ejecución en 24 horas: <https://apen.mx/diagnostico>",
      "- Contacto directo: contacto@apen.mx · <https://apen.mx/contacto>",
      "- Fichas técnicas (Energy Explica): <https://apen.mx/consultas>",
    ].join("\n"),
  },
  "/nosotros": {
    title: "Nosotros — Grupo APEN, S.A. de C.V.",
    description:
      "Firma mexicana de consultoría regulatoria energética que representa a empresarios del sector ante ASEA, CNE y SENER.",
    body: [
      "## Quiénes somos",
      "",
      "Grupo APEN, S.A. de C.V. es una firma mexicana de consultoría regulatoria energética constituida el 24 de julio de 2024, con domicilio en Coyoacán, Ciudad de México, y operación en toda la República Mexicana. Representamos a empresarios y desarrolladores del sector energético ante la ASEA, la CNE, la SENER, el CENACE y la CFE, y litigamos ante el TFJA cuando el expediente administrativo ya no basta.",
      "",
      "## Identidad",
      "",
      IDENTITY,
      "",
      "## Trayectoria",
      "",
      "- Más de 3,000 trámites regulatorios resueltos.",
      "- Más de 500 juicios ganados en materia administrativa y energética.",
      "- Más de 200 autorizaciones ASEA gestionadas por afirmativa ficta.",
      "- Proveedor registrado en el Padrón CFE (4493015) y en Achilles PEMEX (00249023).",
      "- Sistemas de gestión certificados bajo ISO 9001 (calidad), ISO 14001 (ambiental) e ISO 45001 (seguridad y salud).",
      "",
      "## Cómo trabajamos",
      "",
      "Cada proyecto se aborda con un equipo mixto: ingeniería para el dictamen técnico, área regulatoria para el expediente ante la autoridad y área legal para la defensa. Ese cruce es lo que permite que la misma firma que obtiene el permiso pueda ejecutar la obra (<https://apen.mx/servicios>) y sostener la defensa si la autoridad sanciona.",
      "",
      "## Desambiguación",
      "",
      "APEN (apen.mx) es una empresa privada del sector energético industrial. No tiene relación con la Alianza Pro Evangelización del Niño ni con ninguna organización religiosa, educativa o de beneficencia.",
    ].join("\n"),
  },
  "/certificaciones": {
    title: "Certificaciones y registros",
    description: "ISO 9001, ISO 14001, ISO 45001, Padrón CFE 4493015 y Achilles PEMEX 00249023.",
    body: [
      "## Certificaciones y registros verificables",
      "",
      "| Registro | Identificador | Vigencia |",
      "|---|---|---|",
      "| Padrón CFE (proveedor) | 4493015 | Activo |",
      "| Achilles PEMEX | 00249023 | Nov 2026 |",
      "| ISO 9001 — Gestión de calidad | — | Vigente |",
      "| ISO 14001 — Gestión ambiental | — | Vigente |",
      "| ISO 45001 — Seguridad y salud | — | Vigente |",
      "",
      "Los certificados están disponibles para consulta en <https://apen.mx/certificaciones>.",
    ].join("\n"),
  },
  "/diagnostico": {
    title: "Diagnóstico regulatorio sin costo",
    description:
      "Evaluación de viabilidad regulatoria ante CNE, ASEA y CFE con ruta de ejecución en 24 horas.",
    body: [
      "## Diagnóstico de proyecto energético",
      "",
      "APEN evalúa sin costo la viabilidad regulatoria de un proyecto —permiso de generación, autoconsumo, expendio de petrolíferos, gas LP, cumplimiento SASISOPA, levantamiento de clausura o ingeniería eléctrica— y entrega una ruta de ejecución en 24 horas.",
      "",
      "**Qué necesita el equipo para diagnosticar:** ubicación del predio, actividad y capacidad del proyecto, permisos o resoluciones previas con su estatus, y si existe algún acto de autoridad en curso (visita, clausura, PAS o requerimiento).",
      "",
      "Solicitud: <https://apen.mx/diagnostico> · contacto@apen.mx",
      "",
      "**Nota sobre precios:** APEN no publica tarifas fijas. El honorario depende del alcance regulatorio, técnico y legal de cada expediente y se cotiza tras el diagnóstico.",
    ].join("\n"),
  },
  "/contacto": {
    title: "Contacto",
    description: "Consultoría directa con especialistas de APEN. Respuesta técnica en 24 horas.",
    body: [
      "## Contacto",
      "",
      "- **Correo:** contacto@apen.mx",
      "- **Domicilio corporativo:** Av. Miguel Ángel de Quevedo 961, El Rosedal, Coyoacán, Ciudad de México, C.P. 04330, México",
      "- **Domicilio fiscal:** Av. Coyoacán 644, Del Valle Centro, Benito Juárez, Ciudad de México, C.P. 03100, México",
      "- **Cobertura:** Ciudad de México y toda la República Mexicana",
      "- **Horario de atención:** lunes a viernes, 9:00 a 18:00 (hora del centro de México)",
      "- **Idioma de atención:** español",
      "- **Formulario:** <https://apen.mx/contacto>",
      "- **Diagnóstico sin costo:** <https://apen.mx/diagnostico>",
      "",
      "El equipo responde consultas técnicas en un plazo de 24 horas hábiles. Para atender una clausura, una visita de verificación o un requerimiento con plazo corriendo, conviene indicarlo en el primer mensaje junto con la fecha de notificación.",
    ].join("\n"),
  },
  "/faqs": {
    title: "Preguntas frecuentes",
    description:
      "Permisos CNE, clausuras ASEA, afirmativa ficta, SASISOPA, padrón CFE, project finance y defensa ante el TFJA.",
    body: [
      "## Preguntas frecuentes",
      "",
      "El catálogo completo de preguntas y respuestas está en <https://apen.mx/faqs> y cubre, entre otros temas: cuándo se requiere permiso de generación, cómo se levanta una clausura ASEA, qué es la afirmativa ficta, para quién es obligatorio el SASISOPA, cómo se ingresa al Padrón CFE, qué exige el timbrado de hidrocarburos y qué vías proceden contra una multa o resolución de la CNE.",
      "",
      "Para respuestas ampliadas por tema, consulta las fichas de Energy Explica: <https://apen.mx/consultas>.",
    ].join("\n"),
  },
  "/consultas": {
    title: "Energy Explica — Fichas técnicas de regulación energética",
    description:
      "Índice de fichas sobre ASEA, CNE, SENER, CENACE y regulación energética mexicana.",
    body: [
      "## Energy Explica",
      "",
      "Índice de fichas técnicas sobre regulación energética mexicana: permisos, cumplimiento, defensa y financiamiento. Cada ficha responde una pregunta operativa concreta y cita la normatividad aplicable.",
    ].join("\n"),
  },
  "/politica-de-privacidad": {
    title: "Política de privacidad",
    description: "Aviso de privacidad de Grupo APEN, S.A. de C.V.",
    body: [
      "## Política de privacidad",
      "",
      "Grupo APEN, S.A. de C.V., con domicilio en Av. Miguel Ángel de Quevedo 961, El Rosedal, Coyoacán, Ciudad de México, C.P. 04330, es responsable del tratamiento de los datos personales recabados a través de apen.mx, en términos de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
      "",
      "- **Datos que se recaban:** nombre, correo electrónico, teléfono, empresa y la información del proyecto que la persona usuaria decida compartir en los formularios de contacto y diagnóstico.",
      "- **Finalidades:** atender solicitudes de consultoría, elaborar diagnósticos y propuestas, dar seguimiento comercial y cumplir obligaciones legales y contractuales.",
      "- **Transferencias:** APEN no vende ni comercializa datos personales. Sólo se comparten con autoridades cuando la ley lo exige o con terceros necesarios para la prestación del servicio contratado.",
      "- **Derechos ARCO:** acceso, rectificación, cancelación y oposición pueden ejercerse escribiendo a contacto@apen.mx.",
      "- **Cookies y analítica:** el sitio utiliza cookies propias y de terceros para medición y mejora de la experiencia; su uso se gestiona desde el aviso de consentimiento del sitio.",
      "",
      "El texto vigente y completo se publica en <https://apen.mx/politica-de-privacidad>.",
    ].join("\n"),
  },
  "/terminos-y-condiciones": {
    title: "Términos y condiciones",
    description: "Condiciones de uso del sitio apen.mx.",
    body: [
      "## Términos y condiciones",
      "",
      "El uso de apen.mx implica la aceptación de las condiciones publicadas en <https://apen.mx/terminos-y-condiciones>. El contenido del sitio —incluidas las fichas de Energy Explica— tiene fines informativos y no constituye asesoría legal, regulatoria o financiera aplicable a un caso concreto; cada proyecto requiere análisis particular. Los contenidos, marcas y materiales son propiedad de Grupo APEN, S.A. de C.V. o se usan con autorización.",
    ].join("\n"),
  },
};

function docToMarkdown(path: string, doc: StaticDoc, extra?: string): string {
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;
  const parts = [
    `# ${doc.title}`,
    "",
    `> ${doc.description}`,
    "",
    `URL canónica: <${canonical}>`,
    "",
    doc.body,
    "",
  ];
  if (extra) parts.push(extra, "");
  parts.push(FOOTER);
  return parts.join("\n");
}

function consultationsIndexMarkdown(): string {
  return [
    "## Fichas publicadas",
    "",
    ...consultations
      .filter((c) => c.revisado)
      .map((c) => `- [${c.shortTitle}](${SITE_URL}/consultas/${c.slug}) — ${c.extract}`),
  ].join("\n");
}

function consultationMarkdown(slug: string): string | null {
  const c = getConsultation(slug);
  if (!c) return null;

  const lines: string[] = [
    `# ${c.title}`,
    "",
    `> ${c.description}`,
    "",
    `URL canónica: <${SITE_URL}/consultas/${c.slug}>`,
    `Sector: ${c.sector} · Código: ${c.code} · Última actualización: ${c.dateModified}`,
    "",
    "## Respuesta rápida",
    "",
    c.quickAnswer,
    "",
  ];

  if (c.regulatoryRows.length) {
    lines.push("## Marco regulatorio", "", "| Concepto | Detalle |", "|---|---|");
    for (const row of c.regulatoryRows) {
      lines.push(`| ${row.label} | ${row.value} |`);
    }
    lines.push("");
  }

  for (const section of c.sections) {
    lines.push(`## ${section.title}`, "");
    for (const paragraph of section.paragraphs) lines.push(paragraph, "");
    if (section.bullets?.length) {
      for (const bullet of section.bullets) lines.push(`- ${bullet}`);
      lines.push("");
    }
    if (section.table) {
      const cell = (value: string) => value.replace(/\|/g, "\\|");
      lines.push(
        `**${section.table.caption}**`,
        "",
        `| ${section.table.headers.map(cell).join(" | ")} |`,
        `|${section.table.headers.map(() => "---").join("|")}|`
      );
      for (const row of section.table.rows) {
        lines.push(`| ${row.cells.map(cell).join(" | ")} |`);
      }
      lines.push("");
    }
    if (section.note) {
      lines.push(`> **Dato por confirmar:** ${section.note}`, "");
    }
  }

  if (c.faqs.length) {
    lines.push("## Preguntas frecuentes", "");
    for (const faq of c.faqs) {
      lines.push(`### ${faq.question}`, "", faq.answer, "");
    }
  }

  if (c.sources.length) {
    lines.push("## Fuentes oficiales", "");
    for (const source of c.sources) lines.push(`- [${source.label}](${source.url})`);
    lines.push("");
  }

  if (c.related.length) {
    lines.push("## Fichas relacionadas", "");
    for (const rel of c.related) lines.push(`- [${rel.label}](${SITE_URL}${rel.href})`);
    lines.push("");
  }

  lines.push(
    "## Siguiente paso",
    "",
    `${c.finalCta} — Servicio relacionado: [${c.relatedService.label}](${SITE_URL}${c.relatedService.href}) · Diagnóstico sin costo: <${SITE_URL}/diagnostico>`,
    "",
    FOOTER
  );

  return lines.join("\n");
}

export function normalizePath(pathname: string): string {
  let path = pathname.split("?")[0].split("#")[0];
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  if (path === "") path = "/";
  path = path.toLowerCase();
  return PATH_ALIASES[path] ?? path;
}

/** Markdown del 404: le da al agente una ruta de recuperación en vez de un callejón sin salida. */
export function notFoundMarkdown(requestedPath: string): string {
  return [
    "# 404 — Página no encontrada",
    "",
    `> La ruta \`${requestedPath}\` no existe en apen.mx. Estas son las rutas válidas del sitio.`,
    "",
    "## Índices para agentes",
    "",
    "- Mapa completo del sitio: <https://apen.mx/sitemap.xml>",
    "- Ficha de identidad y contenidos: <https://apen.mx/llms.txt>",
    "- Cuándo y cómo usar APEN: <https://apen.mx/agent-instructions.md>",
    "",
    "## Rutas principales",
    "",
    "- Inicio: <https://apen.mx/>",
    "- Servicios: <https://apen.mx/servicios>",
    "- Sector eléctrico: <https://apen.mx/servicios/energia>",
    "- Hidrocarburos: <https://apen.mx/servicios/hidrocarburos>",
    "- Financiamiento de proyectos: <https://apen.mx/servicios/financiamiento-de-proyectos>",
    "- Defensa legal: <https://apen.mx/servicios/legal>",
    "- Nosotros: <https://apen.mx/nosotros>",
    "- Ingeniería y ejecución: <https://apen.mx/servicios>",
    "- Certificaciones: <https://apen.mx/certificaciones>",
    "- Energy Explica (fichas técnicas): <https://apen.mx/consultas>",
    "- Preguntas frecuentes: <https://apen.mx/faqs>",
    "- Diagnóstico sin costo: <https://apen.mx/diagnostico>",
    "- Contacto: <https://apen.mx/contacto>",
    "- Política de privacidad: <https://apen.mx/politica-de-privacidad>",
    "- Términos y condiciones: <https://apen.mx/terminos-y-condiciones>",
    "",
    "> El sitio se publica en español. Las rutas en inglés (`/about`, `/contact`, `/privacy`, `/services`) redirigen a su equivalente en español; no existen prefijos de idioma como `/es/` o `/en/`.",
    "",
    FOOTER,
  ].join("\n");
}

export type MarkdownResult = { status: 200 | 404; body: string };

export function getMarkdownForPath(pathname: string): MarkdownResult {
  const path = normalizePath(pathname);
  if (path === "/servicios" || serviceAreas.some(a => path === "/servicios/" + a.id)) {
    const area = serviceAreas.find(a => path === "/servicios/" + a.id);
    const entries = area ? services.filter(s => s.area === area.id) : services;
    const lines = ["# " + (area?.title || "Servicios APEN"), "", "URL canónica: <" + SITE_URL + path + ">", "", area?.description || "Cumplimiento regulatorio, ingeniería, defensa legal, financiamiento y comercialización.", "", ...entries.map(s => "- [" + s.title + "](" + SITE_URL + serviceHref(s) + "): " + s.summary), "", FOOTER];
    return { status: 200, body: lines.join("\n") };
  }
  const serviceMatch = path.match(/^\/servicios\/([^/]+)\/([^/]+)$/);
  if (serviceMatch) {
    const service = getService(serviceMatch[1], serviceMatch[2]);
    if (service) return { status: 200, body: [
      "# " + service.title, "", "URL canónica: <" + SITE_URL + serviceHref(service) + ">", "", service.summary, "", "## Información para iniciar", "",
      ...service.inputs.map(input => "- " + input), "", "## Entregables", "", service.deliverable, "",
      "El alcance, costo y calendario se acuerdan en la propuesta. La ficha no garantiza decisiones de autoridades o terceros.", "",
      "Contacto: <" + SITE_URL + "/contacto?servicio=" + service.id + ">", "", FOOTER
    ].join("\n") };
  }

  if (path === "/consultas") {
    return {
      status: 200,
      body: docToMarkdown(path, STATIC_DOCS[path], consultationsIndexMarkdown()),
    };
  }

  const staticDoc = STATIC_DOCS[path];
  if (staticDoc) return { status: 200, body: docToMarkdown(path, staticDoc) };

  if (path.startsWith("/consultas/")) {
    const slug = path.slice("/consultas/".length);
    const body = consultationMarkdown(slug);
    if (body) return { status: 200, body };
  }

  return { status: 404, body: notFoundMarkdown(pathname) };
}

/** Rutas con variante markdown — usado por el script de verificación. */
export function markdownRoutes(): string[] {
  return Array.from(new Set([
    ...Object.keys(STATIC_DOCS).map(normalizePath),
    ...serviceAreas.map(a => "/servicios/" + a.id),
    ...services.map(serviceHref),
    ...consultations.filter((c) => c.revisado).map((c) => `/consultas/${c.slug}`),
  ]));
}
