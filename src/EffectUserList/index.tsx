import React, { useEffect, useState } from 'react'

interface User {
  id: number
  name: string
  username: string
}

const EffectUserList: React.FC = () => {
  const [users, setUsers] = useState([] as User[])
  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(r => r.json())
        .then(data => setUsers(data as User[]))
    }, 1000)
  }, [])

  return users.length === 0 ? (
    <span>Loading...</span>
  ) : (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default EffectUserList
