import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-slick', 'slick-carousel'], // Add react-slick and slick-carousel to optimizeDeps
  },
});
