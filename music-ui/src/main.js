import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'


const routes = [
    {
        path: '/artists',
        alias: '',
        name: 'artists',
        component: () => import('./components/Artists.vue'),
    },
    {
        path: '/albums',
        name: 'albums',
        component: () => import('./components/Albums.vue'),
    },
    {
        path: '/songs',
        name: 'songs',
        component: () => import('./components/Songs.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
    app.use(router)

router.isReady().then(() => {
    app.mount('#app')
})
