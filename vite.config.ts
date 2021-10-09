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
 *  预设css样式  Tailwind 的替代品  windicss 快！！！！
 */

import { resolve, join } from 'path'
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
    legacy({
      targets: ['> 1%, last 1 version, ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'], // 面向IE11时需要此插件
    }),
    tsconfigPaths(),
    reactJsx(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
        fuse: resolve(__dirname, './domain/fuse/index.html'),
        iast: resolve(__dirname, './domain/iast/index.html'),
        oss: resolve(__dirname, './domain/oss/index.html'),
        pte: resolve(__dirname, './domain/pte/index.html'),
        rasp: resolve(__dirname, './domain/rasp/index.html'),
      },
      output: {
        manualChunks: {
          react: ['react'],
          'react-dom': ['react-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 2000,
    brotliSize: false
  },
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
      '@views': join(__dirname, 'src/views'),
      '@assets': join(__dirname, 'src/assets'),
      '@components': join(__dirname, 'src/components'),
      '@routes': join(__dirname, 'src/routes'),
      '@style': join(__dirname, 'src/style'),
    },
  },
  server: {
    host: 'localhost',
    port: 9099,
    fs: {
      strict: false
    },
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
