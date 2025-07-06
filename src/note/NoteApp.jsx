import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";


// Create list of notes
let id = 0;
const initialNotes = [
  { id: id++, text: "Learn React", done: false },
  { id: id++, text: "Learn JavaScript", done: true },
  { id: id++, text: "Learn HTML", done: true },
  { id: id++, text: "Learn CSS", done: true },
];

const NoteApp = () => {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  // Create reducer functions to handle adding, changing, and deleting notes
  function notesReducer(draft, action){
    if(action.type === "ADD_NOTE"){
      draft.push({
        id: id++,
        text: action.text,
        done: false
      })
    } else if(action.type === "CHANGE_NOTE"){
      const index = draft.find(note => note.id === action.id);
      draft[index] = {
        ...draft[index],
        text: action.text,
        done: action.done
      }
    } else if(action.type === "DELETE_NOTE"){
      const index = draft.findIndex(note => note.id === action.id);
      draft.splice(index, 1);
    }
  }

  // Function to handle adding a new note
  function handleAddNote(text){
    dispatch({
      type: "ADD_NOTE",
      text: text
    })
  }

  // Function to handle changing a note
  function handleChangeNote(note){
    dispatch({
      type: "CHANGE_NOTE",
      id: note.id,
      text: note.text,
      done: note.done
    })
  }

  // Function to handle deleting a note
  function handleDeleteNote(note){
    dispatch({
      type: "DELETE_NOTE",
      id: note.id
    })
  }

  return (
    <div>
      <h1>Welcome to Note Application</h1>
      <NoteForm onAddNote={handleAddNote}/>
      <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote} />
    </div>
  )
}

export default NoteApp;