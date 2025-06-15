import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Dcoderath-26/',
  plugins: [react()],
  server: {
    host: true,  // Listen on all network interfaces, not just localhost
    port: 3000,  // You can set any port you want
  },
});
