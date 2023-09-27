import React from 'react';
import Badge from './Badge';

function Form(props) {
    const { badge, setBadge } = props;

    // init state for the form
    const [formData, setFormData] = React.useState(
        { firstName: "", lastName: "", email: "", birthPlace: "", phoneNumber: "", favoriteFood: "", background: "" }
    )

    // handleSubmit or handleClick

    function handleChange(e) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
        // console.log(formData)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setBadge(prevBadge =>
            [
                ...prevBadge,
                formData
            ]
        )
        setFormData(
            {
                firstName: "",
                lastName: "",
                email: "",
                birthPlace: "",
                phoneNumber: "",
                favoriteFood: "",
                background: ""
            }
        )
    }

    return (
        <>
            <form className='form' name="form" onSubmit={handleSubmit}>
                <div className="format--row">
                    <div className='format--column'>
                        <input className="form--input"
                            type="text"
                            placeholder='First Name'
                            name="firstName"
                            id=""
                            onChange={handleChange}
                            value={formData.firstName}
                            required
                            minLength={3}
                        />
                        <input className="form--input"
                            type="text"
                            placeholder='Last Name'
                            name="lastName"
                            id=""
                            onChange={handleChange}
                            value={formData.lastName}
                            required
                            minLength={3}
                        />
                        <input className="form--input"
                            type="email"
                            placeholder="Email"
                            name="email"
                            id=""
                            onChange={handleChange}
                            value={formData.email}
                            required
                            minLength={3}
                        />
                    </div>
                    <div className='format--column'>
                        <input className="form--input"
                            type="text"
                            placeholder="Place of Birth"
                            name="birthPlace"
                            id=""
                            onChange={handleChange}
                            value={formData.birthPlace}
                            required
                            minLength={3}
                        />
                        <input className="form--input"
                            type="number"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            id=""
                            onChange={handleChange}
                            value={formData.phoneNumber}
                            required
                            pattern="^[^\-]+$"
                        />
                        <input className="form--input"
                            type="text"
                            placeholder="Favorite Food"
                            name="favoriteFood"
                            id=""
                            onChange={handleChange}
                            value={formData.favoriteFood}
                            required
                            minLength={3}
                        />
                    </div>
                </div>
                <div className='form--bottom'>
                    <textarea
                        value={formData.background}
                        placeholder="Background"
                        onChange={handleChange}
                        name="background"
                    />

                    <button
                        className='form--submit'
                    >
                        Submit
                    </button>
                </div>
            </form>

        </>
    );
}

export default Form;