import * as blockSelector from './domains/blocks/selectors'

export const getValues = (state) => blockSelector.getValues(state.blocks)
export const getTypes = (state) => blockSelector.getTypes(state.blocks)
