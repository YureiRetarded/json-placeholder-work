import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import '@/assets/style.css'

const app = createApp(App)
app.use(router).mount('#app')

import 'bootstrap/dist/js/bootstrap.js'