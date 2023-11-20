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
                getUserIssues()
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

    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ''
        }))
    }

    const [getAllIssues, setGetAllIssues] = useState([])
    const [getAllComments, setGetAllComments] = useState([])

    function allIssues() {
        userAxios.get('/api/issue/async')
            .then(res => {
                setGetAllIssues(res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    console.log(getAllIssues)

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
    
    // console.log(userState.issues)
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
                    return {
                        ...prevIssues,
                        issues: prevIssues.issues.filter(issue => issue._id !== issueId)
                    }
                })
                setGetAllIssues(prevIssues => prevIssues.filter(issue => issue._id !== issueId))
            })
            .catch(err => console.log(err))
    }

    function postNewComment(newComment, issueId) {
        // console.log({'text':newComment})
        userAxios.post(`/api/comments/${issueId}`, { 'text': newComment })
            .then(res => {
                allIssues()
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    const [upVotes, setUpVotes] = useState(0)
    function updateVote(issueId) {
        userAxios.put(`/api/issue/${issueId}/upVote`)
            .then(res => {
                // console.log('inside upVote res.data:', res.data)
                setGetAllIssues(prevIssues => prevIssues.map(issue => issueId !== issue._id ? issue : res.data))
                setUserState(prevUserState => ({ ...prevUserState, issues: prevUserState.issues.map(issue => issueId !== issue._id ? issue : res.data) }))
            })
            .catch(err => console.log(err))
    }

    const [downVotes, setDownVotes] = useState(0)
    function downVote(issueId) {
        userAxios.put(`/api/issue/${issueId}/downVote`)
            .then(res => {
                setGetAllIssues(prevIssues => prevIssues.map(issue => issueId !== issue._id ? issue : res.data))
                setUserState(prevUserState => ({ ...prevUserState, issues: prevUserState.issues.map(issue => issueId !== issue._id ? issue : res.data) }))
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
            getUserIssues,
            postNewComment,
            getAllComments,
            updateVote,
            downVote,
            upVotes,
            downVotes,
            resetAuthErr
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext }