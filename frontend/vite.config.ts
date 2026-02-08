import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite"; // Ensure this is imported

export default defineConfig({
  plugins: [
    tailwindcss(), // Ensure this is called here
  ],
  base: process.env.VITE_BASE_PATH || "/medium-project",
});
