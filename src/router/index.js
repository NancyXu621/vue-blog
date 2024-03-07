
import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '../layout/index.vue'

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
    {
        name: 'home',
        path: '/home',
        component: layout,
        meta: {
            title: '首页',
            component: () => import('../views/home/index.vue'),
        }
    },
    {
        name: 'echat',
        path: "/echat",
        component: layout,
        meta: {
            title: '数据统计',
            component: () => import('../views/echat/echat.vue'),
        }
    }
]
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

// router.beforeEach((to, from, next) => {
//     console.log(to)
//     next()
// })

// router.afterEach((to, from) => {
//     // 路由发生变化修改页面title
//     document.title = to.meta.title
// })


export default router