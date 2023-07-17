import { useContext } from "react"
import { userAuth } from "../App"

const Com_t = () => {
    const{setUsername} =useContext(userAuth);
  return (
    <div>
      <input type="text" onChange={(e)=> setUsername(e.target.value)} placeholder="enter user name" />
    </div>
  )
}

export default Com_t
