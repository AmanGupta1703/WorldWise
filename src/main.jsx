import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext.jsx";
import GeoLocationContextProvider from "./contexts/GeoLocationContext.jsx";
import { CitiesContextProvider } from "./contexts/CitiesContext.jsx";
import { HomePage, LoginPage, PricingPage, ProductPage } from "./pages";
import { AddCityForm, AppLayout, Cities, City, Countries, ProtectedRoute } from "./components";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute authentication={false}>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/pricing",
        element: (
          <ProtectedRoute authentication={false}>
            <PricingPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/product",
        element: (
          <ProtectedRoute authentication={false}>
            <ProductPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <ProtectedRoute authentication={false}>
            <LoginPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "app",
        element: (
          <ProtectedRoute authentication>
            <AppLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <Navigate replace to="cities" />,
          },
          {
            path: "cities",
            element: <Cities />,
          },
          {
            path: "cities/:id",
            element: <City />,
          },
          {
            path: "countries",
            element: <Countries />,
          },
          {
            path: "form",
            element: <AddCityForm />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <GeoLocationContextProvider>
        <CitiesContextProvider>
          <RouterProvider router={router} />
        </CitiesContextProvider>
      </GeoLocationContextProvider>
    </AuthContextProvider>
  </StrictMode>,
);
