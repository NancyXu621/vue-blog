import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'// 引入element plus 组件库
import 'element-plus/dist/index.css'
import router from './router/index.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)
app.use(router)
// app.component(echarts)
app.mount('#app')

