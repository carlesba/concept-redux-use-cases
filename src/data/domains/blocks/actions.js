import {ADD_BLOCK, UPDATE_BLOCK} from './constants'

export const addBlock = () => {
  return {
    type: ADD_BLOCK,
    payload: {}
  }
}

export const updateBlock = (index, value) => {
  return {
    type: UPDATE_BLOCK,
    payload: { index, value }
  }
}
