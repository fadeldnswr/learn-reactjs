import Note from "./Note";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useReducer } from "react";


// Create list of notes
let id = 0;
const initialNotes = [
  { id: id++, text: "Learn React", done: false },
  { id: id++, text: "Learn JavaScript", done: true },
  { id: id++, text: "Learn HTML", done: true },
  { id: id++, text: "Learn CSS", done: true },
];

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, initialNotes);

  // Create reducer functions to handle adding, changing, and deleting notes
  function notesReducer(notes, action){
    switch(action.type){
      case "ADD_NOTE":
        return [
          ...notes,
          {
            id: id++,
            text: action.text,
            done: false,
          }
        ]
      case "CHANGE_NOTE":
        return notes.map(note => 
          note.id === action.id ? {...note, text: action.text, done: action.done} : note
        )
      case "DELETE_NOTE":
        return notes.filter(note => note.id !== action.id);
      default:
        return notes; // If no action matches, return the current notes
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