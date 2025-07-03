import React from "react";

const Todo = ({text, isCompleted, isDeleted}) => {
  if (isDeleted) {
    return null; // Do not render the item if it is deleted
  }
  
  else if (isCompleted) {
    return (
      <li className="done">
        <del>{text}</del>
      </li>
    )
  }
  
  else {
    return (
      <li className="not-done">
        {text}
      </li>
    )
  }
}

export default Todo;