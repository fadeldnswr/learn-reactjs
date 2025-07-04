import React from "react";

const MyButton = ({text, onSmash}) => {
  return (
    <button onClick={onSmash}>
      {text}
    </button>
  )
}

export default MyButton;