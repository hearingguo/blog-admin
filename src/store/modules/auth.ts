/**
 * 
 * Auth Store
 * 
 */

import { ActionTree, MutationTree } from 'vuex'
import { auths } from '@/service/index'

export interface IAuthInfo {
  loading: boolean;
  submitLoading: boolean;
  info: IAuth;
  login: {
    name: string;
    lifeTime: string;
  };
}

const state: IAuthInfo = {
  loading: false,
  submitLoading: false,
  info: {
    avatar: '',
    username: '',
    nickname: '',
    signature: ''
  },
  login: {
    name: '',
    lifeTime: ''
  }
}

const actions: ActionTree<IAuthInfo, any> = {

  // sign in
  async login (
    { commit },
    params: ISignParams
  ) {
    commit('FETCH_DATA_WAITTING')
    const res = await auths.signin<IAuth>(params)
    commit('SIGN_SUCCESS', res)
  },

  // get auth info
  async getAuth (
    { commit }
  ) {
    commit('FETCH_DATA')
    const res = await auths.getAuth<IAuth>()
    commit('RECEIVE_AUTH', res)
  },

  // get auth info
  async putAuth (
    { commit },
    params: IAuthParams
  ) {
    commit('FETCH_DATA_WAITTING')
    const res = await auths.putAuth<IAuth>(params)
    commit('RECEIVE_AUTH', res)
  }

}

const mutations: MutationTree<IAuthInfo> = {
  'FETCH_DATA'(
    state: IAuthInfo
  ) {
    state.loading = true
    state.submitLoading = true
  },
  'FETCH_DATA_WAITTING'(
    state: IAuthInfo
  ) {
    state.submitLoading = true
  },
  'RECEIVE_AUTH'(
    state: IAuthInfo,
    data: Ajax.AjaxResponse
  ) {
    state.loading = false
    state.submitLoading = false
    state.info = data.result
  },
  'SIGN_SUCCESS'(
    state: IAuthInfo,
    data: Ajax.AjaxResponse
  ) {
    state.submitLoading = false
    state.login = data.result
  }
}

export const auth =  {
  namespaced: true,
  state,
  actions,
  mutations
}