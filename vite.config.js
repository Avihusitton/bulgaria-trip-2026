import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'בולגריה 2026 | אביהו וגיל',
        short_name: 'בולגריה 2026',
        description: 'מדריך תפעולי לחופשת בולגריה - אביהו וגיל',
        theme_color: '#163328',
        background_color: '#f7f9f8',
        display: 'standalone',
        dir: 'rtl',
        lang: 'he',
        start_url: '/',
        icons: [
          {
            src: '/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json}']
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('leaflet')) {
            return 'leaflet'
          }
        }
      }
    }
  }
})
