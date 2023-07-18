import React from "react";
import UserAuth from "./Context/UserAuth";
import Login from "./Components/Login";
import UserActivity from "./Context/UserActivity";
import UserInput from "./Components/UserInput";

const App = () => {
  return (
    <UserAuth>
      <UserActivity>
        <Login />
        <UserInput/>
      </UserActivity>
    </UserAuth>
  );
};

export default App;
