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
            .catch(err => console.log(err.response.data.errMsg))
    }

    function login(credentials) {
        axios.post('/auth/login', credentials)
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
        setUserState(null)
    }

    // const [getAllIssues, setGetAllIssues] = useState([])
    // function allIssues() {
    //     userAxios.get('/api/issue/async')
    //     .then(res => {
    //         setGetAllIssues(res.data)
    //     })
    //     .catch(err => console.log(err.response.data.errMsg))
    // }
    // console.log(getAllIssues)

    function getUserIssues() {
        userAxios.get('/api/issue/user')
            // .then(res => console.log(res.data))
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
            // console.log(res.data)
    }

    function addIssue(newIssue) {
        userAxios.post('api/issue', newIssue)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function deleteIssue(issueId) {
        userAxios.delete(`/api/issue/${issueId}`)
        .then(res => {
            setUserState(prevIssues => {
                return{
                    ...prevIssues, 
                    issues: prevIssues.issues.filter(issue => issue._id !== issueId)
                }
            }) 
        })
        .catch(err => console.log(err))
    }

    return (
        <UserContext.Provider value={{
                ...userState,
                signup,
                login,
                logout,
                addIssue,
                getAllIssues,
                allIssues,
                deleteIssue,
                getUserIssues
            }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext }