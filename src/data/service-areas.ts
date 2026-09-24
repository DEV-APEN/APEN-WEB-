export type ServiceAreaId = "hidrocarburos" | "energia" | "legal" | "financiamiento-de-proyectos";
export type ServiceKind = "regulatorio" | "ejecucion" | "legal" | "financiamiento" | "comercial";
export type ServiceCategory = { id: string; title: string; kind: ServiceKind };
export type ServiceArea = {
  id: ServiceAreaId; title: string; navTitle: string; description: string;
  image: string; imageAlt: string; accent: string; categories: ServiceCategory[];
  headerImage: string;
};
export const serviceAreas: ServiceArea[] = [
  {
    id: "hidrocarburos", title: "Sector Hidrocarburos", navTitle: "Hidrocarburos",
    headerImage: "/visual/servicios/hidrocarburos-header.webp",
    description: "Permisos, cumplimiento ambiental, ingeniería y comercialización de coque de petróleo para la cadena de valor de los hidrocarburos.",
    image: "/visual/imagenes/hidro.webp", imageAlt: "Instalaciones de extracción de hidrocarburos", accent: "#0076b8",
    categories: [
      { id: "cumplimiento-asea", title: "Cumplimiento ASEA", kind: "regulatorio" },
      { id: "permisos-cne", title: "Permisos y obligaciones CNE", kind: "regulatorio" },
      { id: "impacto-social", title: "Impacto social y comercio exterior", kind: "regulatorio" },
      { id: "control-volumetrico", title: "Control volumétrico y facturación", kind: "regulatorio" },
      { id: "ingenieria-y-ejecucion", title: "Ingeniería y proyectos PEMEX", kind: "ejecucion" },
      { id: "proveedores", title: "Registros de proveedores", kind: "regulatorio" },
      { id: "coque-de-petroleo", title: "Coque de petróleo (petcoke)", kind: "comercial" },
    ],
  },
  {
    id: "energia", title: "Sector Eléctrico", navTitle: "Sector eléctrico",
    headerImage: "/visual/servicios/energia-header.webp",
    description: "Gestión regulatoria, acceso a la red, ingeniería, construcción y mantenimiento de infraestructura eléctrica.",
    image: "/visual/imagenes/ener.webp", imageAlt: "Parque de generación eólica", accent: "#a05b00",
    categories: [
      { id: "cumplimiento-regulatorio", title: "Cumplimiento regulatorio y mercado", kind: "regulatorio" },
      { id: "ingenieria-y-ejecucion", title: "Ingeniería y ejecución", kind: "ejecucion" },
      { id: "mantenimiento-y-pruebas", title: "Mantenimiento y pruebas", kind: "ejecucion" },
    ],
  },
  {
    id: "legal", title: "Defensa Legal", navTitle: "Defensa legal",
    headerImage: "/visual/servicios/legal-header.webp",
    description: "Defensa jurídica y regularización técnica para proyectos de hidrocarburos y electricidad ante actos de autoridad.",
    image: "/visual/imagenes/legal.webp", imageAlt: "Balanza y figura de la justicia", accent: "#b42318",
    categories: [{ id: "defensa-y-regularizacion", title: "Defensa y regularización", kind: "legal" }],
  },
  {
    id: "financiamiento-de-proyectos", title: "Financiamiento de proyectos", navTitle: "Financiamiento",
    headerImage: "/visual/servicios/financiamiento-header.webp",
    description: "Estructuración de capital, evaluación de proyectos, vinculación con fuentes de fondeo y gestión de garantías.",
    image: "/visual/imagenes/project-finance.webp", imageAlt: "Equipo revisando información financiera de un proyecto", accent: "#08765d",
    categories: [
      { id: "estructuracion", title: "Estructuración financiera", kind: "financiamiento" },
      { id: "fondeo", title: "Fondeo y vinculación", kind: "financiamiento" },
      { id: "evaluacion", title: "Evaluación técnica y financiera", kind: "financiamiento" },
      { id: "garantias", title: "Garantías y protección del capital", kind: "financiamiento" },
    ],
  },
];
export const serviceKindLabels: Record<ServiceKind, string> = {
  regulatorio: "Cumplimiento regulatorio", ejecucion: "Ingeniería y ejecución",
  legal: "Defensa legal", financiamiento: "Financiamiento", comercial: "Comercialización",
};
export function getServiceArea(id: string) { return serviceAreas.find((area) => area.id === id); }
