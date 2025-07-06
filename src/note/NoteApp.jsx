import { useImmer } from "use-immer";
import Note from "./Note";
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
  const [notes, setNotes] = useImmer(initialNotes);

  // Function to handle adding a new note
  function handleAddNote(text){
    setNotes(draft => {
      draft.push({
        id: id++,
        text: text,
        done: false,
      })
    })
  }

  // Function to handle changing a note
  function handleChangeNote(note){
    setNotes(draft => {
      const index = draft.findIndex(item => item.id === note.id); // Find the index of the note to change
      draft[index] = note; // Update the note at that index
    })
  }

  // Function to handle deleting a note
  function handleDeleteNote(note){
    setNotes(draft => {
      const index = draft.findIndex(item => item.id === note.id); // Find the index of the note to delete
      draft.splice(index, 1); // Remove the note at that index
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