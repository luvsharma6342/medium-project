import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // Ensure this is imported

export default defineConfig({
  plugins: [
    tailwindcss(), // Ensure this is called here
  ],
})