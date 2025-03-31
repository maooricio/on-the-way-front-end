import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const cookie = await cookies();
  const body = await req.json();

  cookie.set("authToken", JSON.stringify(body), {
    httpOnly: true, // Limit JavaScript explorer access
    secure: true, // Will only be sent in HTTPS
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  });

  return NextResponse.json({ success: true });
}

export async function GET(req: Request) {
  const cookieStore = await cookies();
  const user = cookieStore.get("authToken");

  const referer = req.headers.get("referer");
  const origin = req.headers.get("origin");

  if (!referer && !origin) {
    return NextResponse.json(
      { error: "Acceso no autorizado" },
      { status: 403 },
    );
  }

  return NextResponse.json({ body: user ? JSON.parse(user.value) : null });
}

export async function DELETE() {
  const cookie = await cookies();

  cookie.delete("authToken");

  return NextResponse.json({ success: true });
}
