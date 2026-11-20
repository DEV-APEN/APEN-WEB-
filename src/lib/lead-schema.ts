export type LeadFormSource = "contacto" | "diagnostico" | "chat";
export const commercialIntents = ["comprar_coque", "ofrecer_coque", "logistica_coque", "otro"] as const;

export function leadSource(payload: Record<string, string>): LeadFormSource {
  const source = payload.origen_formulario;
  if (source === "contacto" || source === "diagnostico" || source === "chat") return source;
  const subject = (payload.subject ?? "").toLowerCase();
  if (subject.includes("chat bot")) return "chat";
  return subject.includes("diagnóstico") || subject.includes("diagnostico") ? "diagnostico" : "contacto";
}

export function normalizeLead(payload: Record<string, string>): Record<string, string> {
  const source = leadSource(payload);
  const normalized = {
    ...payload,
    origen_formulario: source,
    nombre: (payload.nombre || payload.name || payload["nombre-empresa"] || "").trim(),
    empresa: (payload.empresa || payload["nombre-empresa"] || "").trim(),
    email: (payload.email || "").trim(),
    telefono: (payload.telefono || payload.phone || "").trim(),
    mensaje: (payload.mensaje || payload.message || "").trim(),
    servicio_id: (payload.servicio_id || payload["servicio-id"] || "").trim(),
    pagina_envio: payload.pagina_envio || payload.pagina || "",
    estado_seguimiento: "nuevo",
    from_name: source === "chat" ? "APEN Asistente" : source === "diagnostico" ? "APEN Diagnóstico" : "APEN Formulario de contacto",
  };
  return normalized;
}

export function leadValidationError(payload: Record<string, string>): string | undefined {
  if (!payload.nombre && !payload.empresa) return "Indica tu nombre o empresa.";
  if (!payload.email && !payload.telefono) return "Indica un correo o teléfono de contacto.";
  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) return "Revisa el correo de contacto.";
  if (payload.telefono && payload.telefono.replace(/\D/g, "").length < 7) return "Revisa el teléfono de contacto.";
  if (!payload.mensaje) return "Describe brevemente tu solicitud.";
  if (payload.version_captacion === "2" && payload.servicio_id === "H54" && !commercialIntents.some(intent => intent === payload.motivo_comercial)) {
    return "Selecciona si deseas comprar coque, ofrecer material, solicitar logística u otra consulta.";
  }
}
