import {combineReducers} from 'redux'
import blocks from './domains/blocks/reducer'
import focus from './domains/focus/reducer'

export default combineReducers({
  blocks,
  focus
})
