import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import login from '@/components/login'
import dashboard from '@/components/dashboard'
import VueLocalStorage from 'vue-localstorage'

Vue.use(Router)
Vue.use(VueLocalStorage)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    }
  ]
})
