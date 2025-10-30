import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // ✅ Use this for GitHub Pages or production if needed
  // base: '/D-26/',

  plugins: [react()],

  // ✅ Enable local network access
  server: {
    host: true,          // allows access from other devices
    port: 5173,          // you can change this if you want
  },
})
