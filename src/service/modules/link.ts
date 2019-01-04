import { ax } from '../axios'

// get links 
export function getLinks<T = undefined> (
  params?: IQuerys
): Promise<Ajax.AjaxResponse<T>> {
  const querys = params?params:{}
  return ax.get<Ajax.AjaxResponse<T>>('/link', { params: querys })
          .then(res => res.data)
}

// change link 
export function putLink<T = undefined> (
  params: ILinkItem
): Promise<Ajax.AjaxResponse<T>> {
  const { username, url } = params
  return ax.put<Ajax.AjaxResponse<T>>(`/link/${params._id}`, { username, url })
          .then(res => res.data)
}

// add link 
export function postLink<T = undefined> (
  params: ILinkItem
): Promise<Ajax.AjaxResponse<T>> {
  return ax.post<Ajax.AjaxResponse<T>>('/link', params)
          .then(res => res.data)
}

// delete link 
export function deleteLink (
  id: string
): Promise<Ajax.AjaxResponse> {
  return ax.delete(`/link/${id}`)
          .then(res => res.data)
}