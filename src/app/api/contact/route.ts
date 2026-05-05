import { NextRequest, NextResponse } from "next/server";

const DEFAULT_ACCESS_KEY = "6b5951be-932d-4173-a85c-f14d2c05a2c4";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const payload: Record<string, string> = {};
    formData.forEach((value, key) => {
      payload[key] = value.toString();
    });

    if (!payload["access_key"]) {
      payload["access_key"] = DEFAULT_ACCESS_KEY;
    }

    const resp = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await resp.json();

    if (!data.success) {
      return NextResponse.json(
        { success: false, message: data.message ?? "Error al enviar" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[/api/contact]", err);
    return NextResponse.json(
      { success: false, message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
