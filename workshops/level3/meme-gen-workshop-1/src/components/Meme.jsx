import React from "react"
import {useEffect, useState} from 'react';

//1 Create function
 function Meme() {
    //5 Make inital state for 1 meme
    
//Step 7 Create function to generate random meme   
    function memePicker(){
        //Get random meme image
        //Set random image to randomImage propertie of meme
    }


    //2 Create a return for showing output
    return(
        <div className='form-container'>
            {/* 3) Add 2 input boxes for text */}
            <input 
            className="line-one" 
            type="text" 
            placeholder="top line"
            name='topText'
           // value and onChange
            >
            </input>

            {/* 3) Add 2 input boxes for text */}
            <input 
            className="line-two" 
            type="text" 
            placeholder="bottom line"
            name='bottomText'
            // value and onChange
            ></input>

            {/* 4) Add a button to submit data */}
            <button className='click-button' onClick={memePicker}>
                Get a new meme image  🖼
            </button>
            
            {/* 8) Print results to screen */}
            <div className='meme'>
                {/* Put image, top, and bottom text here */}
                
            </div>
        </div>
    )
}

export default Meme