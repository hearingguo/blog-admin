import { ax } from '../axios'

// get auth information
export function signin<T = undefined> (
  params: ISignParams
): Promise<Ajax.AjaxResponse<T>> {
  return ax.post<Ajax.AjaxResponse<T>>('/signin', params)
          .then(res => res.data)
}

// get auth information
export function getAuth<T = undefined> (): Promise<Ajax.AjaxResponse<T>> {
  return ax.get<Ajax.AjaxResponse<T>>('/auth')
          .then(res => res.data)
}

// change auth information
export function putAuth<T = undefined> (
  params: IAuthParams
): Promise<Ajax.AjaxResponse<T>> {
  return ax.put<Ajax.AjaxResponse<T>>('/auth', params)
          .then(res => res.data)
}