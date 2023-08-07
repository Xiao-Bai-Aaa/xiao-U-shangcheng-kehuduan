import home from "@/views/home/index.vue"

export const addGoods = [
    {
        path: '/',
        redirect: '/home' // 重定向到 /home
    },
    {
        path: '/home',
        name: 'home',
        component: home,
    },
    {
        path: '/cate',
        name: 'cate',
        component: () => import('@/views/cate/index.vue')
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/cart/index.vue')
    },
    {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my/index.vue')
    },
]