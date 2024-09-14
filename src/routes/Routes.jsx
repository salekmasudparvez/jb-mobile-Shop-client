import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/home/Home";
import { Register } from "../pages/register/Register";
import { Login } from "../pages/login/Login";
import AddProduct from "../pages/addProduct/AddProduct";
import Contact from "../pages/contact/Contact";
import CollectionDetails from "../pages/home/allCollection/CollectionDetails";
import Profile from "../pages/profile/Profile";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
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
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: '/details/:id',
        element: <CollectionDetails></CollectionDetails>,
      },
      {
        path: '/profile',
        element: <Profile></Profile>,
      }
    ]
  },
]);

export default Routes;