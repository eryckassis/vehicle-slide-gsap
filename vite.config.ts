import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vehicle-slide-gsap/', // Nome correto do repositório para GitHub Pages
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
