import { useState } from "react";

const TaskForm = ({onSubmit}) => {
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    onSubmit(item);
    setItem("");
  }

  return (
    <>
      <h1>Task Form</h1>
      <form>
        <input value={item} onChange={handleChange} />
        <button onClick={handleClick}>
          Submit
        </button>
      </form>
    </>
  )
}

export default TaskForm;