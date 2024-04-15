
import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '../layout/index.vue'
// import mySetup from './my.js'
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
    // ...mySetup,
    {
        name: 'home',
        path: '/home',
        component: layout,
        meta: {
            title: '首页',
        },
        children: [
            {
                name: "home",
                path: 'home',
                component: () => import('../views/home/index.vue'),
            }
        ]
    },
    {
        name: 'echat',
        path: "/echat",
        component: layout,
        meta: {
            title: '数据统计',
        },
        children: [
            {
                path: "echat",
                component: () => import('../views/echat/echat.vue'),
            }
        ]
    },
    {
        name: 'chatRoom',
        path: "/chatRoom",
        component: layout,
        meta: {
            title: '聊天室',
        },
        children: [
            {
                path: "chatRoom",
                component: () => import('../views/chatRoom/chatRoom.vue'),
            }
        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

router.beforeEach((to, from, next) => {
    next()
})

// router.afterEach((to, from) => {
//     // 路由发生变化修改页面title
//     document.title = to.meta.title
// })

export default router