import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import sass from 'sass';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
