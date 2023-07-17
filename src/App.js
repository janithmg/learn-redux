import { useState, createContext } from "react"
import Com_f from "./Components/Com_f"

export const userAuth = createContext({});

const App = () => {
  const [username, setUsername] = useState('');
  return (
    <userAuth.Provider value={{
      username, setUsername
    }}>
      <h1>App {username}</h1>
     <Com_f />
    </userAuth.Provider>
  )
}

export default App
