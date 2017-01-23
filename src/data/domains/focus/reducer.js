import {SET_FOCUS} from './constants'

const actionMap = {
  [SET_FOCUS]: (state, action) => {
    const {index} = action.payload
    return index
  }
}

export default function focusReducer (state = 0, action = {}) {
  const reducer = actionMap[action.type]
  if (reducer) return reducer(state, action)
  return state
}
