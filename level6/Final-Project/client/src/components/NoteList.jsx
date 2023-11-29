import React from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../context/Context.jsx'
// Home displays all notes by title

export default function NoteList() {
  const { notes, deleteNote } = React.useContext(Context)
  console.log('notelist component')

  let noteTitle
  if (notes.length > 0) {
    noteTitle = notes.map((note) => {
      return (
          <div className='note-container'>
            <Link to={`${note._id}`}>
              <h3>{note.title}</h3>
            </Link>
          <h4>{note.createdAt}</h4>
            <button className='button' onClick={() => deleteNote(note._id)}>Delete</button>
          </div>
      )
    })
  }

  return (
    <>
      <h2>Note List</h2>
      {noteTitle}
    </>
  )
}