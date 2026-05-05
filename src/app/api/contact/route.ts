import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.formData();
    body.set("access_key", "6b5951be-932d-4173-a85c-f14d2c05a2c4");

    const resp = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { Accept: "application/json" },
      body,
    });

    const data = await resp.json();

    if (!resp.ok || !data.success) {
      return NextResponse.json({ success: false, message: data.message ?? "Error al enviar" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, message: "Error interno del servidor" }, { status: 500 });
  }
}
