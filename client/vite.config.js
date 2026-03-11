import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";

const indexHtml = fileURLToPath(new URL("./index.html", import.meta.url));
const notFoundHtml = fileURLToPath(new URL("./404.html", import.meta.url));

export default defineConfig(({ command }) => ({
  build: {
    target: "esnext", //browsers can handle the latest ES features
    rollupOptions: {
      input: {
        main: indexHtml,
        notFound: notFoundHtml,
      },
    },
  },
  plugins: [tailwindcss()],
  base: command === "build" ? "/Site-commerce/" : "/",
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false
      }
    }
  }
}));