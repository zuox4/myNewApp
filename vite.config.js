import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '192.168.1.21',  // Позволяет доступ с любого адреса
    port: 2505,       // Можно указать любой порт, который вам нужен
  },
  plugins: [react()],
})
