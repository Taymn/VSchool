import React, { useEffect, useState } from 'react';
import axios from 'axios'

export const Context = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function ContextProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || '',
        issues: [],
        errMsg: ''
    }

    const [userState, setUserState] = useState(initState)
    // console.log(userState)
    function signup(credentials) {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevUserState => ({
                    prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials) {
        axios.post('/auth/login', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevUserState => ({
                    prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState(null)
    }

    function handleAuthErr(errMsg) {
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthErr() {
        setUserState(prevState => ({
            ...prevState,
            errMsg: ''
        }))
    }

    const [notes, setNotes] = useState([])
    const [userNotes, setUserNotes]=useState([])
    const initInputs =
    {
        title: '',
        content: '',
        tags: []
    }

    const [inputs, setInputs] = useState(initInputs)

    function getNotes() {
        userAxios.get('/api/notes')
            .then(res => {
                setNotes(res.data)
                // console.log('inside getNotes res.data:', res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function getUserNotes() {
        userAxios.get(`/api/notes/${userState.user._id}`)
            .then(res => {
                setUserNotes(res.data)
                // console.log('user notes', res.data)
            } )
            .catch(err => console.log(err.response.data.errMsg))
    }

    function deleteNote(noteId) {
        userAxios.delete(`/api/notes/${noteId}`)
            .then(res => {
                setNotes(prevNotes => prevNotes.filter(note => note._id !== noteId))
            })
            .catch(err => console.log(err))
            getUserNotes()
            getNotes()
    }

    function addNote() {
        setNotes((prev) => {
          const updatedNotes = prev.map((note) => {
            // Assuming 'tags' is a property in each note that contains a string of tags
            if (note.tags && typeof note.tags === 'string') {
              return {
                ...note,
                tags: note.tags.split(' ').filter((tag) => tag.startsWith('#')).map((tag) => tag.slice(1)),
                // Splitting by spaces, filtering for strings starting with '#' and removing the '#' symbol
              };
            }
            return note; // Return the unchanged note if it doesn't have 'tags' or if 'tags' is not a string
          });
          return updatedNotes;
        });
      

        userAxios.post('/api/notes', inputs)
            .then(res => {
                setNotes(prevNotes => [...prevNotes, res.data])
            })
            .catch(err => console.log(err))
        setInputs(initInputs)
    }

    function handleChange(e) {
        const { name, value } = e.target
        // if(name === tags) {
        //     value.split(' ')
        // }
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        })
        )
    }

    function createTag() {
        const string =
          "Hello everyone, me and @ritika are going to be married this month #happy, #marriage";
       
        const getJSX = () => {
          // split with capture
          const parts = string.split(/((?:#|@)[a-zA-Z]+)/).filter((s) => s.length);
          return parts.map((part) => {
            if (part.startsWith("@")) {
              // if part starts with `@` return `Link` in your case
              return <span style={{ color: "red" }}>{part}</span>;
            } else if (part.startsWith("#")) {
              // if part starts with `#` return other `Link`
              return <span style={{ color: "green" }}>{part}</span>;
            } else {
              // just return string as is
              return part;
            }
          });
        };
        return <div>{getJSX()}</div>
    }


    return (
        <Context.Provider value={{
            ...userState,
            signup,
            login,
            logout,
            notes,
            deleteNote,
            addNote,
            handleChange,
            inputs,
            resetAuthErr,
            getNotes,
            getUserNotes,
            userNotes,
            createTag
        }}>
            {props.children}
        </Context.Provider>
    );

}