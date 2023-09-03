import { createBrowserRouter } from "react-router-dom";
import { Home, Signup, Success } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/success",
    element: <Success />,
  },
]);
