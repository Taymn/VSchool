import React from 'react';
import { Context } from './context/Context'
// Create a new note from a new page title, content, tags

function CreateNote() {
    const { addNote, handleChange, inputs } = React.useContext(Context)

    function handleSubmit(e) {
        e.preventDefault()
        addNote()
    }

    return (
        <>
            <form
                className='newNote-form'
                onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='title'
                    value={inputs.title}
                    onChange={handleChange}
                    placeholder='Title'
                />
                <input
                    type='text'
                    name='content'
                    value={inputs.content}
                    onChange={handleChange}
                    placeholder='Content'
                />
                <input
                    type='text'
                    name='tags'
                    value={inputs.tags}
                    onChange={handleChange}
                    placeholder='Tags'
                />
                <button>Submit</button>
            </form>
            <div className='note'>
                <h2>Note Preview</h2>
                <h3>Title: {inputs.title}</h3>
                <label style={{fontWeight: 600}}>Content:</label>
                <textarea  defaultValue={inputs.content} disabled/>
                <a>{inputs.tags}</a>
            </div>
        </>
    );
}

export default CreateNote;