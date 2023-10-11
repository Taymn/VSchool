// Inputs: img url, Title, Description and Submit

import React from 'react';
import { uglyContext } from './Context'
import { useContext } from 'react';

export default function Form(props) {


    const [form, setForm] = React.useState(
        {
            title: '',
            imgUrl: '',
            description: ''
        }
    )
    const { postNewThing } = useContext(uglyContext)

    function handleChange(e) {
        setForm(prevForm => {
            return {
                ...prevForm,
                [e.target.name]: e.target.value
            }
        })
        console.log(form)
    }

    function handleSubmit(e) {
        e.preventDefault()
        postNewThing(form)
            setForm(
                {
                    title: '',
                    imgUrl: '',
                    description: ''
                }
            )
        }


    return (

        <form
            className='form'
            name='form'
            onSubmit={handleSubmit}
        >
            <input
                className='form--input'
                type='text'
                placeholder='Title'
                name='title'
                id=""
                onChange={handleChange}
                value={form.title}
                required
            />
            <input
                className='form--input'
                type='text'
                placeholder='Image Url'
                name='imgUrl'
                id=''
                onChange={handleChange}
                value={form.imgUrl}
                required
            />
            <input
                className='form--input'
                type='text'
                placeholder='Description'
                name='description'
                id=''
                value={form.description}
                onChange={handleChange}
            />
            <button className='form--submit'
            >
                Submit
            </button>

        </form>



    )
}