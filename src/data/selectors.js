import * as blockSelector from './domains/blocks/selectors'
import * as focusSelector from './domains/focus/selectors'

export const getValues = (state) => blockSelector.getValues(state.blocks)
export const getTypes = (state) => blockSelector.getTypes(state.blocks)

export const getFocusedIndex = (state) => focusSelector.getFocusedIndex(state.focus)

export const getCurrentValue = (state) => {
  const currentIndex = getFocusedIndex(state)
  const values = getValues(state)
  return values[currentIndex]
}
