/**
 * 
 * Auth Store
 * 
 */

import { ActionTree, MutationTree } from 'vuex'
import { auths } from '@/service/index'
import { respSuccess } from '@/utils/response';

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
    if(res.code) {
      window.localStorage.setItem('TOKEN', JSON.stringify(res.result))
      commit('SIGN_SUCCESS', res)
    }
  },

  // get auth info
  async getAuth (
    { commit }
  ) {
    commit('FETCH_DATA')
    const res = await auths.getAuth<IAuth>()
    if(res.code) commit('RECEIVE_AUTH', {
      res,
      isEdit: false
    })
  },

  // get auth info
  async putAuth (
    { commit },
    params: IAuthParams
  ) {
    commit('FETCH_DATA_WAITTING')
    const res = await auths.putAuth<IAuth>(params)
    if(res.code) commit('RECEIVE_AUTH', {
      res,
      isEdit: true
    })
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
    data: {
      res: Ajax.AjaxResponse,
      isEdit?: boolean
    }
  ) {
    state.loading = false
    state.submitLoading = false
    state.info = data.res.result
    data.isEdit && respSuccess(data.res.message)
  },
  'SIGN_SUCCESS'(
    state: IAuthInfo,
    data: Ajax.AjaxResponse
  ) {
    state.submitLoading = false
    state.login = data.result
    respSuccess(data.message)
  }
}

export const auth =  {
  namespaced: true,
  state,
  actions,
  mutations
}