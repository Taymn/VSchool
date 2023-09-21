import React from 'react';
import { useState } from "react";

function DiceBox() {

//          variable, set function    intitial state
    const [diceRoll, setDiceRoll] = useState(1)
    // const randomNumber = () => {Math.floor(Math.random()* 6)}

    function rollDice () {
        setDiceRoll(Math.floor(Math.random()* 6) + 1)
    }

    return (
        <div>
            <button onClick={rollDice}>Roll Dice</button>
            <h1>You have rolled...</h1>
            <p>{diceRoll}</p>
        </div>
    );
}

export default DiceBox;