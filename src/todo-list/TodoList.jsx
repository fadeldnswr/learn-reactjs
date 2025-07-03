import React from "react";
import Todo from "./Todo.jsx";

const TodoList = () => {
  return (
    <ul> 
      <Todo text="Learn HTML" isCompleted={true}/>
      <Todo text="Learn CSS" isCompleted={true}/>
      <Todo text="Learn Javascript" isCompleted={false}/>
      <Todo text="Learn ReactJS" isCompleted={false}/>
    </ul>
  )
}

export default TodoList;