import React from "react"
import { useEffect, useState } from 'react';
import data from "./data"

//1 Create function
function Meme() {
    //5 Make inital state for 1 meme
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    //Step 6 Make state for all created memes
    const [allMemes, seeAllMemes] = useState(data.data.memes);

    // useEffect(() => {
    //     setAllMemes(data)
    // }, [ ])

    // console.log(allMemes)

    //Step 7 Create function to generate random meme   
    function memePicker() {
        const randomNumber = Math.floor(Math.random = allMemes.length);//Get random meme image
        //Set random image to randomImage propertie of meme
    
console.log(randomNumber)
setMemes(prevMeme => ({
    ... prevMeme,
    randomImage: allMemes[randomNumber].url
}))
}
    //2 Create a return for showing output
    return (
        <div className='form-container'>
            {/* 3) Add 2 input boxes for text */}
            <input
                className="line-one"
                type="text"
                placeholder="top line"
                name='topText'
                value={meme.topText}
            onChange={(e) => setMeme(prevMeme => ({
                ...prevMeme,
                topText: e.target.value
            }))}
            // value and onChange
            >
            </input>

            {/* 3) Add 2 input boxes for text */}
            <input
                className="line-two"
                type="text"
                placeholder="bottom line"
                name='bottomText'
                value={meme.bottomText}
            onChange={(e) => setMeme(prevMeme => ({
                ...prevMeme, 
                bottomText: e.target.value
            }))}
            // value and onChange
            ></input>

            {/* 4) Add a button to submit data */}
            <button className='click-button' onClick={memePicker}>
                Get a new meme image  🖼
            </button>

            {/* 8) Print results to screen */}
           
            {<div className='meme'>
                <img className="meme-image" src={meme.randomImage}></img>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>/* Put image, top, and bottom text here */}

            
        </div>
    )
}

export default Meme