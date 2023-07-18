import { useContext, useRef } from "react";
import { userActivity } from "../Context/UserActivity";
import { userData } from "../Context/UserAuth";
import { submitUserActivity } from "../Utils/authValidate";

const UserInput = () => {
  const {
    image,
    name,
    city,
    position,
    setImage,
    setName,
    setCity,
    setPosition,
  } = useContext(userActivity);

  const { userDetails } = useContext(userData);

  const imageRef = useRef();
  const nameRef = useRef();
  const cityRef = useRef();
  const positionRef = useRef();

  return (
    <div>
      <br />
      <br />
      {userDetails.userId ? 
        <div>
          <span>Image :</span>
          <input ref={imageRef} type="text" placeholder="image url" /> <br />
          <span>Name :</span>
          <input ref={nameRef} type="text" placeholder="your name" /> <br />
          <span>City :</span>
          <input ref={cityRef} type="text" placeholder="your city" /> <br />
          <span>Position :</span>
          <input ref={positionRef} type="text" placeholder="your position" />
          <br />
          <button
            onClick={() =>
              submitUserActivity(
                imageRef,
                nameRef,
                cityRef,
                positionRef,
                setImage,
                setName,
                setCity,
                setPosition
              )
            }
          >
            Submit
          </button>
          <br />
          <br />
          <p>{image}</p>
          <p>{name}</p>
          <p>{city}</p>
          <p>{position}</p>
        </div>
       : 
        ""
      }
    </div>
  );
};

export default UserInput;
