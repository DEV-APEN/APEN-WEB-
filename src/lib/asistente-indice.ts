import { consultations } from "@/data/consultas";
import { getServiceCategory, serviceHref, services } from "@/data/services";
import { getServiceArea } from "@/data/service-areas";
import type { EntradaIndice } from "./asistente";

/**
 * Índice ligero del contenido del sitio para el asistente: los 125 servicios y
 * las fichas revisadas de Energy Explica. Se sirve como JSON estático desde
 * /api/asistente/indice para no meter todo el texto en el bundle del chat.
 */
export function construirIndice(): EntradaIndice[] {
  const servicios: EntradaIndice[] = services.map(service => ({
    tipo: "servicio",
    titulo: service.title,
    url: serviceHref(service),
    resumen: service.summary,
    claves: [getServiceCategory(service).title, getServiceArea(service.area)!.title],
  }));

  const fichas: EntradaIndice[] = consultations
    .filter(consultation => consultation.revisado)
    .map(consultation => ({
      tipo: "ficha",
      titulo: consultation.shortTitle,
      url: `/consultas/${consultation.slug}`,
      resumen: consultation.extract,
      claves: consultation.keywords,
    }));

  return [...servicios, ...fichas];
}
