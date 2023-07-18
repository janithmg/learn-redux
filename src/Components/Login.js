import { useContext, useRef } from "react";
import { userData } from "../Context/UserAuth";

const Login = () => {
  const { userDetals, setUserDetals } = useContext(userData);

  const usernameRef = useRef();
  const passwordRef = useRef();
const submitHandle = ()=>{
    setUserDetals(pre=>({
        ...pre,
        userId: usernameRef.current.value,
        password: passwordRef.current.value,
        name: usernameRef.current.value
    }))
}

  return (
    <div>
      {userDetals.userId ? (
        <p>You are logged, Your name is : {userDetals.name}</p>
      ) : (
        <>
          <span>Username : </span>
          <input ref={usernameRef} type="text" placeholder="username" />
          <br />
          <span>Password : </span>
          <input ref={passwordRef} type="password" placeholder="password" />
          <br/>
          <button onClick={submitHandle}>Submit</button>
        </>
      )}
    </div>
  );
};

export default Login;
