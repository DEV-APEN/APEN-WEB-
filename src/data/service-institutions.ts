import type { Service } from "./services";

export type ServiceInstitution = { name: string; logo: string; url: string };

export const serviceInstitutions: Record<string, ServiceInstitution> = {
  asea: { name: "ASEA", logo: "/visual/logos/asea.webp", url: "https://www.gob.mx/asea" },
  cne: { name: "CNE", logo: "/visual/logos/cne.webp", url: "https://www.gob.mx/cne" },
  sener: { name: "SENER", logo: "/visual/logos/sener.webp", url: "https://www.gob.mx/sener" },
  sat: { name: "SAT", logo: "/visual/logos/sat.svg", url: "https://www.sat.gob.mx/" },
  achilles: { name: "Achilles", logo: "/visual/logos/achilles.webp", url: "https://www.achilles.com/es/" },
  cfe: { name: "CFE", logo: "/visual/logos/cfe.svg", url: "https://www.cfe.mx/" },
  cenace: { name: "CENACE", logo: "/visual/logos/cenace.png", url: "https://www.gob.mx/cenace" },
  pemex: { name: "PEMEX", logo: "/visual/logos/pemex.svg", url: "https://www.pemex.com/" },
};

/**
 * Instituciones que aparecen en un sector: la unión de las de sus servicios,
 * sin repetir y en el orden en que surgen del catálogo.
 */
export function getAreaInstitutions(services: Service[]): ServiceInstitution[] {
  const vistas = new Set<string>();
  const lista: ServiceInstitution[] = [];
  for (const service of services) {
    for (const institution of getServiceInstitutions(service)) {
      if (vistas.has(institution.name)) continue;
      vistas.add(institution.name);
      lista.push(institution);
    }
  }
  return lista;
}

export function getServiceInstitutions(service: Service): ServiceInstitution[] {
  let keys: string[] = [];
  if (service.category === "cumplimiento-asea") keys = ["asea"];
  else if (service.category === "permisos-cne") keys = ["cne"];
  else if (service.category === "impacto-social") keys = ["sener"];
  else if (service.category === "control-volumetrico") keys = ["sat", "cne"];
  else if (service.category === "proveedores") keys = ["achilles", "pemex"];
  else if (service.area === "hidrocarburos") keys = ["pemex"];
  else if (service.area === "energia" && service.category === "cumplimiento-regulatorio") keys = ["cne", "cenace", "cfe"];
  else if (service.area === "energia") keys = ["cfe"];
  else if (service.area === "legal") keys = ["asea", "cne", "sener"];
  return keys.map(key => serviceInstitutions[key]);
}
