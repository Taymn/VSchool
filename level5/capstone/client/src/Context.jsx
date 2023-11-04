import React, { useEffect, useState } from 'react';
import axios from 'axios'
const Context = React.createContext()

function ContextProvider(props) {
    const [notes, setNotes] = useState([])
    const initInputs =
    {
        title: '',
        content: '',
        tags: ''
    }

    const [inputs, setInputs] = useState(initInputs)

    function getNotes() {
        axios.get('/api/notes')
            .then(res => {
                setNotes(res.data)
                console.log('inside getNotes res.data:', res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function deleteNote(noteId) {
        axios.delete(`/api/notes/${noteId}`)
            .then(res => {
                setNotes(prevNotes => prevNotes.filter(note => note._id !== noteId))
            })
            .catch(err => console.log(err))
    }

    function addNote() {
        axios.post('api/notes', inputs)
            .then(res => {
                setNotes(prevNotes => [...prevNotes, res.data])
            })
            .catch(err => console.log(err))
        setInputs(initInputs)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    useEffect(() => {
        getNotes()
    }, [])

    return (
        <Context.Provider value={{
            notes: notes,
            deleteNote,
            addNote,
            handleChange,
            inputs
        }}>
            {props.children}
        </Context.Provider>
    );
}

export { ContextProvider, Context }