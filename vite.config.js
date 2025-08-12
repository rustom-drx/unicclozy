import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'public',           // Set the folder where index.html is
  publicDir: '../public',   // Static assets (still points to public)
  build: {
    outDir: '../dist',      // Output folder relative to root
    emptyOutDir: true,
  },
});
