import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tour_page from '../views/Tour_page.vue'
import Tour_Reg from '../views/Tour_Reg.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tour_page',
      name: 'tour_page',
      component: Tour_page,
    },
    {
      path: '/tour_reg',
      name: 'tour_reg',
      component: Tour_Reg,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})

export default router
