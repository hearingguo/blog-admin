import { ax } from '../axios'

// get auth information
export function signin<T = IAuth> (
  params: ISignParams
): Promise<Ajax.AjaxResponse<T>> {
  return ax.post<Ajax.AjaxResponse<T>>('/signin', params)
          .then(res => res.data)
}

// get auth information
export function getAuth<T = IAuth> (): Promise<Ajax.AjaxResponse<T>> {
  return ax.get<Ajax.AjaxResponse<T>>('/auth')
          .then(res => res.data)
}

// change auth information
export function putAuth<T = IAuth> (
  params: IAuthParams
): Promise<Ajax.AjaxResponse<T>> {
  return ax.put<Ajax.AjaxResponse<T>>('/auth', params)
          .then(res => res.data)
}