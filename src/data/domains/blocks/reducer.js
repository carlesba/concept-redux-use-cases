import createReducer from '../../../lib/create-reducer'
import {ADD_BLOCK, UPDATE_BLOCK} from './constants'

const actionMap = {
  [ADD_BLOCK]: (state, action) => {
    return [
      ...state,
      {type: undefined, value: ''}
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
      ...state.slice(0, index),
      newBlock,
      ...state.slice(index + 1)
    ]
  }
}

export default createReducer([], actionMap)
