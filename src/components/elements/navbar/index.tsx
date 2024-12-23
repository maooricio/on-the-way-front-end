"use client";
import otw_only_logo from "../../../assets/images/otw_only_logo.svg";
import menu from "../../../assets/icons/utils/menu.svg";
import menu_dark from "../../../assets/icons/utils/menu_dark.svg";
import logout from "../../../assets/icons/utils/logout.svg";
import { useState } from "react";
import { INavbarLinks } from "../../../utils/interfaces/links.interface";
import home from "../../../assets/icons/navbar/home.svg";
import quotes from "../../../assets/icons/navbar/quotes.svg";
import users from "../../../assets/icons/navbar/users.svg";
import settings from "../../../assets/icons/navbar/settings.svg";
import { Routes } from "../../../utils/router/router_enum";
import user_profile from "../../../assets/images/user_profile.svg";
import { userLogout } from "../../../utils/handlers/user_login";
import { redirect, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import useScreenWidth from "@/utils/hooks/use_screen_width";

const Navbar = () => {
  const pathname = usePathname();
  const width = useScreenWidth();
  const clientSideIsLoaded = width !== null;
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const links: INavbarLinks[] = [
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

  const handleLogout = () => {
    userLogout();
    redirect(Routes.login);
  };

  return (
    <section
      className={`navbar-container ${
        showNavbar ? "show-navbar" : "hide-navbar"
      }`}
    >
      <header className="navbar-header">
        <button
          type="button"
          onClick={() => setShowNavbar(!showNavbar)}
          disabled={clientSideIsLoaded && width > 768}
        >
          <Image
            src={
              showNavbar || (clientSideIsLoaded && width > 768)
                ? menu
                : menu_dark
            }
            alt="navbar menu"
          />
        </button>

        <nav className="navbar-content">
          <Image
            src={otw_only_logo}
            alt="on the way logo"
            className="navbar-logo"
          />

          <ul className="navbar-links-container">
            {links.map((i) => (
              <li key={`${i.name}: ${i.path}`}>
                <Link
                  href={i.path}
                  className={`link ${pathname === i.path ? "is-focus" : ""}`}
                >
                  <Image src={i.icon} alt={`navbar icon: ${i.name}`} />
                  <span>{i.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <footer className="navbar-footer">
        <div className="navbar-user">
          <Image src={user_profile} alt="user profile pic" />

          <span className="navbar-user-name">María Laura Dominguez</span>
          <span className="navbar-user-role">Administrador</span>
        </div>

        <button type="button" onClick={handleLogout}>
          <Image src={logout} alt="log out icon" />
          Cerrar sesión
        </button>
      </footer>
    </section>
  );
};

export default Navbar;
