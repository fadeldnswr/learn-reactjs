
const TaskList = ({items = []}) => {
  return (
    <>
      <h1>Task List</h1>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
      </ul>
    </>
  )
}

export default TaskList;