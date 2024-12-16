import { RouteObject } from "react-router-dom";
import { Routes } from "./router_enum";
import AuthLogin from "../../layouts/auth/login";

export class RouterUtils {
  routes = (): RouteObject[] => {
    //   const scrollToContent = (targetId: string) => {
    //     const targetElement = document.getElementById(targetId);
    //     if (targetElement) {
    //       setTimeout(() => {
    //         targetElement.scrollIntoView({ behavior: "smooth" });
    //       }, 100);
    //     }
    //   };

    return [
      {
        path: Routes.main,
        element: <AuthLogin />,
      },
    ];
  };
}
