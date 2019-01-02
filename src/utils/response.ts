import { Notification } from 'element-ui'

/**
 * error
 * @param message { string}
 */
export function respError (message: string): void {
  Notification.error({
    title: '错误',
    message
  })
}

/**
 * success
 * @param message { string }
 */
export function respSuccess (message: string): void {
  Notification.success({
    title: '成功',
    duration: 2000,
    message
  })
}
