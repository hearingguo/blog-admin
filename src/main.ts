// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './layout/App.vue'
// @ts-ignore
import router from './router/index'
import store from './store/index'

import * as ElementUi from 'element-ui'
import '../theme/index.css'
import './assets/styles/index.less'

Vue.config.productionTip = false

Vue.use(ElementUi)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
