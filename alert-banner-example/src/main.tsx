import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { AlertBannerProvider } from "@lekko/react-components";
import { Beta } from "./pages/Beta";
import { Home } from "./pages/Home";
import { Root } from "./pages/Root";
import { Integration } from "./pages/Integration";
import { Blocked } from "./pages/Blocked";
import { getAlertBanner } from "./lekko/plugins";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        element={
          <AlertBannerProvider
            env={import.meta.env.MODE}
            blockedFallback={Blocked}
            bannerConfig={getAlertBanner}
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
