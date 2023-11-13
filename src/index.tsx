import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import {
  Cats,
  Contact,
  Elderly,
  Home,
  Hospitals,
  PetsShop,
  Purchase,
} from "./pages";
import Volunteer from "./pages/volunteer";
import Register from "./pages/volunteer/register";
import Agenda from "./pages/volunteer/agenda";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hospitais",
    element: <Hospitals />,
  },
  {
    path: "/idosos",
    element: <Elderly />,
  },
  {
    path: "/gatos",
    element: <Cats />,
  },
  // {
  //   path: "/informacao",
  //   element: <Information />,
  // },
  {
    path: "/purchase",
    element: <Purchase />,
  },
  {
    path: "/contato",
    element: <Contact />,
  },
  {
    path: "/pets-shop",
    element: <PetsShop />,
  },
  {
    path: "/volunteer",
    element: <Volunteer />,
  },
  {
    path: "/volunteer/register",
    element: <Register />,
  },
  {
    path: "/volunteer/agenda",
    element: <Agenda />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
