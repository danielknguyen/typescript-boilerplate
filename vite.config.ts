import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      components: "/src/components",
      pages: "/src/pages",
      store: "/src/store",
      services: "/src/services",
      utils: "/src/utils",
    },
  },
  build: {
    outDir: "dist",
  },
});
