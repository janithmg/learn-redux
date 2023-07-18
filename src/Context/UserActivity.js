import { createContext, useState } from "react";

export const userActivity = createContext({});

const UserActivity = ({ children }) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [position, setPosition] = useState("");
  return (
    <userActivity.Provider
      value={{
        image,
        name,
        city,
        position,
        setImage,
        setName,
        setCity,
        setPosition,
      }}
    >
      {children}
    </userActivity.Provider>
  );
};

export default UserActivity;
