// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './layout/App.vue'
import router from './router/index'
import store from './store/index'

import ElementUi from 'element-ui'
import '../theme/index.css'

import '@/assets/styles/index.less'

Vue.config.productionTip = false

Vue.use(ElementUi, { size: 'medium', zIndex: 3000 })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
