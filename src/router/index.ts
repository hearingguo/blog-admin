import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import login from '../components/page/Login.vue'
import index from '../components/page/Index.vue'
import article from '../components/page/article/Article.vue'
import release from '../components/page/article/Release.vue'
import Tags from '../components/page/tags/Tags.vue' 
import Comment from '../components/page/comment/Comment.vue' 
import Info from '../components/page/info/Info.vue' 

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'login',
    component: login,
    meta: { leaf: true, show: false }
  },
  {
    path: '/home',
    name: 'home',
    component: index,
    meta: { leaf: true, show: false }
  },
  {
    path: '/',
    name: '文章管理',
    component: index,
    meta: { leaf: false, show: true },
    children: [
      { path: '/article/index', component: article, name: '文章列表' },
      { path: '/article/release', component: release, name: '文章发布' }
    ]
  },
  {
    path: '/',
    name: '文章标签',
    component: index,
    meta: { leaf: true, show: true },
    children: [
      { path: '/tags', component: Tags, name: '文章标签' }
    ]
  },
  {
    path: '/',
    name: '评论',
    component: index,
    meta: { leaf: true, show: true },
    children: [
      { path: '/comment', component: Comment, name: '评论' }
    ]
  },
  {
    path: '/',
    name: '信息管理',
    component: index,
    meta: { leaf: true, show: true },
    children: [
      { path: '/info', component: Info, name: '信息管理' }
    ]
  }
]

const router: Router = new Router({
  mode: 'history',
  routes
})

export default router
