import React from 'react';
const userInput = (props) => {
  return (
    <div className="userInput">
      <input
        type="text"
        onChange={props.changed}
        value={props.currentUser}
      ></input>
      <p>
        {props.info} {props.userName}
      </p>
    </div>
  );
};

export default userInput;
