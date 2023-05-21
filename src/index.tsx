import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Home, Hospitals, Elderly, Cats, Information, Purchase, Contact, PetsShop } from './pages';

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
    path: "/elderly",
    element: <Elderly />,
  },
  {
    path: "/cats",
    element: <Cats />,
  },
  {
    path: "/information",
    element: <Information />,
  },
  {
    path: "/purchase",
    element: <Purchase />,
  },
  {
    path: "/contact",
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
