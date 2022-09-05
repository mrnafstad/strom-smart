import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({registerType: 'autoUpdate' })
  ],
  server: {
    port: 3000
  },
  base: process.env.NODE_ENV === 'production'
  ? '/strom-smart/'
  : '/'
})
