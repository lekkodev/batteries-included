import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Beta } from "./pages/Beta.tsx";
import { Home } from "./pages/Home.tsx";
import { Root } from "./pages/Root.tsx";
import { Integration } from "./pages/Integration.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Root />} />
      <Route path="home" element={<Home />} />
      <Route path="beta" element={<Beta />} />
      <Route path="integrations/:integrationId" element={<Integration />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
