import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/home/Home";
import { Register } from "../pages/register/Register";
import { Login } from "../pages/login/Login";
import AddProduct from "../pages/addProduct/AddProduct";


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
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/add-product",
            element: <AddProduct></AddProduct>
        },
      ]
    },
  ]);

export default Routes;