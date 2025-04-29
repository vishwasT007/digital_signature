import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist", // Output directory for GitHub Pages deployment
  },
  plugins: [react()],
  base: "/digital_signature/", // Replace with your GitHub repo name
});
