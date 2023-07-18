import React from 'react'
import UserAuth from './Context/UserAuth'
import Login from './Components/Login'

const App = () => {
  return (
    <UserAuth>
      <Login/>
    </UserAuth>
  )
}

export default App
