import BaseLayout from '@/layouts/BaseLayout.vue'
import HomeLayout from '@/layouts/HomeLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: HomeLayout },
      component: HomeView
    },
    {
      path: '/flights',
      name: 'flights',
      meta: { layout: BaseLayout },
      component: () => import('@/views/FlightsView.vue')
    },
    {
      path: '/hotels',
      name: 'hotels',
      meta: { layout: BaseLayout },
      component: () => import('@/views/HotelsView.vue')
    }
  ]
})

export default router
