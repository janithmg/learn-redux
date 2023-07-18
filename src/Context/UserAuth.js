import { createContext, useState } from "react"

export const userData = createContext({});

const UserAuth = ({children}) => {
    const [userDetails, setuserDetails] = useState({
        name:'',
        password:'',
        userId:'',
    });
  return (
    <userData.Provider value={{userDetails, setuserDetails}}>
      {children}
    </userData.Provider>
  )
}

export default UserAuth
