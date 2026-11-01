import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/Juventude-Digital-360-/',
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'JUVENTUDE DIGITAL 360°',
        short_name: 'JD 360°',
        description: 'Tecnologia, Conhecimento e Oportunidades para Todos os Jovens em Moçambique.',
        theme_color: '#123A70',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/Juventude-Digital-360-/',
        scope: '/Juventude-Digital-360-/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
