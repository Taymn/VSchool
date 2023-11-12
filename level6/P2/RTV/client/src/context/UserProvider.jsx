import React, { useState } from 'react';
import axios from 'axios'

const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || '',
        issues: []
    }

    const [userState, setUserState] = useState(initState)

    function signup(credentials) {
        axios.post('/api/signup', credentials)
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
            .catch(err => console.log(err.response.data.errMsg))
    }

    function login(credentials) {
        axios.post('/api/login', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                getUserIssues()
                setUserState(prevUserState => ({
                    prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: {},
            token: '',
            issues: []
        })
    }

    const [getAllIssues, setGetAllIssues] = useState([])
    function allIssues() {
        userAxios.get('/api/auth/issue')
        .then(res => {
            setGetAllIssues(res.data)
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function getUserIssues() {
        userAxios.get('/api/issue/user')
            // .then(res => console.log(res,data))
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addIssue(newIssue) {
        userAxios.post('api/auth/issue', newIssue)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addIssue,
                getAllIssues,
                allIssues
            }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext }