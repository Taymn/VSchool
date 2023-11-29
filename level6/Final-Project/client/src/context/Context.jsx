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
        const initInputs =
        {
            title: '',
            content: '',
            tags: ''
        }

        const [inputs, setInputs] = useState(initInputs)

        function getNotes() {
            userAxios.get('/api/notes')
                .then(res => {
                    setNotes(res.data)
                    console.log('inside getNotes res.data:', res.data)
                })
                .catch(err => console.log(err.response.data.errMsg))
        }

        function deleteNote(noteId) {
            userAxios.delete(`/api/notes/${noteId}`)
                .then(res => {
                    setNotes(prevNotes => prevNotes.filter(note => note._id !== noteId))
                })
                .catch(err => console.log(err))
        }

        function addNote() { 
            userAxios.post('/api/notes', inputs)
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

     

        return (
            <Context.Provider value={{
                ...userState,
                signup,
                login,
                logout,
                notes: notes,
                deleteNote,
                addNote,
                handleChange,
                inputs,
                resetAuthErr,
                getNotes
            }}>
                {props.children}
            </Context.Provider>
        );
    
}