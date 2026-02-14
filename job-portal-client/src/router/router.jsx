// src/router/router.jsx
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Home/register/Register";
import Login from "../pages/Home/login/Login";
import Jobs from "../pages/Jobs/Jobs";
import About from "../pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path:"jobs",
        element:<Jobs/>,
      },
      {
        path:"about",
        element:<About></About>
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
