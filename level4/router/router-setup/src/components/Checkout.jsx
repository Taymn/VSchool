import React from 'react'; // Step 1
import { useNavigate } from 'react-router-dom';

export default function Products() {

    const navigate = useNavigate()

    return (
        <div style={{ pading: 20 }}>
            <h2>Checkout - 3</h2>

            <p>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader's attention is focused on the layout of the text instead of its content.</p>

            <button onClick={() => navigate('/')}>
                Return to Home
            </button>
            <button onClick={() => navigate(-1)}>
                Go Back 1
            </button>
            <button onClick={() => navigate(-2)}>
                Go Back 2
            </button>

        </div>
    );
}