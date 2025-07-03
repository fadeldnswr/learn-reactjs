import React from "react";

const Todo = ({text, isCompleted}) => {
  if (isCompleted) {
    return (
      <li className="done">
        <del>{text}</del>
      </li>
    )
  } else {
    return (
      <li className="not-done">
        {text}
      </li>
    )
  }
}

export default Todo;