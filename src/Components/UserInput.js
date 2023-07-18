import { useContext, useRef } from "react";
import { userActivity } from "../Context/UserActivity";
import { userData } from "../Context/UserAuth";
import { Action } from "../Reducers/userActivityReducer";

const UserInput = () => {
  const { state, setState } = useContext(userActivity);

  const { userDetails } = useContext(userData);

  const imageRef = useRef();
  const nameRef = useRef();
  const cityRef = useRef();
  const positionRef = useRef();

  return (
    <div>
      <br />
      <br />
      {userDetails.userId ? (
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
              setState({
                type: Action.setData,
                data: {
                  image: imageRef.current.value,
                  name: nameRef.current.value,
                  city: cityRef.current.value,
                  position: positionRef.current.value,
                },
              })
            }
          >
            Submit
          </button>
          <br />
          <br />
          <p>{state.image}</p>
          <p>{state.name}</p>
          <p>{state.city}</p>
          <p>{state.position}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserInput;
