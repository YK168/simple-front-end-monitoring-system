import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const resolve = (dirPath) => path.resolve(__dirname, dirPath)

// https://vitejs.dev/config/
export default defineConfig({
  lintOnSave: false /* 关闭语法检查 */,
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
      resolvers: [
        // 自动导入 Element Plus 相关函数
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon'
        })
      ]
    }),
    Components({
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  server: {
    open: true, // 自动打开
    base: './ ', // 生产环境路径
    proxy: {
      // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      // 正则表达式写法
      '^/api': {
        target: 'http://hts0000.top:3001/', // 后端服务实际地址
        // target:'http://172.23.130.64:8082/',
        changeOrigin: true, // 开启代理
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
