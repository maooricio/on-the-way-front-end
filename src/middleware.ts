import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Routes } from "./utils/router/router_enum";
import { IUserLogged } from "./utils/interfaces/user.interface";

const ADMIN_ROUTES: string[] = [
  Routes.main,
  Routes.quotes,
  Routes.users,
  Routes.settings,
  Routes.quotes_history,
  Routes.quotes_new,
  Routes.to_quote,
  Routes.request_details,
  Routes.quote_details,
  Routes.quote_drafts,
];

const CLIENT_ROUTES: string[] = [
  Routes.quotes,
  Routes.quotes_history,
  Routes.quotes_new,
  Routes.settings,
  Routes.waiting_quote,
];

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
      new URL(token ? Routes.main : Routes.login, req.url),
    );
  }

  const userData: IUserLogged = token ? JSON.parse(token) : {};

  if (userData.role === "admin") {
    if (!ADMIN_ROUTES.includes(pathname)) {
      return NextResponse.redirect(new URL(Routes.main, req.url));
    }
  }

  if (userData.role === "client") {
    if (!CLIENT_ROUTES.includes(pathname)) {
      return NextResponse.redirect(new URL(Routes.quotes, req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
