import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // atau sesuai plugin framework Anda

export default defineConfig({
  plugins: [react()],
  base: '/portfoliosProject/', // Tambahkan baris ini (sesuaikan dengan nama repositori Anda)
})
