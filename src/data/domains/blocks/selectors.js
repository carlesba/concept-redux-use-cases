export function getValues (state) {
  return state.map((block) => block.value)
}

export function getTypes (state) {
  return state.map((block) => block.type)
}
