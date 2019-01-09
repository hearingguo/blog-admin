/**
 * 
 * article Store
 * 
 */

import { ActionTree, MutationTree } from 'vuex'
import { articles } from '@/service/index'
import { respSuccess } from '@/utils/response';

export interface IArticleInfo {
  loading: boolean;
  submitLoading: boolean;
  articles: {
    list: IArticleItem[];
    pagination: IPagination;
  }
  currentRes: Ajax.AjaxResponse
}

const state: IArticleInfo = {
  loading: false,
  submitLoading: false,
  articles: {
    list: [],
    pagination: {
      cPage: 1,
      sPage: 10,
      tPage: 1,
      total: 1
    }
  },
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

  // get articles
  async getArticles (
    { commit },
    params?: IQuerys
  ) {
    commit('FETCH_DATA')
    const res = await articles.getArticles<IArticleItem[]>(params)
    if (res.code) commit('RECEIVE_ARTICLES', res)
  },

  // patch articles
  async patchArticle (
    { commit },
    params: IArticleState
  ) {
    commit('FETCH_DATA')
    const res = await articles.patchArticle(params)
    if (res.code) commit('FETCH_DATA_SUCCESS', res)
  },

  // delete article
  async deleteArticle (
    { commit },
    id: string
  ) {
    commit('FETCH_DATA')
    const res = await articles.deleteArticle(id)
    if (res.code) commit('FETCH_DATA_SUCCESS', res)
  }

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
  'RECEIVE_ARTICLES'(
    state: IArticleInfo,
    data: Ajax.AjaxResponse
  ) {
    state.loading = false
    state.articles = data.result
  }
}

export const article =  {
  namespaced: true,
  state,
  actions,
  mutations
}