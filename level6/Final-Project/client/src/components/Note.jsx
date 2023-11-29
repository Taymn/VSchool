import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { Context } from '../context/Context.jsx'
// Note Display

function Note() {
    const { notes } = React.useContext(Context)
    const params = useParams()
    const [viewComment, setViewComment] = useState(false)
    console.log('notes', notes)

    function seeComment() {
        setViewComment(prevState => !prevState)
    }

    const displayData = notes.map((note) => {
        if (note._id === params.id) {
            return (
                <div className='note'>
                    <h2>{note.title}</h2>
                    <textarea defaultValue={note.content} />
                    <a>{note.tags}</a>
                    {<h3 onClick={seeComment}> {viewComment ? 'Hide Comments' : 'Click to View Comments'}</h3>}
                    {
                        viewComment &&
                        <>
                            <p>{note.comments.map(note => note)}</p>
                            <div>
                                <button disabled>Likes: {note.likes}</button>
                                <button disabled>Dislikes: {note.dislikes}</button>
                            </div>
                        </>
                    }
                </div>

            )
        }
    })

    return (
        <>
            {displayData}
        </>
    )

}

export default Note;