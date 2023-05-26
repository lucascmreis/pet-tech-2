import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Cats, Contact, Elderly, Home, Hospitals, PetsShop, Purchase } from './pages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
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
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
