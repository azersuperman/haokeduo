import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/Layout'),
    children: [
      {
        name: 'cs',
        path: '/home',
        component: () => import('../views/HomePage')
      },
      {
        path: '/home/house',
        component: () => import('@/views/Search')
      },
      {
        path: '/home/message',
        component: () => import('@/views/Consult')
      },
      {
        path: '/home/profile',
        component: () => import('@/views/My')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Land')
  },
  {
    path: '/city',
    component: () => import('@/views/City')
  }
]

const router = new VueRouter({
  routes
})

export default router
