import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { fileURLToPath } from "node:url";
import * as path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: { postcss: { plugins: [tailwindcss(), autoprefixer()] } },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "@/*": path.resolve(__dirname, "./*"),
    },
  },
  base: "./",
});
