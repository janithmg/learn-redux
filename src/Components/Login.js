import { useContext, useRef } from "react";
import { userData } from "../Context/UserAuth";
import {submitHandle} from '../Utils/authValidate'

const Login = () => {
  const { userDetails, setuserDetails } = useContext(userData);

  const usernameRef = useRef();
  const passwordRef = useRef();


  return (
    <div>
      {userDetails.userId ? (
        <p>You are logged, Your name is : {userDetails.name}</p>
      ) : (
        <>
          <span>Username : </span>
          <input ref={usernameRef} type="text" placeholder="username" />
          <br />
          <span>Password : </span>
          <input ref={passwordRef} type="password" placeholder="password" />
          <br/>
          <button onClick={()=>submitHandle(usernameRef, passwordRef, setuserDetails)}>Submit</button>
        </>
      )}
    </div>
  );
};

export default Login;
