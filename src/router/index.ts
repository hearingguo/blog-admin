import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// login
import login from '@/pages/Login.vue'

// home
import Home from '@/pages/home/Home.vue'
import Index from '@/pages/Index.vue'

// article manage
import Article from '@/pages/article/Article.vue'
import Release from '@/pages/article/Release.vue'

// tag manage
import Tags from '@/pages/tag/index.vue' 

// comments
import Comment from '@/pages/comment/Comment.vue' 

// links
import Links from '@/pages/links/Links.vue'

// info for myself
import Info from '@/pages/info/Info.vue' 

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: { leaves: true, show: false }
  },
  {
    path: '/',
    name: '首页',
    component: Index,
    meta: { requiresAuth: true, leaves: true, icon: 'icon-home', show: true },
    children: [
      { path: '/', component: Home, name: '首页' }
    ]
  },
  {
    path: '/',
    name: '文章管理',
    component: Index,
    meta: { requiresAuth: true, leaves: false, icon: 'icon-article',  show: true },
    children: [
      { path: '/article/index', component: Article, name: '文章列表', meta: { icon: 'icon-list'} },
      { path: '/article/release/:id?', component: Release, name: '文章发布', meta: { icon: 'icon-release'} }
    ]
  },
  {
    path: '/',
    name: '文章分类',
    component: Index,
    meta: { requiresAuth: true, leaves: true, icon: 'icon-classification', show: true },
    children: [
      { path: '/classify', component: Tags, name: '文章分类' }
    ]
  },
  {
    path: '/',
    name: '文章标签',
    component: Index,
    meta: { requiresAuth: true, leaves: true, icon: 'icon-tags', show: true },
    children: [
      { path: '/tag', component: Tags, name: '文章标签' }
    ]
  },
  {
    path: '/',
    name: '关于评论',
    component: Index,
    meta: { requiresAuth: true, leaves: true, icon: 'icon-comment', show: true },
    children: [
      { path: '/comment', component: Comment, name: '评论' }
    ]
  },
  {
    path: '/',
    name: '友情链接',
    component: Index,
    meta: { requiresAuth: true, leaves: true, icon: 'icon-links', show: true },
    children: [
      { path: '/links', component: Links, name: '友情链接' }
    ]
  },
  {
    path: '/',
    name: '信息管理',
    component: Index,
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
