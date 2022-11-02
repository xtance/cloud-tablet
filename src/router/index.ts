import { createRouter, createWebHistory } from 'vue-router'
import TabletView from '../views/TabletView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tablet',
      component: TabletView
    },
  ]
})

export default router
