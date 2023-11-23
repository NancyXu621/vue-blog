
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', redirect: '@/view/login/login.vue' },
    {
        name: 'login',
        path: '/login',
        component: () => import('../views/login/login.vue'),
        meta: {
            title: '登录'
        }
    },
    // {
    //     name:'echat',
    //     path:"/echat",
    //     component: () => import('../views/echat/echat.vue'),
    //     meta:{
    //         title:'数据统计'
    //     }
    // }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        console.log('router', to, from, savedPosition);
        return { top: 0 }
    }

})


export default routes