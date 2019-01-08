import { ax } from '../axios'

// get comments
export function getComments<T = undefined> (
  params?: IQuerys
): Promise<Ajax.AjaxResponse<T>> {
  const querys = params?params:{}
  return ax.get<Ajax.AjaxResponse<T>>('/comment', { params: querys})
          .then(res => res.data)
}

// post comment
export function postComment<T = undefined> (
  params: ICommentItem
): Promise<Ajax.AjaxResponse<T>> {
  return ax.post<Ajax.AjaxResponse<T>>('/comment', params)
          .then(res => res.data)
}

// change comment
export function putComment<T = undefined> (
  params: ICommentItem
): Promise<Ajax.AjaxResponse<T>> {
  const { _id, ...rest} = params
  return ax.put<Ajax.AjaxResponse<T>>(`/comment/${_id}`, rest)
          .then(res => res.data)
}

// delete comment
export function deleteComment (
  id: string
): Promise<Ajax.AjaxResponse> {
  return ax.delete(`/comment/${id}`)
          .then(res => res.data)
}
