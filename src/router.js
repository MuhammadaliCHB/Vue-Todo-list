import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/todos',
    component: () => import('./views/Todo-Page')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
