import React from 'react';
import { Context } from '../context/Context'

function CreateNote() {

   //map function to map through '#.split()'
    //input string thats saved as an array

    
    // const string =
    //   "Hello everyone, me and @ritika are going to be married this month #happy, #marriage";
  
    // const getJSX = () => {
    //   // split with capture
    //   const parts = string.split(/((?:#|@)[a-zA-Z]+)/).filter((s) => s.length);
    //   return parts.map((part) => {
    //     if (part.startsWith("@")) {
    //       // if part starts with `@` return `Link` in your case
    //       return <span style={{ color: "red" }}>{part}</span>;
    //     } else if (part.startsWith("#")) {
    //       // if part starts with `#` return other `Link`
    //       return <span style={{ color: "green" }}>{part}</span>;
    //     } else {
    //       // just return string as is
    //       return part;
    //     }
    //   });
                

    const { addNote, handleChange, inputs, createTag } = React.useContext(Context)

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