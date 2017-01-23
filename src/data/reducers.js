import {combineReducers} from 'redux'
import blocks from './domains/blocks/reducer'
import focus from './domains/focus/reducer'
import notification from './domains/notification/reducer'

export default combineReducers({
  blocks,
  focus,
  notification
})
