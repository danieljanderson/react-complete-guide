import React from 'react';
import './UserOutput.css';
const userOutput = (props) => {
  return (
    <div className="userOutput">
      <p>{props.paragraph}</p>
      <p>{props.paragraph2}</p>
      <p>{props.userName}</p>
    </div>
  );
};

export default userOutput;
