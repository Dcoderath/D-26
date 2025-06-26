import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/D-26/', // <== THIS is critical
  plugins: [react()],
})
