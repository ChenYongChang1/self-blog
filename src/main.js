import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Element from 'element-plus'
import { stateSymbol, createState } from './store/index'

import { RouterPath } from './assets/js/util'

// import 'element-plus/lib/theme-chalk/index.css'
import './assets/css/_element-reset.scss'
import './assets/css/_mixin.scss'
import './assets/css/index.scss'
import './assets/css/element-variables.scss'
import axios from './axios'

export const app = createApp(App)

app.use(Router)
app.use(Element)
app.provide(stateSymbol, createState())
app.provide('$goPath', RouterPath.goPath.bind(app))
// 全局配置
app.config.globalProperties.$axios = axios

app.mount('#app')
