import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouterUtils } from "./utils/router/router_utils";

function App() {
  const router = createBrowserRouter(new RouterUtils().routes());

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
