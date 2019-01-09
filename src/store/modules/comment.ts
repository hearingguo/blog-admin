/**
 * 
 * Comment Store
 * 
 */

import { ActionTree, MutationTree } from 'vuex'
import { comments } from '@/service/index'
import { respSuccess } from '@/utils/response';

export interface ICommentInfo {
  loading: boolean;
  submitLoading: boolean;
  comments: {
    list: ICommentItem[];
    pagination: IPagination;
  };
  currentRes: Ajax.AjaxResponse
}

const state: ICommentInfo = {
  loading: false,
  submitLoading: false,
  comments: {
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

const actions: ActionTree<ICommentInfo, any> = {

  // get comments
  async getComments (
    { commit },
    params?: IQuerys
  ) {
    commit('FETCH_DATA')
    const res = await comments.getComments<ICommentItem[]>(params)
    if (res.code) commit('RECEIVE_COMMENTS', res)
  },

  // put comment
  async putComment (
    { commit },
    params: ICommentItem
  ) {
    commit('FETCH_DATA')
    const res = await comments.putComment<ICommentItem>(params)
    if (res.code) commit('FETCH_DATA_SUCCESS', res)
  },

}

const mutations: MutationTree<ICommentInfo> = {
  'FETCH_DATA'(
    state: ICommentInfo
  ) {
    state.loading = true
  },
  'FETCH_DATA_SUCCESS'(
    state: ICommentInfo,
    res: Ajax.AjaxResponse
  ) {
    state.loading = false
    state.currentRes = res
    respSuccess(res.message)
  },
  'FETCH_DATA_WAITTING'(
    state: ICommentInfo
  ) {
    state.submitLoading = true
  },
  'RECEIVE_COMMENTS'(
    state: ICommentInfo,
    data: Ajax.AjaxResponse
  ) {
    state.loading = false
    state.comments = data.result
  }
}

export const comment =  {
  namespaced: true,
  state,
  actions,
  mutations
}