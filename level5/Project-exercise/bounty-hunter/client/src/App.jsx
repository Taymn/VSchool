import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.jsx'
import AddBountyForm from './components/AddBountyForm.jsx'

function App() {
  const [bounties, setBounties] = useState([])
  const [editToggle, setEditToggle] = useState(false)

  function getBounties() {
    axios.get('/api/bounties')
      .then(res => setBounties(res.data))
      .catch(err => (console.log(err)))
  }

  function addBounty(newBounty) {
    axios.post('/api/bounties', newBounty)
      .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data])
      })
      .catch(err => console.log(err))
  }

  function deleteBounty(bountyId) {
    axios.delete(`/api/bounties/${bountyId}`)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log(err))
  }

  function editBounty( updates, bountyId){
    axios.put(`/api/bounties/${bountyId}`, updates)
    .then(res => {
      setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
    })
    .catch(err => console.log(err))
  }


  useEffect(() => {
    getBounties()
  }, [])

  return (
    <div className='bounty-container'>
      <h1>Bounty Hunter</h1>
      <AddBountyForm
        submit={addBounty}
        btnText="Add Bounty"
      />

      {bounties.map(bounty =>
        <div
          {...bounty}
          key={bounty.firstName}
          className='bounty'
          deleteBounty={deleteBounty}
          editBounty={editBounty}>

          {!editToggle ?
            <>
              <h4>First Name: {bounty.firstName}</h4>
              <h4>Last Name: {bounty.lastName}</h4>
              <h4>Living: {bounty.living ? "true" : "false"}</h4>
              <h4>Type: {bounty.type}</h4>
              <h4>Amount: {bounty.amount}</h4>
              <button
                onClick={() => { deleteBounty(bounty._id) }}
                className='delete-btn'>
                Delete
              </button>
              <button
                className='edit-btn'
                onClick={()=> setEditToggle(prevToggle => !prevToggle)}>
                Edit
              </button>
            </>
            :
            <>
              <AddBountyForm
                firstName={bounty.firstName}
                lastName={bounty.lastName}
                living={bounty.living}
                amount={bounty.amount}
                type={bounty.type}
                _id={bounty._id}
                btnText="Submit Edit"
                submit={editBounty}
              />
              <button onClick={()=> setEditToggle(prevToggle => !prevToggle)}>
                Close
                </button>
            </>
          }

        </div>)}
    </div>
  )
}

export default App
