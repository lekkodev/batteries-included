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
import { AlertBannerProvider } from "@lekko/react-components";
import { Beta } from "./pages/Beta.tsx";
import { Home } from "./pages/Home.tsx";
import { Root } from "./pages/Root.tsx";
import { Integration } from "./pages/Integration.tsx";
import { Blocked } from "./pages/Blocked.tsx";
import { getAlertBanner, getTheme } from "./lekko/plugins.ts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        element={
          <AlertBannerProvider
            env={import.meta.env.MODE}
            blockedFallback={Blocked}
            bannerConfig={getAlertBanner}
            themeConfig={getTheme}
          />
        }
      >
        <Route path="/" element={<Root />} />
        <Route path="home" element={<Home />} />
        <Route path="beta" element={<Beta />} />
        <Route path="integrations/:integrationId" element={<Integration />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
