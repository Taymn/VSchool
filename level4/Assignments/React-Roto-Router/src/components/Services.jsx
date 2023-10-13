import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Services() {

    const navigate = useNavigate()

    return ( 
        <div>
            <h2>Services - 2</h2>

            <p></p>

            <button onClick={()=> navigate('/')}>
                Return to Home
            </button>
            <button onClick={()=> navigate (- 1)}>
                Go Back 1
            </button>
            <button onClick={()=> navigate (1)}>
                Go Forward 1
            </button>

            <div>
                <h2>Sevices Page</h2>
                <ul>
                    <li>Installation, Inspection, and Replacement.</li>
                    <li>Toilet Repair.</li>
                    <li>Leak Repairs.</li>
                    <li>Drain Cleaning.</li>
                    <li>Pipe Repair and Replacement.</li>
                    <li>Water Heater Services.</li>
                    <li>Sewer Repairs.</li>
                </ul>
            </div>
        </div>
     );
}

