/**
 * 
 * Classify Store
 * 
 */

import { ActionTree, MutationTree } from 'vuex'
import { classifys } from '@/service/index'
import { respSuccess } from '@/utils/response';

export interface IClassifyInfo {
  loading: boolean;
  submitLoading: boolean;
  info: {
    list: IClassifyItem[],
    pagination: IPagination
  };
  currentRes: Ajax.AjaxResponse
}

const state: IClassifyInfo = {
  loading: false,
  submitLoading: false,
  info: {
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

const actions: ActionTree<IClassifyInfo, any> = {

  // get links
  async getClassifys (
    { commit },
    params?: IQuerys
  ) {
    commit('FETCH_DATA')
    const res = await classifys.getClassifys<IClassifyItem[]>(params)
    if (res.code) commit('RECEIVE_CLASSIFYS', res)
  },

  // change link
  async putClassify(
    { commit },
    params: IClassifyItem
  ) {
    commit('FETCH_DATA_WAITTING')
    const res = await classifys.putClassify<IClassifyItem>(params)
    if (res.code) commit('FETCH_DATA_SUCCESS', res)
  },

  // add link
  async postClassify (
    { commit },
    params: IClassifyItem
  ) {
    commit('FETCH_DATA_WAITTING')
    const res = await classifys.postClassify<IClassifyItem>(params)
    if (res.code) commit('FETCH_DATA_SUCCESS', res)
  },

  //delete link
  async deleteClassify (
    { commit },
    id: string
  ) {
    commit('FETCH_DATA_WAITTING')
    const res = await classifys.deleteClassify(id)
    if (res.code) commit('FETCH_DATA_SUCCESS', res)
  }

}

const mutations: MutationTree<IClassifyInfo> = {
  'FETCH_DATA'(
    state: IClassifyInfo
  ) {
    state.loading = true
  },
  'FETCH_DATA_SUCCESS'(
    state: IClassifyInfo,
    res: Ajax.AjaxResponse
  ) {
    state.loading = false
    state.currentRes = res
    respSuccess(res.message)
  },
  'FETCH_DATA_WAITTING'(
    state: IClassifyInfo
  ) {
    state.submitLoading = true
  },
  'RECEIVE_CLASSIFYS'(
    state: IClassifyInfo,
    data: Ajax.AjaxResponse
  ) {
    state.loading = false
    state.submitLoading = false
    state.info = data.result
  }
}

export const classify =  {
  namespaced: true,
  state,
  actions,
  mutations
}