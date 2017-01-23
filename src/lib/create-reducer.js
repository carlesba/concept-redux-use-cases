const createReducer = (initialState, actionMap) => (state = initialState, action) => {
  const {actions} = action
  if (actions) {
    const batchedAction = actions.find(
      (stepAction) => actionMap[stepAction.type]
    )
    if (batchedAction) {
      const reducer = actionMap[batchedAction.type]
      return reducer(state, batchedAction)
    } else {
      return state
    }
  } else {
    const reducer = actionMap[action.type]
    if (reducer) return reducer(state, action)
    return state
  }
}

export default createReducer
