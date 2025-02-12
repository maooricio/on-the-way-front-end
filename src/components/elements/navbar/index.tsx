"use client";
import otw_only_logo from "@/assets/images/otw_only_logo.svg";
import menu from "@/assets/icons/utils/menu.svg";
import menu_dark from "@/assets/icons/utils/menu_dark.svg";
import logout from "@/assets/icons/utils/logout.svg";
import { useEffect, useState } from "react";
import { Routes } from "@/utils/router/router_enum";
import { getUserLogged, userLogout } from "@/utils/handlers/user_login";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { INavbarLinks } from "@/utils/interfaces/links.interface";
import home from "@/assets/icons/navbar/home.svg";
import quotes from "@/assets/icons/navbar/quotes.svg";
import users from "@/assets/icons/navbar/users.svg";
import settings from "@/assets/icons/navbar/settings.svg";
import useScreenSize from "@/utils/hooks/use_screen_width";
import { IUserLogged } from "@/utils/interfaces/user.interface";

const adminLinks: INavbarLinks[] = [
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

const clientLinks: INavbarLinks[] = [
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

const Navbar = () => {
  const pathname = usePathname();
  const screen = useScreenSize();
  const router = useRouter();

  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [user, setUser] = useState<IUserLogged | undefined>();

  const fetchUserLogged = async () => {
    try {
      const res = await getUserLogged();

      setUser(res);
    } catch (error) {
      console.log({ error });
    }
  };

  const handleLogout = async () => {
    try {
      await userLogout();

      router.push(Routes.login);
    } catch (error) {
      console.log({ error });
    }
  };

  const getRole = (role: string) => {
    switch (role) {
      case "admin":
        return "Administrador";
      case "client":
        return "Cliente";
      default:
        return "";
    }
  };

  const links: INavbarLinks[] =
    user?.role === "admin" ? adminLinks : clientLinks;

  useEffect(() => {
    fetchUserLogged();
  }, []);

  const clientSideIsLoaded = screen !== null && user !== null;

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
          disabled={clientSideIsLoaded && screen.width > 900}
        >
          <Image
            src={
              showNavbar || (clientSideIsLoaded && screen.width > 900)
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
            {clientSideIsLoaded &&
              links.map((i) => (
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
        {clientSideIsLoaded && (
          <div className="navbar-user">
            <Image src={user?.photo ?? otw_only_logo} alt="user profile pic" priority />

            {screen.height > 700 && (
              <>
                <span className="navbar-user-name">
                  {user?.firstName} {user?.lastName}
                </span>
                <span className="navbar-user-role">{getRole(user?.role ?? "")}</span>
              </>
            )}
          </div>
        )}

        <button type="button" onClick={handleLogout}>
          <Image src={logout} alt="log out icon" />
          Cerrar sesión
        </button>
      </footer>
    </section>
  );
};

export default Navbar;
