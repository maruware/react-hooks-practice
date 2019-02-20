import React, { useContext, useCallback } from 'react'

import { Store } from '../store'

interface Props {
  num: number
}
const UpButton: React.FC<Props> = ({ num }) => {
  const { dispatch } = useContext(Store)
  const onClick = useCallback(() => {
    dispatch({ type: 'ADD', value: num })
  }, [])

  return <button onClick={onClick}>+{num}</button>
}

export default UpButton
