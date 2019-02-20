import React, { useContext, useCallback } from 'react'

import { Store } from '../store'

const DownButton: React.FC = () => {
  const { dispatch } = useContext(Store)
  const onClick = useCallback(() => {
    dispatch({ type: 'SUBTRACT', value: 2 })
  }, [])

  return <button onClick={onClick}>-2</button>
}

export default DownButton
