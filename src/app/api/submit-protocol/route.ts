import { NextRequest, NextResponse } from "next/server";

const FORMSPREE_CHATBOT  = "https://formspree.io/f/mykojkvj";
const FORMSPREE_CONTACT  = "https://formspree.io/f/meenkedl";

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let payload: Record<string, string> = {};

    if (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded")) {
      const formData = await req.formData();
      formData.forEach((value, key) => {
        payload[key] = value.toString();
      });
    } else {
      const body = await req.json();
      payload = { ...body };
    }

    const subject = (payload["subject"] || "").toLowerCase();
    const endpoint = subject.includes("chat bot") ? FORMSPREE_CHATBOT : FORMSPREE_CONTACT;

    // Formspree no usa access_key
    delete payload["access_key"];

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

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[/api/submit-protocol]", err);
    return NextResponse.json(
      { success: false, message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
