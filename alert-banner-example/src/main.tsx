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

const LEKKO_SETTINGS: LekkoSettings = {
  apiKey: "test-api-key",
  repositoryOwner: "my-github",
  repositoryName: "my-configs",
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AlertBannerProvider settings={LEKKO_SETTINGS} />}>
      <App />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
