import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Shop from "./Shop.jsx";
import "react-multi-carousel/lib/styles.css";
import { RouterProvider } from "react-router";
import router from "./routes.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Navigation />
      <Shop />
    </RouterProvider>
  </StrictMode>
);
