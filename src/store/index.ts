import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './modules/auth'
import { option } from './modules/option'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    option
  }
})
