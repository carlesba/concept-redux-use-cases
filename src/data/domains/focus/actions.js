import {SET_FOCUS} from './constants'

export const setFocus = (index) => {
  return {
    type: SET_FOCUS,
    payload: {index}
  }
}
