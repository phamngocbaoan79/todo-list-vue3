import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import api from './components/common/axios'

const app = createApp(App)

app.config.globalProperties.$api = api

app.mount('#app')