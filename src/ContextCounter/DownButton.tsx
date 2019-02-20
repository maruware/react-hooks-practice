import React, { useContext, useCallback } from 'react'

import { Store } from '../store'

interface Props {
  num: number
}
const DownButton: React.FC<Props> = ({ num }) => {
  const { dispatch } = useContext(Store)
  const onClick = useCallback(() => {
    dispatch({ type: 'SUBTRACT', value: num })
  }, [])

  return <button onClick={onClick}>-{num}</button>
}

export default DownButton
