/**
 * 
 * Option Store
 * 
 */

import { ActionTree, MutationTree } from 'vuex'
import { options } from '@/service/index'
import { respSuccess } from '@/utils/response';

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
    const res = await options.getOption<IOption>()
    if(res.code) commit('RECEIVE_OPTION', {
      res,
      isEdit: false
    })
  },

  // get auth info
  async putOption (
    { commit },
    params: IOption
  ) {
    commit('FETCH_DATA_WAITTING')
    const res = await options.putOption<IOption>(params)
    if(res.code) commit('RECEIVE_OPTION', {
      res,
      isEdit: true
    })
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
    data: {
      res: Ajax.AjaxResponse,
      isEdit?: boolean
    }
  ) {
    state.loading = false
    state.submitLoading = false
    state.info = data.res.result
    data.isEdit && respSuccess(data.res.message)
  }
}

export const option =  {
  namespaced: true,
  state,
  actions,
  mutations
}