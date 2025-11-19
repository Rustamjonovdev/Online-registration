import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tour_page from '../views/Tour_page.vue'
import Tour_Reg from '../views/Tour_Reg.vue'
import About from '../views/About.vue'
import Reg_page from '../views/Reg_page.vue'
import TableView from '../components/TableView.vue'
import ResultView from '../components/ResultView.vue'

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
      path: '/reg_page',
      name: 'reg_page',
      component: Reg_page,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/table/:weight',
      name: 'table',
      component: TableView,
    },
    {
      path: '/result/:weight',
      name: 'ResultView',
      component: ResultView,
      props: true,
    },
  ],
})

export default router
