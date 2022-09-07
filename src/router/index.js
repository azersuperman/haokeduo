import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage'
import Search from '@/views/Search'
import Consult from '@/views/Consult'
import My from '@/views/My'
import Land from '@/views/Land'
import Layout from '@/views/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Layout,
    children: [
      {
        name: 'cs',
        path: '/home',
        component: HomePage
      },
      {
        path: '/home/house',
        component: Search
      },
      {
        path: '/home/message',
        component: Consult
      },
      {
        path: '/home/profile',
        component: My
      }
    ]
  },
  {
    path: '/login',
    component: Land
  }
]

const router = new VueRouter({
  routes
})

export default router
