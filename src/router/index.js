
import { createRouter } from "vue-router"
const routes = [
    { path: '/', redirect: 'login' },
    {
        name: 'login',
        path: '/login',
        component: () => import('../views/login/login.vue'),
        meta: {
            title: '登录'
        }
    },
]
const router = createRouter({
    history: 
    routes,
})

export default routes