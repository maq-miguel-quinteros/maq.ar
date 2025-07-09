import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://maq-miguel-quinteros.github.io/maq.ar/",
  build: {outDir: 'build' },
})
