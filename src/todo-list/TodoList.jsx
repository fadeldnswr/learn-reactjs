import React from "react";
import Todo from "./Todo.jsx";

const TodoList = () => {
  return (
    <ul> 
      <Todo text="Learn HTML" isCompleted={true} isDeleted={true}/>
      <Todo text="Learn CSS" isCompleted={true} isDeleted={true}/>
      <Todo text="Learn Javascript" isCompleted={false} isDeleted={false}/>
      <Todo text="Learn ReactJS" isCompleted={false} isDeleted={false}/>
    </ul>
  )
}

export default TodoList;