import { ax } from '../axios'

// post article
export function postArticle<T = undefined> (
  params: IArticleItem
): Promise<Ajax.AjaxResponse<T>> {
  return ax.post<Ajax.AjaxResponse<T>>('/article', params)
          .then(res => res.data)
}

// get articles
export function getArticles<T = undefined> (): Promise<Ajax.AjaxResponse<T>> {
  return ax.get<Ajax.AjaxResponse<T>>('/article')
          .then(res => res.data)
}

// get articles for date
export function getAllArticles<T = undefined> (): Promise<Ajax.AjaxResponse<T>> {
  return ax.get<Ajax.AjaxResponse<T>>('/allArticle')
          .then(res => res.data)
}

// get article
export function getArticle<T = undefined> (
  id: string
): Promise<Ajax.AjaxResponse<T>> {
  return ax.get<Ajax.AjaxResponse<T>>(`/article/${id}`)
          .then(res => res.data)
}

// patch article state
export function patchArticle<T = undefined> (
  id: string
): Promise<Ajax.AjaxResponse<T>> {
  return ax.patch<Ajax.AjaxResponse<T>>(`/article/${id}`)
          .then(res => res.data)
}

// change article
export function putArticle<T = undefined> (
  id: string
): Promise<Ajax.AjaxResponse<T>> {
  return ax.put<Ajax.AjaxResponse<T>>(`/article/${id}`)
          .then(res => res.data)
}

// delete article
export function deleteArticle (
  id: string
): Promise<Ajax.AjaxResponse> {
  return ax.delete(`/article/${id}`)
          .then(res => res.data)
}