import React, { useContext, useCallback } from 'react'

import { Store } from '../store'

const UpButton: React.FC = () => {
  const { dispatch } = useContext(Store)
  const onClick = useCallback(() => {
    dispatch({ type: 'ADD', value: 3 })
  }, [])

  return <button onClick={onClick}>+3</button>
}

export default UpButton
