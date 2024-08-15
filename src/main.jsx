import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Routes from './routes/Routes';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './authprovider/Authprovider';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes} />
      <Toaster />
    </AuthProvider>

  </React.StrictMode>
);
