import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import basicSsl from '@vitejs/plugin-basic-ssl'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: ['ec2-35-178-95-132.eu-west-2.compute.amazonaws.com'],
  },
});
