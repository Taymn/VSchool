import React from 'react';// Step 1
import { useNavigate } from 'react-router-dom'; //Step 2 NAV - Step 1

export default function Home() { // Step 2
    const navigate = useNavigate() //NAV - Step 2

    return( //Step 3
        <div style={{ padding: 20}}> {/*Step 4*/}
        
        <h2>Home View - 1</h2> {/*Step 5*/}
        {<p>Plumbing Co. is dedicated to providing customers with a quick, easy, and reliable experience.</p>} {/*Step 6*/}
        <button onClick={()=> navigate('/services')}></button>
        <button onClick={()=> navigate (- 1)}>Go Back 1</button> {/*NAV - Step*/}
        <button onClick={()=> navigate (1)}>Go Forward 1</button> {/*NAV - Step*/}


    </div> //Step 4
    )//Step 4
}//Step 2