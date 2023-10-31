import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './components/Bounty'
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

  function editBounty(updates, bountyId) {
    axios.put(`/api/bounties/${bountyId}`, updates)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }

  function handleFilter(e) {
    if (e.target.value === 'reset'){
      getBounties()
    } else {
        axios.get(`/api/bounties/search/type?type=${e.target.value}`)
        .then(res => setBounties(res.data))
        .catch(err => console.log(err))
    }
  }


  useEffect(() => {
    getBounties()
  }, [])

  return (
    <div>
      <div className='bounty-container'>
        <h1>Bounty Hunter</h1>
        <AddBountyForm
          submit={addBounty}
          btnText="Add Bounty"
        />
        <div>
        <h4>Filter by Type</h4>
        <select onChange={handleFilter} className='filter-form'>
          <option value="reset">- All Targets -</option>
          <option value='jedi'>Jedi</option>
          <option value='sith'>Sith</option>
          <option value='human'>Human</option>
          <option value='alien'>Alien</option>
        </select>
        </div>

        {
        bounties.map(bounty =>
          <Bounty
            {...bounty}
            key={bounty.firstName}
            deleteBounty={deleteBounty}
            editBounty={editBounty}/>)
          }
          </div>
    </div>
      )
}

      export default App
