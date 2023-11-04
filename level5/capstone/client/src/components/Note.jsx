import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { Context } from '../Context.jsx'
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

                    {<h3 onClick={seeComment}> {viewComment ? 'Hide Comments' : 'Click to View Comments'}</h3>}
                    {
                        viewComment &&
                        <>
                            <h5>{note.comments.map(note => note)}</h5>
                            <div>
                                <button>Likes: {note.likes}</button>
                                <button>Dislikes: {note.dislikes}</button>
                            </div>
                        </>
                    }

                    <a>{note.tags}</a>

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