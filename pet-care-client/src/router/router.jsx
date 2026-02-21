// src/router/router.jsx
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Home/register/Register";
import Login from "../pages/Home/login/Login";
import Jobs from "../pages/Jobs/Jobs";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Adoption from "../pages/Adoption/Adoption";
import Petfood from "../pages/Petfood/Petfood";

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
        path:"services",
        element:<Services></Services>
      },
      {
        path:"adoption",
        element:<Adoption></Adoption>
      },
      {
        path:"petfood",
        element:<Petfood></Petfood>
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
