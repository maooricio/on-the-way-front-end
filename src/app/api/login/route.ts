import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { FakeUsersLogged } from "@/utils/data/fakers";

export async function POST(req: Request) {
  const { user, password } = await req.json();
  const cookie = await cookies();

  const userToLogin = FakeUsersLogged.find(
    (i) => i.email === user || i.username === user,
  );

  if (!userToLogin || userToLogin.password !== password) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  // Guarda la cookie en el servidor con HttpOnly para más seguridad
  cookie.set("authToken", JSON.stringify(userToLogin), {
    httpOnly: true, // No accesible desde JavaScript en el cliente
    secure: true, // Solo se enviará en HTTPS
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60, // 7 días
  });

  return NextResponse.json({ success: true });
}

export async function GET(req: Request) {
  const cookieStore = await cookies();
  const user = cookieStore.get("authToken");

  const referer = req.headers.get('referer');
  const origin = req.headers.get('origin');

  if (!referer && !origin) {
    return NextResponse.json({ error: 'Acceso no autorizado' }, { status: 403 });
  }

  return NextResponse.json({ body: user ? JSON.parse(user.value) : null });
}

export async function DELETE() {
  const cookie = await cookies();

  cookie.delete("authToken");

  return NextResponse.json({ success: true });
}
