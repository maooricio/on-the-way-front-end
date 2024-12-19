import otw_only_logo from "../../../assets/images/otw_only_logo.svg";
import menu from "../../../assets/icons/utils/menu.svg";
import logout from "../../../assets/icons/utils/logout.svg";
import { useState } from "react";
import { INavbarLinks } from "../../../utils/interfaces/links.interface";
import home from "../../../assets/icons/navbar/home.svg";
import quotes from "../../../assets/icons/navbar/quotes.svg";
import users from "../../../assets/icons/navbar/users.svg";
import settings from "../../../assets/icons/navbar/settings.svg";
import { Routes } from "../../../utils/router/router_enum";
import { Link, useLocation, useNavigate } from "react-router-dom";
import user_profile from "../../../assets/images/user_profile.svg";
import { userLogout } from "../../../utils/handlers/user_login";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showFullNavbar, setShowFullNavbar] = useState<boolean>(true);

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
    navigate(0);
  };

  return (
    <section className="navbar-container">
      <header className="navbar-header">
        <button
          type="button"
          onClick={() => setShowFullNavbar(showFullNavbar)}
        >
          <img src={menu} alt="navbar menu" />
        </button>

        <nav className="navbar-content">
          <img src={otw_only_logo} alt="on the way logo" />

          <ul className="navbar-links-container">
            {links.map((i) => (
              <li key={`${i.name}: ${i.path}`}>
                <Link
                  to={i.path}
                  className={`link ${
                    location.pathname === i.path ? "is-focus" : ""
                  }`}
                >
                  <img src={i.icon} alt={`navbar icon: ${i.name}`} />
                  {showFullNavbar && <span>{i.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <footer className="navbar-footer">
        <div className="navbar-user">
          <img src={user_profile} alt="user profile pic" />
          {showFullNavbar && <span className="navbar-user-name">María Laura Dominguez</span>}
          {showFullNavbar && <span className="navbar-user-role">Administrador</span>}
        </div>

        <button type="button" onClick={handleLogout}>
          <img src={logout} alt="log out icon" />
          Cerrar sesión
        </button>
      </footer>
    </section>
  );
};

export default Navbar;
