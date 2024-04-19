import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'https://animewikiappwithreact-otakutechies.onrender.com', // TODO change to site
        secure: false,
        changeOrigin: true
      }
    }
  }
})
