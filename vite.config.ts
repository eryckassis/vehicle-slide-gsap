import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // Base path - vazio para Vercel, com path para GitHub Pages
  base: process.env.VERCEL ? '/' : '/vehicle-slide-gsap/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
