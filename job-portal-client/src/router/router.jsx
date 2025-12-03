// src/router/router.jsx
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Home/register/Register";
import Login from "../pages/Home/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path:"login",
        element:<Login></Login>
      }
    ],
  },
]);

export default router;
