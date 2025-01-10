import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Routes } from "./utils/router/router_enum";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value;

  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/auth") && token) {
    return NextResponse.redirect(new URL(Routes.main, req.url));
  }

  if (!pathname.startsWith("/auth") && !token) {
    return NextResponse.redirect(new URL(Routes.login, req.url));
  }

  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(token ? Routes.main : Routes.login, req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
