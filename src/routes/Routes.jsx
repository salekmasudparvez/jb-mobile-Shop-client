import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/home/Home";
import { Register } from "../pages/register/Register";


const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/",
            element: <Home></Home>
        },
      ]
    },
  ]);

export default Routes;