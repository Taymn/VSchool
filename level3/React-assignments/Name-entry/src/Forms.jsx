import React from 'react';

function Forms() {
    const [name, setName] = React.useState("")
    const [names, setNames] = React.useState([])

    function handleChange(e) {
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setNames(prevNames =>
            [
                ...prevNames,
                name
            ]
        )
    }

    const listName = names.map(add => {
        return <li>{add}</li>
        }
    )

    return (
        <div>
            <form className='form' name="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Name'
                    className='form--input'
                    name="name"
                    onChange={handleChange}
                    value={name.name}
                />
            <button
                className='form--submit'
            >
                Submit
            </button>
            </form>
            <h1>{name}</h1>
            <ol>
                {listName}
            </ol>
        </div>
    );
}

export default Forms;