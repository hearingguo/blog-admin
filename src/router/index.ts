import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// login
import login from '@/pages/Login.vue'
import index from '@/pages/Index.vue'

// article manage
import article from '@/pages/article/Article.vue'
import release from '@/pages/article/Release.vue'

// tag manage
import Tags from '@/pages/tags/Tags.vue' 

// comments
import Comment from '@/pages/comment/Comment.vue' 

// info for myself
import Info from '@/pages/info/Info.vue' 

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'login',
    component: login,
    meta: { leaves: true, show: false }
  },
  {
    path: '/home',
    name: 'home',
    component: index,
    meta: { requiresAuth: true, leaves: true, show: false }
  },
  {
    path: '/',
    name: '文章管理',
    component: index,
    meta: { requiresAuth: true, leaves: false, icon: 'icon-article',  show: true },
    children: [
      { path: '/article/index', component: article, name: '文章列表', meta: { icon: 'icon-list'}},
      { path: '/article/release', component: release, name: '文章发布', meta: { icon: 'icon-release'}}
    ]
  },
  {
    path: '/',
    name: '文章标签',
    component: index,
    meta: { requiresAuth: true, leaves: true, icon: 'icon-tags', show: true },
    children: [
      { path: '/tags', component: Tags, name: '文章标签' }
    ]
  },
  {
    path: '/',
    name: '评论',
    component: index,
    meta: { requiresAuth: true, leaves: true, icon: 'icon-comment', show: true },
    children: [
      { path: '/comment', component: Comment, name: '评论' }
    ]
  },
  {
    path: '/',
    name: '信息管理',
    component: index,
    meta: { requiresAuth: true, leaves: true, icon: 'icon-setting', show: true },
    children: [
      { path: '/info', component: Info, name: '信息管理' }
    ]
  }
]

const router: Router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(transition => {
  NProgress.done()
})

export default router
