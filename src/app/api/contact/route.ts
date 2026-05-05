import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const payload: Record<string, string> = {
      access_key: "6b5951be-932d-4173-a85c-f14d2c05a2c4",
    };

    formData.forEach((value, key) => {
      payload[key] = value.toString();
    });

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
