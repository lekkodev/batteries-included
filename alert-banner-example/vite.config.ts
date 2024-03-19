import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import lekko from "@lekko/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  // This plugin is responsible for transforming your local functions to remote calls
  // and will be automatically invoked during prod builds of your app
  plugins: [lekko(), react()],
});
