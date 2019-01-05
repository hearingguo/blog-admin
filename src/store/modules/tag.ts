/**
 * 
 * Tag Store
 * 
 */

import { ActionTree, MutationTree } from 'vuex'
import { tags } from '@/service/index'
import { respSuccess } from '@/utils/response';

export interface ITagInfo {
  loading: boolean;
  submitLoading: boolean;
  info: {
    list: ITagItem[],
    pagination: IPagination
  };
  currentRes: Ajax.AjaxResponse
}

const state: ITagInfo = {
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

const actions: ActionTree<ITagInfo, any> = {

  // get tags
  async getTags (
    { commit },
    params?: IQuerys
  ) {
    commit('FETCH_DATA')
    const res = await tags.getTags<ITagItem[]>(params)
    if (res.code) commit('RECEIVE_TAGS', res)
  },

  // change tag
  async putTag(
    { commit },
    params: ITagItem
  ) {
    commit('FETCH_DATA_WAITTING')
    const res = await tags.putTag<ITagItem>(params)
    if (res.code) commit('FETCH_DATA_SUCCESS', res)
  },

  // add tag
  async postTag (
    { commit },
    params: ITagItem
  ) {
    commit('FETCH_DATA_WAITTING')
    const res = await tags.postTag<ITagItem>(params)
    if (res.code) commit('FETCH_DATA_SUCCESS', res)
  },

  //delete tag
  async deleteTag (
    { commit },
    id: string
  ) {
    commit('FETCH_DATA_WAITTING')
    const res = await tags.deleteTag(id)
    if (res.code) commit('FETCH_DATA_SUCCESS', res)
  }

}

const mutations: MutationTree<ITagInfo> = {
  'FETCH_DATA'(
    state: ITagInfo
  ) {
    state.loading = true
  },
  'FETCH_DATA_SUCCESS'(
    state: ITagInfo,
    res: Ajax.AjaxResponse
  ) {
    state.loading = false
    state.currentRes = res
    respSuccess(res.message)
  },
  'FETCH_DATA_WAITTING'(
    state: ITagInfo
  ) {
    state.submitLoading = true
  },
  'RECEIVE_TAGS'(
    state: ITagInfo,
    data: Ajax.AjaxResponse
  ) {
    state.loading = false
    state.submitLoading = false
    state.info = data.result
  }
}

export const tag =  {
  namespaced: true,
  state,
  actions,
  mutations
}