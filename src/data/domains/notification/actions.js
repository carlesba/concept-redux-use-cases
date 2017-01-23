import {SHOW_NOTIFICATION} from './constants'

export const showNotification = (message) => {
  return {
    type: SHOW_NOTIFICATION,
    payload: {message}
  }
}
