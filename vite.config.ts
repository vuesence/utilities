import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// import { URL, fileURLToPath } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
