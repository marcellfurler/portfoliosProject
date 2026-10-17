import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  base: '/portfoliosProject/', // Ini memastikan aset Anda terbaca di GitHub Pages
})
