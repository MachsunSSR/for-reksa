/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Ingridients from '@/components/Ingridients'
import Meals from '@/components/Meals'

Vue.use(Router)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ingridients/:id',
    name: 'Ingridients',
    component: Ingridients,
  },
  {
    path: '/meals/:id',
    name: 'Meals',
    component: Meals,
  },
]

// Create Vue Router Object
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

