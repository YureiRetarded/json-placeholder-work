import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/style.css'

const app = createApp(App)
app
    .use(router)
    .use(BootstrapVue)
    .mount('#app')
