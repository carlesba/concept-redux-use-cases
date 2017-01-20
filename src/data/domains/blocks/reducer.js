import {ADD_BLOCK, UPDATE_BLOCK} from './constants'

const actionMap = {
  [ADD_BLOCK]: (state, action) => {
    const {index} = action.payload
    return [
      state.slice(0, index),
      {type: undefined, value: ''},
      state.slice(index)
    ]
  },
  [UPDATE_BLOCK]: (state, action) => {
    const {index, value} = action.payload
    const block = state[index]
    const newBlock = {
      ...block,
      value
    }
    return [
      state.slice(0, index),
      newBlock,
      state.slice(index)
    ]
  }
}

export default function blockReducer (state = [], action = {}) {
  const reducer = actionMap[action.type]
  if (reducer) return reducer(action)
  return state
}
