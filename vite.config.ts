/**
 * 插件介绍
 *
 *  @vitejs/plugin-legacy
 *  Vite 默认只支持原生支持 ESM 的现代浏览器，但可以通过官方的 @vitejs/plugin-legacy 来支持旧浏览器。
 *  legacy 插件会自动额外生成一个针对旧浏览器的包，并且在 html 中插入根据浏览器 ESM
 *  支持来选择性加载对应包的代码（类似 vue-cli 的 modern mode）。
 *
 *  vite-tsconfig-paths
 *  为了解决默认不支持 ‘@’直接引入ts文件
 *  不支持：import Routes from '@routes/index.tsx'
 *
 *  vite-react-jsx
 *  在浏览器中无法直接使用 JSX，所以大多数 React 开发者需依靠 Babel 或 TypeScript 来将 JSX 代码转换为 JavaScript。
 *
 *  vite-plugin-windicss
 *  windicss 快！！！！
 */


import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import legacy from '@vitejs/plugin-legacy'
import tsconfigPaths from 'vite-tsconfig-paths'
import reactJsx from 'vite-react-jsx'
import windicss from 'vite-plugin-windicss'

//
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    windicss(),
    reactRefresh(),
    legacy(),
    tsconfigPaths(),
    reactJsx(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react"],
          "react-dom": ["react-dom"],
        },
      },
    },
  },
  server: {
    host: '127.0.0.1',
    port: 3000,
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
