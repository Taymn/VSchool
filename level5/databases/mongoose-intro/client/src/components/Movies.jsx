import React, { useState } from 'react';
import AddMovieForm from './AddMovieForm';

export default function Movie(props) {
    const { title, genre,releaseYear , _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className='movie'>
            {!editToggle ?
                <>
                    <h1>Title: {title}</h1>
                    <p>Genre: {genre}</p>
                    <p>Year: {releaseYear ? releaseYear : ""}</p>
                    <button
                        className='delete-btn'
                        onClick={() => props.deleteMovie(_id)}>
                        Delete
                    </button>
                    <button
                        className='edit-btn'
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit
                    </button>
                </>
                :
                <>
                    <AddMovieForm
                        title={title}
                        genre={genre}
                        releaseYear={releaseYear}
                        _id={_id}
                        btnText="Submit Edit"
                        submit={props.editMovie}
                    />
                    <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close</button>
                </>
            }
        </div>
    );
}