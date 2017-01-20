import {ADD_BLOCK, UPDATE_BLOCK} from './constants'

export const addBlock = (index) => {
  return {
    type: ADD_BLOCK,
    payload: { index }
  }
}

export const updateBlock = (index, value) => {
  return {
    type: UPDATE_BLOCK,
    payload: { index, value }
  }
}
