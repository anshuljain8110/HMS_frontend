import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH,
  build: {
    chunkSizeWarningLimit: 10000, // increases limit to 2000 KB (2 MB)
  },
})
