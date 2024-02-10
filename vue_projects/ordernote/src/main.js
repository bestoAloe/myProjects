import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/router.js'
import ant from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

const pinia = new createPinia();

createApp(App).use(router).use(pinia).use(ant).mount('#app')
