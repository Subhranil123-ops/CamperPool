import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync("../backend/certs/localhost+2-key.pem"),
      cert: fs.readFileSync("../backend/certs/localhost+2.pem"),
    },
    port: 5173,
  },
});