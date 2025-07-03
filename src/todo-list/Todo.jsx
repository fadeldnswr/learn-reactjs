import React from "react";

const Todo = ({text, isCompleted, isDeleted}) => {
  if (isDeleted) {
    return null; // Do not render the item if it is deleted
  }
  
  else {
    return (
      <li className="list">
        {isCompleted ? <del>{text}</del> : text}
      </li>
    )
  }
}

export default Todo;