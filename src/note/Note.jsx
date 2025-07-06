import { useState } from "react"


const Note = ({note, onChange, onDelete}) => {
  const [isEditing, setIsEditing] = useState(false);
  let component;

  function handleTextChange(e){
    const newNote = {...note, text: e.target.value};
    onChange(newNote);
  }

  if(isEditing){
    component = (
      <div>
        <input value={note.text} onChange={handleTextChange}/>
        <button onClick={() => setIsEditing(false)}>Save</button>
      </div>
    )
  } else {
    component = (
      <>
        {note.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    )
  }

  function handleChangeDone(e){
    const newNote = {...note, done: e.target.checked};
    onChange(newNote);
  }

  return (
    <label>
      <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
      {component}
      <button onClick={() => onDelete(note)}>Delete</button>
    </label>
  )
}

export default Note;