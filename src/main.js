import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from '@/views/Home.vue'
import Archief from '@/views/Archief.vue'
import Error from '@/views/Error.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/archief', component: Archief },
    { path: '/:pathMatch(.*)*', name: 'error', component: Error }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')