import { ax } from '../axios'

// get options for website 
export function getOption<T = undefined> (): Promise<Ajax.AjaxResponse<T>> {
  return ax.get<Ajax.AjaxResponse<T>>('/option')
          .then(res => res.data)
}

// change options for website 
export function putOption<T = undefined> (
  params: IOption
): Promise<Ajax.AjaxResponse<T>> {
  return ax.put<Ajax.AjaxResponse<T>>('/option', params)
          .then(res => res.data)
}
