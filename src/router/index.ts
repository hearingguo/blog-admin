import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/page/Login.vue'
import index from '../components/page/Index.vue'
import article from '../components/page/article/Article.vue'
import release from '../components/page/article/Release.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: index
    },
    {
      path: '/',
      name: '文章管理',
      component: index,
      children: [
        { 
          path: '/article/index', 
          component: article, 
          name: '文章列表'
        },
        { 
          path: '/article/release', 
          component: release, 
          name: '发布文章'
        }
      ]
    },
  ]
})
