import React, { useState } from 'react';
import AddBountyForm from './AddBountyForm';

export default function bounty(props) {
    const {firstName, lastName, living, type, amount, _id, editBounty } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className='bounty'>
            {!editToggle ?
                <>
                    <h4>First Name: {firstName}</h4>
                    <h4>Last Name: {lastName}</h4>
                    <h4>Living: {living ? 'true':'false'}</h4>
                    <h4>Type: {type}</h4>
                    <h4>Amount: {amount}</h4>
                    <button
                        className='delete-btn'
                        onClick={() => { props.deleteBounty(_id) }}>
                        Delete
                    </button>
                    <button
                        className='edit-btn'
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit
                    </button>
                </>
                :
                <>
                    <AddBountyForm
                        firstName={firstName}
                        lastName={lastName}
                        living={living}
                        amount={amount}
                        type={type}
                        _id={_id}
                        btnText="Submit Edit"
                        submit={editBounty}
                    />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                    </button>
                </>
            }
        </div>
    );
}