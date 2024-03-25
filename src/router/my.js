import layout from '../layout/index.vue'

const mySetup = [
    {
        name: 'my',
        path: '/my',
        component: layout,
        meta: {
            title: '我的',
        }
        children: [
            {
                name: 'my',
                path: 'my',
                component: () => import('@/views/my/setUp.vue'),
            },
        ]
    },
]
export default mySetup 