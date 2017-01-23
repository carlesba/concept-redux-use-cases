import * as blockSelector from './domains/blocks/selectors'
import * as focusSelector from './domains/focus/selectors'
import * as notificationSelector from './domains/notification/selectors'

export const getValues = (state) => blockSelector.getValues(state.blocks)
export const getTypes = (state) => blockSelector.getTypes(state.blocks)

export const getFocusedIndex = (state) => focusSelector.getFocusedIndex(state.focus)

export const getCurrentValue = (state) => {
  const currentIndex = getFocusedIndex(state)
  const values = getValues(state)
  return values[currentIndex]
}

export const getNotificationMessage = (state) =>
  notificationSelector.getNotificationMessage(state.notification)
