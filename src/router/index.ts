import BaseLayout from '@/layouts/BaseLayout.vue'
import LandingLayout from '@/layouts/LandingLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: LandingLayout },
      component: HomeView
    },
    {
      path: '/flights',
      name: 'flights',
      meta: { layout: BaseLayout },
      component: () => import('@/views/FlightsView.vue')
    }
  ]
})

export default router
