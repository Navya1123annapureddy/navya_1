// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/navya_1/", // Ensure the base path is correct
    plugins: [react()],
});