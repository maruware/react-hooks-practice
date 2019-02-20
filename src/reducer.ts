export interface State {
  count: number
}

export interface Action {
  type: string
  value: number
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        count: state.count + action.value
      }
    case 'SUBTRACT':
      return {
        ...state,
        count: state.count - action.value
      }
    default:
      return state
  }
}

export default reducer
