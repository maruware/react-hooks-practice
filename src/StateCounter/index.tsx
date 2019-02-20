import React, { useState, useCallback } from 'react'

const StateCounter: React.FC = () => {
  const [count, setCount] = useState(0)

  const onClick = useCallback(() => {
    setCount(c => c + 1)
  }, [])

  return (
    <div>
      {count}
      <button onClick={onClick}>+1</button>
    </div>
  )
}

export default StateCounter
