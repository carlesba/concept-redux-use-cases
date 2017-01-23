import createReducer from '../../../lib/create-reducer'
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

export default createReducer({message: null}, actionMap)
