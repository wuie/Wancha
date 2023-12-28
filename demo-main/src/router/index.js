import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/WanchaLogin/index.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/views/WanchaNews/index.vue')
    },
    {
      path:'/',
      name:'user',
      component:()=>import('@/views/WanchaUser/index.vue')
    }
  ]
})

export default router
