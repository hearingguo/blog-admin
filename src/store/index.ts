import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './modules/auth'
import { option } from './modules/option'
import { link } from './modules/link'
import { tag } from './modules/tag'
import { classify } from './modules/classify'
import { article } from './modules/article'
import { comment } from './modules/comment'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    option,
    link,
    tag,
    classify,
    article,
    comment
  }
})
