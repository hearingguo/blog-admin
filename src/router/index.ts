import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/page/Login.vue'
import Index from '../components/page/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Index
    }
  ]
})
