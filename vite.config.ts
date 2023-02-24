import type { PluginOption } from 'vite'
import { SearchPlugin } from 'vitepress-plugin-search'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  server: {
    port: 5173,
    hmr: false
  },
  plugins: [
    SearchPlugin({
      tokenize: 'full', // 解决汉字不能多个输入
    }) as PluginOption,
  ],
})