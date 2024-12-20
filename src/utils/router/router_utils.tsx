import { RouteObject } from "react-router-dom";
import { Routes } from "./router_enum";
import AuthLogin from "../../layouts/auth/login";
import { userIsLogin } from "../handlers/user_login";
import AdminHome from "../../layouts/admin/home";
import AuthPassword from "../../layouts/auth/password";

export class RouterUtils {
  routes = (): RouteObject[] => {
    const user = userIsLogin();
    // const navigate = useNavigate();
    //   const scrollToContent = (targetId: string) => {
    //     const targetElement = document.getElementById(targetId);
    //     if (targetElement) {
    //       setTimeout(() => {
    //         targetElement.scrollIntoView({ behavior: "smooth" });
    //       }, 100);
    //     }
    //   };

    if (user && location.pathname === Routes.password) {
      window.history.pushState({}, "", "/");
    }

    return !user
      ? [
          {
            path: Routes.main,
            element: <AuthLogin />,
          },
          {
            path: Routes.password,
            element: <AuthPassword />,
          },
        ]
      : [
          {
            path: Routes.main,
            element: <AdminHome />,
          },
          {
            path: Routes.quotes,
            element: <AdminHome />,
          },
          {
            path: Routes.users,
            element: <AdminHome />,
          },
          {
            path: Routes.settings,
            element: <AdminHome />,
          },
        ];
  };
}
