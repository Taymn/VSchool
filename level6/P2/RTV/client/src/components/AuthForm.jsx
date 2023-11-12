import React from 'react';

export default function AuthForm(props) {
    const {
        handleChange,
        handleSubmit,
        btnText,
        // inputs: {
        //     username,
        //     password
        // }
        inputs,

    } = props

    return (
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            value={inputs.username}
            name='username'
            onChange={handleChange}
            placeholder='Username'/>
            <input
            type='text'
            value={inputs.password}
            name='password'
            onChange={handleChange}
            placeholder='Password' />
            <button>{ btnText }</button>
        </form>
    )
}