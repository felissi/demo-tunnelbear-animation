import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { fileURLToPath } from "node:url";
import * as path from "node:path";
import webpackStatsPlugin from "rollup-plugin-webpack-stats";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), //
    webpackStatsPlugin(),
  ],
  css: { postcss: { plugins: [tailwindcss(), autoprefixer()] } },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "@/*": path.resolve(__dirname, "./*"),
    },
  },
  base: "./",
  build: {
    rollupOptions: {
      output: {
        // Use a supported file pattern for Vite 5/Rollup 4
        // @doc https://relative-ci.com/documentation/guides/vite-config
        assetFileNames: "assets/[name].[hash][extname]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
  },
});
