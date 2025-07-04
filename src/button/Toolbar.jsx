import React from "react";

const Toolbar = ({onClick}) => {
  return (
    <div onClick={onClick}>
      <button className="button-1" onClick={onClick}>First</button>
      <button className="button-2" onClick={onClick}>Second</button>
    </div>
  )
}

export default Toolbar;