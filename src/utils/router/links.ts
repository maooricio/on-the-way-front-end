import { INavbarLinks } from "../interfaces/links.interface";
import { Routes } from "./router_enum";
import home from "@/assets/icons/navbar/home.svg"
import quotes from "@/assets/icons/navbar/quotes.svg";
import users from "@/assets/icons/navbar/users.svg";
import settings from "@/assets/icons/navbar/settings.svg";

export const adminLinks: INavbarLinks[] = [
  {
    name: "Inicio",
    icon: home,
    path: Routes.main,
  },
  {
    name: "Cotizaciones",
    icon: quotes,
    path: Routes.quotes,
  },
  {
    name: "Gestión usuarios",
    icon: users,
    path: Routes.users,
  },
  {
    name: "Configuraciones",
    icon: settings,
    path: Routes.settings,
  },
];

export const clientLinks: INavbarLinks[] = [
  {
    name: "Cotizaciones",
    icon: quotes,
    path: Routes.quotes,
  },
  {
    name: "Configuraciones",
    icon: settings,
    path: Routes.settings,
  },
];

export const ADMIN_ROUTES: string[] = [
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

export const CLIENT_ROUTES: string[] = [
  Routes.quotes,
  Routes.quotes_history,
  Routes.quotes_new,
  Routes.settings,
];