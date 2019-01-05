import { ax } from '../axios'

// get classifys 
export function getClassifies<T = undefined> (
  params?: IQuerys
): Promise<Ajax.AjaxResponse<T>> {
  const querys = params?params:{}
  return ax.get<Ajax.AjaxResponse<T>>('/classify', { params: querys })
          .then(res => res.data)
}

// change classify 
export function putClassify<T = undefined> (
  params: IClassifyItem
): Promise<Ajax.AjaxResponse<T>> {
  const { title, description } = params
  return ax.put<Ajax.AjaxResponse<T>>(`/classify/${params._id}`, { title, description })
          .then(res => res.data)
}

// add classify 
export function postClassify<T = undefined> (
  params: IClassifyItem
): Promise<Ajax.AjaxResponse<T>> {
  return ax.post<Ajax.AjaxResponse<T>>('/classify', params)
          .then(res => res.data)
}

// delete classify 
export function deleteClassify (
  id: string
): Promise<Ajax.AjaxResponse> {
  return ax.delete(`/classify/${id}`)
          .then(res => res.data)
}