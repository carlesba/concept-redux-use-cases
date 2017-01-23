import {SHOW_NOTIFICATION, CLOSE_NOTIFICATION} from './constants'

export const showNotification = (message) => {
  return {
    type: SHOW_NOTIFICATION,
    payload: {message}
  }
}

export const closeNotification = (message) => {
  return {
    type: CLOSE_NOTIFICATION,
    payload: {}
  }
}
