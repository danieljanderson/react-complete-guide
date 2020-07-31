import React from 'react';
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
