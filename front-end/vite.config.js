import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['@clerk/clerk-react'], // Ensure Clerk is included in the dependency optimization
  },
  build: {
    rollupOptions: {
      external: [], // Do not externalize Clerk, let it be bundled
    },
  },
});
