import { ax } from '../axios'

// get tags 
export function getTags<T = undefined> (
  params?: IQuerys
): Promise<Ajax.AjaxResponse<T>> {
  const querys = params?params:{}
  return ax.get<Ajax.AjaxResponse<T>>('/tag', { params: querys })
          .then(res => res.data)
}

// change tag 
export function putTag<T = undefined> (
  params: ITagItem
): Promise<Ajax.AjaxResponse<T>> {
  const { title, description } = params
  return ax.put<Ajax.AjaxResponse<T>>(`/tag/${params._id}`, { title, description })
          .then(res => res.data)
}

// add tag 
export function postTag<T = undefined> (
  params: ITagItem
): Promise<Ajax.AjaxResponse<T>> {
  return ax.post<Ajax.AjaxResponse<T>>('/tag', params)
          .then(res => res.data)
}

// delete tag
export function deleteTag (
  id: string
): Promise<Ajax.AjaxResponse> {
  return ax.delete(`/tag/${id}`)
          .then(res => res.data)
}