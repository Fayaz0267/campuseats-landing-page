import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The landing page runs on its own port so it never collides with the
// existing CampusEats frontend (usually :3000) or backend (usually :5000).
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, host: true },
  preview: { port: 4173, host: true },
});
