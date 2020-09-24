import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('views/login/Index')
  }, {
    path: '/',
    component: () => import('views/layout/Index'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('views/home/Index')
      }, {
        path: 'qa',
        name: 'Qa',
        component: () => import('views/qa/Index')
      }, {
        path: 'video',
        name: 'Video',
        component: () => import('views/video/Index')
      }, {
        path: 'profile',
        name: 'Profile',
        component: () => import('views/profile/Index')
      }
    ]
  }
]

const router = new VueRouter({ routes })

export default router
