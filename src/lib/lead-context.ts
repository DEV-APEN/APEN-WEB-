import { normalizeLead, type LeadFormSource } from "./lead-schema";

type EntryContext = { pagina_entrada: string; referente_entrada: string; capturedAt: number; utm_source?: string; utm_medium?: string; utm_campaign?: string };
const STORAGE_KEY = "apen-lead-entry-v1";
const MAX_AGE = 30 * 60 * 1000;
let memoryEntry: EntryContext | undefined;
const measuredSubmissions = new Set<string>();
type LeadEvent = { form_source: string; service_id: string; lead_intent: string };
const pendingEvents = new Map<string, LeadEvent>();
let retryTimer: number | undefined;

function hasAnalyticsConsent() {
  try { return window.localStorage.getItem("apen-cookie-consent") === "true"; } catch { return false; }
}

function safePath(value: string) {
  try {
    const path = new URL(value, window.location.origin).pathname;
    return /^\/[a-zA-Z0-9/_-]*$/.test(path) ? path.slice(0, 240) : "/";
  } catch { return "/"; }
}

function campaignValue(value: unknown): string | undefined {
  return typeof value === "string" && /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,99}$/.test(value) ? value : undefined;
}

function storedEntry(value: unknown): EntryContext | undefined {
  if (!value || typeof value !== "object") return undefined;
  const candidate = value as Partial<EntryContext>;
  if (typeof candidate.capturedAt !== "number" || candidate.capturedAt > Date.now() || Date.now() - candidate.capturedAt > MAX_AGE || typeof candidate.pagina_entrada !== "string") return undefined;
  let referrer = "";
  try {
    const parsed = new URL(candidate.referente_entrada || "");
    if (parsed.protocol === "https:" || parsed.protocol === "http:") referrer = parsed.origin;
  } catch { /* Direct visits have no referrer. */ }
  return { pagina_entrada: safePath(candidate.pagina_entrada), referente_entrada: referrer, capturedAt: candidate.capturedAt,
    utm_source: campaignValue(candidate.utm_source), utm_medium: campaignValue(candidate.utm_medium), utm_campaign: campaignValue(candidate.utm_campaign) };
}

export function captureLeadContext(): EntryContext {
  if (typeof window === "undefined") return { pagina_entrada: "/", referente_entrada: "", capturedAt: 0 };
  const consent = hasAnalyticsConsent();
  if (!memoryEntry || Date.now() - memoryEntry.capturedAt > MAX_AGE) {
    let existing: EntryContext | undefined;
    if (consent) {
      try { existing = storedEntry(JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "null")); } catch { /* Storage is optional. */ }
    }
    let referrer = "";
    try {
      const parsed = new URL(document.referrer);
      if ((parsed.protocol === "http:" || parsed.protocol === "https:") && parsed.origin !== window.location.origin) referrer = parsed.origin;
    } catch { /* Direct visits have no referrer. */ }
    const params = new URLSearchParams(window.location.search);
    memoryEntry = existing ?? { pagina_entrada: safePath(window.location.href), referente_entrada: referrer, capturedAt: Date.now(),
      utm_source: campaignValue(params.get("utm_source")), utm_medium: campaignValue(params.get("utm_medium")), utm_campaign: campaignValue(params.get("utm_campaign")) };
  }
  // Without consent the context stays in memory and is never persisted.
  if (consent) {
    try { window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(memoryEntry)); } catch { /* A blocked storage API must not block contact. */ }
  }
  return memoryEntry;
}

export function buildLeadPayload(formData: FormData, options: { source: LeadFormSource; serviceId?: string; topic?: string }): Record<string, string> {
  const fields: Record<string, string> = {};
  formData.forEach((value, key) => { if (typeof value === "string") fields[key] = value; });
  const entry = captureLeadContext();
  const context: Record<string, string> = { pagina_entrada: entry.pagina_entrada, referente_entrada: entry.referente_entrada };
  for (const key of ["utm_source", "utm_medium", "utm_campaign"] as const) if (entry[key]) context[key] = entry[key]!;
  return normalizeLead({ ...fields, ...context, origen_formulario: options.source,
    version_captacion: "2",
    pagina_envio: typeof window === "undefined" ? "/" : safePath(window.location.href),
    servicio_id: options.serviceId || fields.servicio_id || fields["servicio-id"] || "",
    tema: options.topic || fields.tema || "",
    submission_id: globalThis.crypto?.randomUUID?.() ?? `local-${Date.now()}-${Math.random().toString(36).slice(2)}`,
  });
}

function flushLeadEvents(attempt = 0) {
  if (!hasAnalyticsConsent()) { pendingEvents.clear(); return; }
  const analytics = window as Window & { gtag?: (...args: unknown[]) => void };
  if (typeof analytics.gtag === "function") {
    for (const [id, event] of Array.from(pendingEvents.entries())) {
      try {
        analytics.gtag("event", "generate_lead", event);
        measuredSubmissions.add(id);
        pendingEvents.delete(id);
      } catch { /* Keep only categorical data for a bounded retry. */ }
    }
  }
  if (pendingEvents.size && attempt < 10) {
    retryTimer = window.setTimeout(() => { retryTimer = undefined; flushLeadEvents(attempt + 1); }, 1000);
  } else if (attempt >= 10) pendingEvents.clear();
}

export function trackLeadSuccess(payload: Record<string, string>, submissionId = payload.submission_id) {
  if (typeof window === "undefined" || !submissionId || measuredSubmissions.has(submissionId) || !hasAnalyticsConsent()) return;
  // Only allowlisted categorical values reach Analytics, never form text or contact details.
  const source = ["contacto", "diagnostico", "chat"].includes(payload.origen_formulario) ? payload.origen_formulario : "contacto";
  const service = /^(H(?:0[1-9]|[1-4][0-9]|5[0-4])|E(?:0[1-9]|[12][0-9]|3[0-8])|J(?:0[1-9]|1[01])|P(?:0[1-9]|1[0-9]|2[0-2]))$/.test(payload.servicio_id) ? payload.servicio_id : "sin_especificar";
  const intent = ["comprar_coque", "ofrecer_coque", "logistica_coque", "otro"].includes(payload.motivo_comercial) ? payload.motivo_comercial : "sin_especificar";
  pendingEvents.set(submissionId, { form_source: source, service_id: service, lead_intent: intent });
  if (retryTimer === undefined) flushLeadEvents();
}
