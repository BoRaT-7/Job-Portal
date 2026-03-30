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
import AdoptForm from "../pages/Adoption/AdoptForm";
import PaymentForm from "../pages/Petfood/PaymentForm";

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
       path:"adopt-form",
       element:<AdoptForm></AdoptForm>
      },
      {
        path:"petfood",
        element:<Petfood></Petfood>
      },
      {
        path:"payment",
        element:<PaymentForm></PaymentForm>
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
