"use client";
import otw_only_logo from "../../../assets/images/otw_only_logo.svg";
import menu from "../../../assets/icons/utils/menu.svg";
import menu_dark from "../../../assets/icons/utils/menu_dark.svg";
import logout from "../../../assets/icons/utils/logout.svg";
import { useState } from "react";
import { Routes } from "../../../utils/router/router_enum";
import user_photo from "../../../assets/images/user_photo.jpg";
import { getUserLogged, userLogout } from "../../../utils/handlers/user_login";
import { redirect, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import useScreenSize from "@/utils/hooks/use_screen_width";
import { adminLinks, clientLinks } from "@/utils/router/links";

const Navbar = () => {
  const pathname = usePathname();
  const screen = useScreenSize();
  const clientSideIsLoaded = screen !== null;

  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const getLinks = () => {
    const user = getUserLogged();

    if (user?.role !== "admin") {
      return clientLinks;
    } else {
      return adminLinks;
    }
  };

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
          disabled={clientSideIsLoaded && screen.width > 768}
        >
          <Image
            src={
              showNavbar || (clientSideIsLoaded && screen.width > 768)
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
            {getLinks().map((i) => (
              <li key={`${i.name}: ${i.path}`}>
                <Link
                  href={i.path}
                  className={`link ${pathname === i.path ? "is-focus" : ""}`}
                  onClick={() => setTimeout(() => setShowNavbar(false), 100)}
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
          <Image src={user_photo} alt="user profile pic" priority />

          {clientSideIsLoaded && screen.height > 700 && (
            <>
              <span className="navbar-user-name">María Laura Dominguez</span>
              <span className="navbar-user-role">Administrador</span>
            </>
          )}
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
