import {defineConfig} from "vite";
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "dist/main.js"), formats: ["cjs"]
        },
        rollupOptions:{
            output:{
                inlineDynamicImports:true,
                format: "iife",
                entryFileNames: "main.js"
            }
        }
    },
    resolve: {alias: {src: resolve("src/")}}
});
