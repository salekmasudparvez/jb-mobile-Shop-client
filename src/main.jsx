import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Routes from './routes/Routes';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './authprovider/Authprovider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={Routes} />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>

  </React.StrictMode>
);


