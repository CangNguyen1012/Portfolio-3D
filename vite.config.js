import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: "esnext", // Better modern JS output
    minify: "esbuild", // Fastest minifier
    chunkSizeWarningLimit: 1000, // Optional
  },
  optimizeDeps: {
    include: ["three", "gsap"],
  },
});
