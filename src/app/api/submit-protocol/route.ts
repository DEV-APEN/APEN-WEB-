import { NextRequest, NextResponse } from "next/server";
import { leadSource, normalizeLead, leadValidationError } from "@/lib/lead-schema";
import { getServiceById } from "@/data/services";

const FORMSPREE_CHATBOT  = "https://formspree.io/f/mykojkvj";
const FORMSPREE_CONTACT  = "https://formspree.io/f/meenkedl";

// Límites para que nadie use el endpoint como relé de payloads arbitrarios.
const MAX_CAMPOS = 40;
const MAX_LARGO_CLAVE = 64;
const MAX_LARGO_VALOR = 5000;

let avisoSinSecreto = false;

/**
 * Verifica el token de Cloudflare Turnstile en el servidor. Sin esta
 * verificación el captcha de los formularios es solo decorativo: cualquiera
 * puede hacer POST directo a este endpoint.
 *
 * Solo se exige cuando existe TURNSTILE_SECRET_KEY, para no perder leads
 * mientras la variable no esté configurada en el hosting.
 */
async function verificarTurnstile(token: string | undefined, ip: string | null) {
  const secreto = process.env.TURNSTILE_SECRET_KEY;
  if (!secreto) {
    if (!avisoSinSecreto) {
      console.warn("[/api/submit-protocol] TURNSTILE_SECRET_KEY no configurada: el captcha no se está verificando.");
      avisoSinSecreto = true;
    }
    return true;
  }
  if (!token) return false;

  const cuerpo = new URLSearchParams({ secret: secreto, response: token });
  if (ip) cuerpo.set("remoteip", ip);
  try {
    const respuesta = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body: cuerpo });
    const resultado = await respuesta.json();
    return resultado.success === true;
  } catch (err) {
    console.error("[/api/submit-protocol] Error al verificar Turnstile", err);
    return false;
  }
}

function limpiar(payload: Record<string, unknown>): Record<string, string> {
  const limpio: Record<string, string> = {};
  for (const [clave, valor] of Object.entries(payload).slice(0, MAX_CAMPOS)) {
    if (clave.length > MAX_LARGO_CLAVE || valor === null || valor === undefined) continue;
    limpio[clave] = String(valor).slice(0, MAX_LARGO_VALOR);
  }
  return limpio;
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let bruto: Record<string, unknown> = {};

    if (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded")) {
      const formData = await req.formData();
      formData.forEach((value, key) => {
        bruto[key] = value.toString();
      });
    } else {
      const body = await req.json();
      if (!body || typeof body !== "object" || Array.isArray(body)) {
        return NextResponse.json({ success: false, message: "Solicitud inválida" }, { status: 400 });
      }
      bruto = body;
    }

    const payload = normalizeLead(limpiar(bruto));
    if (payload._gotcha?.trim()) {
      return NextResponse.json({ success: false, message: "Solicitud inválida" }, { status: 400 });
    }
    const validationError = leadValidationError(payload);
    if (validationError) return NextResponse.json({ success: false, message: validationError }, { status: 400 });
    if (payload.servicio_id) {
      const service = getServiceById(payload.servicio_id);
      if (!service) return NextResponse.json({ success: false, message: "Selecciona un servicio válido." }, { status: 400 });
      payload.servicio = service.title;
      payload["servicio-id"] = service.id;
    }
    const submissionId = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(payload.submission_id || "") ? payload.submission_id : crypto.randomUUID();
    payload.submission_id = submissionId;

    const ip = req.headers.get("cf-connecting-ip") ?? req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
    const humano = await verificarTurnstile(payload["cf-turnstile-response"], ip);
    if (!humano) {
      return NextResponse.json(
        { success: false, message: "No pudimos verificar que la solicitud la envía una persona. Recarga la página e inténtalo de nuevo." },
        { status: 400 }
      );
    }

    const endpoint = leadSource(payload) === "chat" ? FORMSPREE_CHATBOT : FORMSPREE_CONTACT;

    // Formspree no usa access_key, y el token del captcha ya cumplió su función.
    delete payload["access_key"];
    delete payload["cf-turnstile-response"];

    const resp = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await resp.json();

    if (!resp.ok || data.errors) {
      const message = data.errors?.[0]?.message ?? "Error al enviar";
      return NextResponse.json({ success: false, message }, { status: 400 });
    }

    return NextResponse.json({ success: true, submission_id: submissionId });
  } catch (err) {
    console.error("[/api/submit-protocol]", err);
    return NextResponse.json(
      { success: false, message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
