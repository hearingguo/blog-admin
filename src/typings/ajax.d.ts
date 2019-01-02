declare namespace Ajax {

  // axios 返回数据
  export interface AxiosResponse {
    data: AjaxResponse
  }

  // 请求接口数据
  export interface AjaxResponse<T = any> {

    /**
     * 状态
     * @type { boolean }
     */
    success: boolean,

    /**
     * 状态码
     * @type { number }
     */
    code: number,

    /**
     * 消息
     * @type { string }
     */
    message: string


    /**
     * 数据
     * @type { any }
     */
    result: T
  }

}
