import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage/sections/HomeSection.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movies',
      name: 'movies',
    component: () =>
      import("../views/HomePage/sections/MoviesSection.vue"),
    },
    {
      path: '/single/:id',
      name: 'single',
    component: () =>
      import("../views/HomePage/sections/SingleFilmSection.vue"),
    }
  ]
})

export default router
