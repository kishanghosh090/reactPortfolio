import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/send-email": "https://portfoliobackend-l7xc.onrender.com",
    },
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [/^node:.*/],
    },
  },
});
