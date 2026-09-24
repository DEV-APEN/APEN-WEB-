import { Droplets, HardHat, Landmark, Scale, ShieldCheck, Zap, type LucideIcon } from "lucide-react";
import type { ServiceAreaId, ServiceKind } from "./service-areas";

/**
 * Iconografía compartida del catálogo. Vive aquí para que el menú del header y
 * las páginas de servicio usen el mismo icono para el mismo concepto.
 */
export const sectorIcons: Record<ServiceAreaId, LucideIcon> = {
  hidrocarburos: Droplets,
  energia: Zap,
  legal: Scale,
  "financiamiento-de-proyectos": Landmark,
};

export const kindIcons: Record<ServiceKind, LucideIcon> = {
  regulatorio: ShieldCheck,
  ejecucion: HardHat,
  legal: Scale,
  financiamiento: Landmark,
  comercial: Droplets,
};
