import { useState } from "react";


const NoteForm = ({onAddNote}) => {
  const [text, setText] = useState("");

  function handleChange(e){
    setText(e.target.value);
  }

  function handleClick(){
    setText("");
    onAddNote(text);
  }

  return (
    <div>
      <input placeholder="Add Note" value={text} onChange={handleChange}/>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default NoteForm;