import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],

  server: {
    https: {
      key: fs.readFileSync("../backend/certs/localhost+2-key.pem"),
      cert: fs.readFileSync("../backend/certs/localhost+2.pem"),
    },
    port: 5173,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});