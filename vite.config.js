/**
 * @author:3219872797qq.com 
 * @data 2023/11/22 14:20:29
 */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './',
  server: {
    proxy: {
      // 选项写法 
      '/api/': {
        target: 'https://192.168.0.106:8080/api',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
  port: 8280,
  host: '0.0.0.0',
  open: true,
  https: false,
  cors: true,
  hmr: true,
  plugins: [vue()],
})