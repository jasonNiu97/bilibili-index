import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/Home/index.vue')
  },
  {
    path: '/video/:id',
    component: () => import('../views/Video/index.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
