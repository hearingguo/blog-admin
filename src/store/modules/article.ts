/**
 * 
 * article Store
 * 
 */

import { ActionTree, MutationTree } from 'vuex'
import { articles } from '@/service/index'
import { respSuccess } from '@/utils/response';
import { getArticle } from '@/service/modules/article';

export interface IArticleInfo {
  loading: boolean;
  submitLoading: boolean;
  allArticles: IArticleItem[]
  currentRes: Ajax.AjaxResponse
}

const state: IArticleInfo = {
  loading: false,
  submitLoading: false,
  allArticles: [],
  currentRes: {
    success: false,
    code: 0,
    message: '',
    result: null
  }
}

const actions: ActionTree<IArticleInfo, any> = {

  // post article
  async postArticle (
    { commit },
    params: IArticleItem
  ) {
    commit('FETCH_DATA')
    const res = await articles.postArticle<IArticleItem>(params)
    if (res.code) commit('FETCH_DATA_SUCCESS', res)
  },

  // get article
  async getArticle (
    { commit },
    id: string
  ) {
    commit('FETCH_DATA')
    const res = await articles.getArticle<IArticleItem>(id)
    if (res.code) commit('FETCH_DATA_SUCCESS', res)
  },

  // put article
  async putArticle (
    { commit },
    params: IArticleItem
  ) {
    commit('FETCH_DATA')
    const res = await articles.putArticle<IArticleItem>(params)
    if (res.code) commit('FETCH_DATA_SUCCESS', res)
  },

  // // post article
  // async getAllArticles (
  //   { commit }
  // ) {
  //   commit('FETCH_DATA')
  //   const res = await articles.getAllArticles<IArticleItem[]>()
  //   if (res.code) commit('RECEIVE_ALL_ARTICLES', res)
  // },


}

const mutations: MutationTree<IArticleInfo> = {
  'FETCH_DATA'(
    state: IArticleInfo
  ) {
    state.loading = true
  },
  'FETCH_DATA_SUCCESS'(
    state: IArticleInfo,
    res: Ajax.AjaxResponse
  ) {
    state.loading = false
    state.currentRes = res
    respSuccess(res.message)
  },
  'FETCH_DATA_WAITTING'(
    state: IArticleInfo
  ) {
    state.submitLoading = true
  },
  'RECEIVE_ALL_ARTICLES'(
    state: IArticleInfo,
    data: Ajax.AjaxResponse
  ) {
    state.loading = false
    state.submitLoading = false
    state.allArticles = data.result
  }
}

export const article =  {
  namespaced: true,
  state,
  actions,
  mutations
}