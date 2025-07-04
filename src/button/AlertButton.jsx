import React from "react";

const AlertButton = ({text, message}) => {
  const handleClick = (e) => {
    console.log(e.target); // Event handler object to get the button element
    alert(message);
  }

  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

export default AlertButton;