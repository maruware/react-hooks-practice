import React, { useReducer } from 'react'
import reducer, { State, Action } from './reducer'

const initialState = {
  count: 0
}

interface Value {
  state: State
  dispatch: React.Dispatch<Action>
}
const Store = React.createContext<Value>({ state: null, dispatch: null })

const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}

export { Store, Provider }
