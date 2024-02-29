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
import { LekkoSettings } from "@lekko/react-sdk";
import { AlertBannerProvider } from "@lekko/react-components";
import { Beta } from "./pages/Beta.tsx";
import { Home } from "./pages/Home.tsx";
import { Root } from "./pages/Root.tsx";
import { Integration } from "./pages/Integration.tsx";
import { Blocked } from "./pages/Blocked.tsx";

const LEKKO_SETTINGS: LekkoSettings = {
  apiKey: import.meta.env.VITE_LEKKO_API_KEY,
  repositoryOwner: import.meta.env.VITE_LEKKO_REPOSITORY_OWNER,
  repositoryName: import.meta.env.VITE_LEKKO_REPOSITORY_NAME,
  hostname: import.meta.env.VITE_LEKKO_HOSTNAME,
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        element={
          <AlertBannerProvider
            lekkoSettings={LEKKO_SETTINGS}
            blockedFallback={Blocked}
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
