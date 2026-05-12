import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import ServiceDetail from "../pages/Services/ServiceDetail";
import Register from "../pages/Home/register/Register";
import Login from "../pages/Home/login/Login";
import About from "../pages/About/About";
import Petfood from "../pages/Petfood/Petfood";
import AdoptForm from "../pages/Adoption/AdoptForm";
import PaymentForm from "../pages/Petfood/PaymentForm";
import Adoption from "../pages/Adoption/Adoption";
import Addadoption from "../pages/Adoption/Addadoption"; // ✅ ADD THIS IMPORT

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "services/:serviceName", element: <ServiceDetail /> },
      { path: "adoption", element: <Adoption /> },
      { path: "add-adoption", element: <Addadoption /> }, // ✅ HERE
      { path: "adopt-form", element: <AdoptForm /> },
      { path: "petfood", element: <Petfood /> },
      { path: "payment", element: <PaymentForm /> },
      { path: "about", element: <About /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

export default router;