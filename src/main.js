import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/src/index.scss'

import routers from './routers'
import { setupStore } from './store'
// 导入全局样式
import './styles/index.scss'

const app = createApp(App)

setupStore(app)

app.use(ElementPlus).use(routers).mount('#app')
