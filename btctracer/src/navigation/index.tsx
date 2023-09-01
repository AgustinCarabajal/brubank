import { createBrowserRouter } from "react-router-dom";
import { Home, Signup } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
