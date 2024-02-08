import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
      path: '/movies',
      name: 'movies',
    component: () =>
      import("../views/HomePage/sections/SingleFilmSection.vue"),
    }
  ]
})

export default router
