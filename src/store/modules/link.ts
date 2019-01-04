/**
 * 
 * Link Store
 * 
 */

import { ActionTree, MutationTree } from 'vuex'
import { links } from '@/service/index'
import { respSuccess } from '@/utils/response';

export interface ILinkInfo {
  loading: boolean;
  submitLoading: boolean;
  info: {
    list: ILinkItem[],
    pagination: IPagination
  };
  currentRes: Ajax.AjaxResponse
}

const state: ILinkInfo = {
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

const actions: ActionTree<ILinkInfo, ILinkInfo> = {

  // get links
  async getLinks (
    { commit },
    params?: IQuerys
  ) {
    commit('FETCH_DATA')
    const res = await links.getLinks<ILinkItem[]>(params)
    if (res.code) commit('RECEIVE_LINKS', res)
  },

  // change link
  async putLink(
    { commit },
    params: ILinkItem
  ) {
    commit('FETCH_DATA_WAITTING')
    const res = await links.putLink<ILinkItem>(params)
    if (res.code) commit('FETCH_DATA_SUCCESS', res)
  },

  // add link
  async postLink (
    { commit },
    params: ILinkItem
  ) {
    commit('FETCH_DATA_WAITTING')
    const res = await links.postLink<ILinkItem>(params)
    if (res.code) commit('FETCH_DATA_SUCCESS', res)
  },

  //delete link
  async deleteLink (
    { commit },
    id: string
  ) {
    commit('FETCH_DATA_WAITTING')
    const res = await links.deleteLink(id)
    if (res.code) commit('FETCH_DATA_SUCCESS', res)
  }

}

const mutations: MutationTree<ILinkInfo> = {
  'FETCH_DATA'(
    state: ILinkInfo
  ) {
    state.loading = true
  },
  'FETCH_DATA_SUCCESS'(
    state: ILinkInfo,
    res: Ajax.AjaxResponse
  ) {
    state.loading = false
    state.currentRes = res
    respSuccess(res.message)
  },
  'FETCH_DATA_WAITTING'(
    state: ILinkInfo
  ) {
    state.submitLoading = true
  },
  'RECEIVE_LINKS'(
    state: ILinkInfo,
    data: Ajax.AjaxResponse
  ) {
    state.loading = false
    state.submitLoading = false
    state.info = data.result
  }
}

export const link =  {
  namespaced: true,
  state,
  actions,
  mutations
}