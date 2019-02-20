import React, { useContext, useCallback } from 'react'

import { Store } from './store'

const Counter = () => {
  const { state, dispatch } = useContext(Store)
  const onClick = useCallback(() => {
    dispatch({ type: 'ADD', value: 3 })
  }, [])

  return (
    <div>
      {state.count}
      <button onClick={onClick}>Raise</button>
    </div>
  )
}

export default Counter
