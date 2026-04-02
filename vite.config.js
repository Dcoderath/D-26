// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()]
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    host: "0.0.0.0",   // allow access from localhost + local network
    port: 5173,        // fixed port
    strictPort: true,  // fail if port busy (no random port change)
    open: true,        // auto open browser
  },

  preview: {
    host: "0.0.0.0",   // allow preview on network
    port: 5173,
  },

  build: {
    outDir: "dist",
    sourcemap: true,
  }
});