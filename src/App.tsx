import { useState, useEffect } from 'react'
import Header from "./components/Header"
import CreateArea from "./components/CreateArea";
import Note from "./components/Note"
import { TNote } from "./types/type"
import Footer from "./components/Footer"
import useLocalStorage from './useLocalStorage';

function App() {
  // const [notes, setNotes] = useState<TNote[]>([])
  // const [storedNotes, setStoredNotes] = useState<TNote[]>()
  const [notes, setNotes] = useLocalStorage<TNote[]>("storedNotes", []);
  const addNote = (note: TNote) => {
    console.log(note)
    setNotes([...notes, note])

  }


  // useEffect(() => {
  //   localStorage && localStorage.setItem("storedNotes", JSON.stringify(notes))
  // }, [notes]);
  // useEffect(() => {
  //   if (localStorage) {
  //     const storedNotesFromLocalStorage = localStorage.getItem('storedNotes');
  //     if (storedNotesFromLocalStorage) {
  //       const storedNotesCopy = JSON.parse(storedNotesFromLocalStorage)
  //       setStoredNotes({ ...storedNotesCopy })
  //     }
  //   }
  // }, []);

  const handleDelete = (id: TNote["id"]) => {
    setNotes(prev => {
      return prev.filter((noteItem) => {
        return noteItem.id !== id
      })
    })
  }
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {Array.isArray(notes) ? notes?.map((noteItem, index) => {
        return (
          <Note note={noteItem} key={index} onDelete={handleDelete} />
        )
      }) : null}
      <Footer />
    </div>
  )
}

export default App
