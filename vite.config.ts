import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import basicSsl from '@vitejs/plugin-basic-ssl'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: true,
  },
});
