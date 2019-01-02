/**
 * 
 * Option Store
 * 
 */

import { ActionTree, MutationTree } from 'vuex'
import { options } from '@/service/index'

export interface IOptionInfo {
  loading: boolean;
  submitLoading: boolean;
  info: IOption;
}

const state: IOptionInfo = {
  loading: false,
  submitLoading: false,
  info: {
    title: '',
    subTitle: '',
    keywords: '',
    url: '',
    desc: '',
    email: '',
    icp: ''
  }
}

const actions: ActionTree<IOptionInfo, any> = {

  // get option info
  async getOption (
    { commit }
  ) {
    commit('FETCH_DATA')
    const res = await options.getOption()
    commit('RECEIVE_OPTION', res)
  },

  // get auth info
  async putOption (
    { commit },
    params: IOption
  ) {
    commit('FETCH_DATA_WAITTING')
    const res = await options.putOption(params)
    commit('RECEIVE_OPTION', res)
  }

}

const mutations: MutationTree<IOptionInfo> = {
  'FETCH_DATA'(
    state: IOptionInfo
  ) {
    state.loading = true
  },
  'FETCH_DATA_WAITTING'(
    state: IOptionInfo
  ) {
    state.submitLoading = true
  },
  'RECEIVE_OPTION'(
    state: IOptionInfo,
    data: Ajax.AjaxResponse
  ) {
    state.loading = false
    state.submitLoading = false
    state.info = data.result
  }
}

export const option =  {
  namespaced: true,
  state,
  actions,
  mutations
}