import React from "react";

const Todo = ({text, isCompleted, isDeleted}) => {
  if (isDeleted) {
    return null; // Do not render the item if it is deleted
  }
  
  else {
    return (
      <li className="list">
        {text} {isCompleted && "✅"}
      </li>
    )
  }
}

export default Todo;