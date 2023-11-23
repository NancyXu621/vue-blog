import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  base: '/',
  
  port: 8080,
  host: '0.0.0.0',
  plugins: [vue()],
})