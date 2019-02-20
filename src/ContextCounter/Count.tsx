import React, { useContext } from 'react'

import { Store } from '../store'

const Counter: React.FC = () => {
  const { state } = useContext(Store)

  return <div>{state.count}</div>
}

export default Counter
