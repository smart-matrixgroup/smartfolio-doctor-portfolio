import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base: build works at a domain root and under a sub-path
  // (e.g. GitHub Pages project sites) without broken asset URLs.
  base: './',
  plugins: [react(), tailwindcss()],
  base: '/smartfolio-doctor-portfolio/',
})
