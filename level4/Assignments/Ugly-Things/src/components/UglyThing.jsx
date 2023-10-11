import React, {useState} from 'react';

function UglyThing(props) {

    const { title, imgUrl, description, _id, deleThing, editThing } = props

    /* edit state
 create a state shows user editing or not
 each element becomes an input when isEditing = true
 edit and delete button become save and cancel
 cancle returns elements to normal
 save performs a Axios.put with new data 
 */

    const [toggle, setToggle] = useState(false)
    function handleToggle() {
        setToggle(prev => !prev)
    }
    const [edits, setEdits] = useState({
        title: title,
        imgUrl: imgUrl,
        description: description
    })

    function handleChange(e) {
        const { name, value } = e.target
        setEdits(prevState =>{
            return {
                ...prevState,
                [name]:value
            }
        })
    }

    function handleSubmit(e) {

        e.preventDefault()
        editThing(_id, edits)
        handleToggle()
    }

    return (
        <>
            {!toggle &&
                <div className='submit--store'>
                    <h2>{title}</h2>
                    <h3>{description}</h3>
                    <img src={imgUrl} />
                    <div className='thing--buttons'>
                        <button onClick={handleToggle}
                        >
                            Edit
                        </button>
                        <button onClick={() => deleThing(_id)}>
                            Delete
                        </button>
                    </div>
                </div>
            }
            {toggle &&
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='title'
                        onChange={handleChange}
                        value={edits.title}
                    />
                    <input
                        type='text'
                        name='imgUrl'
                        onChange={handleChange}
                        value={edits.imgUrl}
                    />
                    <input
                        type='text'
                        name='description'
                        value={edits.description}
                        onChange={handleChange}
                    />
                    <button onClick={handleToggle}
                    >
                        Cancel
                    </button>
                    <button
                    >
                        Save
                    </button>
                </form>
            }
        </>
    );
}

export default UglyThing;