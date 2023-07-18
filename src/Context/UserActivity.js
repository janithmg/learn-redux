import { createContext, useReducer } from "react";
import { userActivityReducer } from "../Reducers/userActivityReducer";

export const userActivity = createContext({});

const UserActivity = ({ children }) => {
  const [state, setState] = useReducer(userActivityReducer,{
    image:'',
    name:'',
    city:'',
    position:'',
  })
  
  return (
    <userActivity.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </userActivity.Provider>
  );
};

export default UserActivity;
