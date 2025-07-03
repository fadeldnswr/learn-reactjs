import React from "react";
import Todo from "./Todo.jsx";

const TodoList = () => {
// Create an array of todo items
const data = [
	{
    id: 0,
		text: "Learn HTML",
		isCompleted: true,
	},
	{
    id: 1,
		text: "Learn CSS",
		isCompleted: true,
	},
	{
    id: 2,
		text: "Learn Javascript",
		isCompleted: true,
	},
	{
    id: 3,
		text: "Learn React",
		isCompleted: false,
	},
];

// Map the array to create a list of Todo components
  return (
    <ul> 
      {data.map((todo) => (
        <Todo key={todo.id} {...todo}/>
      ))}
    </ul>
  )
}

export default TodoList;