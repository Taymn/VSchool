import React from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../Context.jsx'
// Home displays all notes by title

export default function NoteList() {
  const { notes, deleteNote } = React.useContext(Context)
  console.log('notelist component')

  let noteTitle
  if (notes.length > 0) {
    noteTitle = notes.map((note) => {
      return (
        <>
          <Link to={`${note._id}`}>
            <h3>Title: {note.title}</h3>
          </Link>
          <button onClick={() => deleteNote(note._id)}>Delete</button>
        </>
      )
    })
  }

  return (
    <div className='note-container'>
      <h2>Note List</h2>
      {noteTitle}
    </div>
  )
}