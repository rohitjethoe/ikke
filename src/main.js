import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from '@/views/Home.vue'

const routes = [
    { path: '/', component: Home }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')