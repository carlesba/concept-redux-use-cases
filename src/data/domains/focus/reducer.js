import createReducer from '../../../lib/create-reducer'
import {SET_FOCUS} from './constants'

const actionMap = {
  [SET_FOCUS]: (state, action) => {
    const {index} = action.payload
    return index
  }
}

export default createReducer(0, actionMap)
