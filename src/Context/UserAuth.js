import { createContext, useState } from "react"

export const userData = createContext({});

const UserAuth = ({children}) => {
    const [userDetals, setUserDetals] = useState({
        name:'',
        password:'',
        userId:'',
    });
  return (
    <userData.Provider value={{userDetals, setUserDetals}}>
      {children}
    </userData.Provider>
  )
}

export default UserAuth
