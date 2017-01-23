import {SHOW_NOTIFICATION, CLOSE_NOTIFICATION} from './constants'

const actionMap = {
  [SHOW_NOTIFICATION]: (state, action) => {
    const {message} = action.payload
    return {
      message
    }
  },
  [CLOSE_NOTIFICATION]: (state) => {
    return {message: null}
  }
}

export default function notificationReducer (state = {message: null}, action = {}) {
  const reducer = actionMap[action.type]
  if (reducer) return reducer(state, action)
  return state
}
