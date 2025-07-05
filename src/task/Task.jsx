import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";

const Task = () => {
  const [items, setItems] = useImmer([]);

  function handleSubmit(item){
    setItems((draft) => {
      draft.push(item)
    });
  }

  return (
    <div>
      <TaskForm onSubmit={handleSubmit} />
      <TaskList items={items} />
    </div>
  )
}

export default Task;