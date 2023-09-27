import React from 'react';
import memesData from '../memesData';

/**
 * Challenge: Save the random meme URL in state
 * - Create new state called `memeImage` with an
 *   empty string as default
 * - When the getMemeImage function is called, update
 *   the `memeImage` state to be the random chosen
 *   image URL
 * - Below the div.form, add an <img /> and set the
 *   src to the new `memeImage` state you created
 */
 
 /** Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
   
/** * Challenge: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */
     
   export default function Meme() {
    // const [memeImage, seMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)


    
    function getMemeImage(){
        // console.log("Give me new meme!")
        // const memesArray = memesData.data.memes
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length) 
        // setMemeImage(memesArray[randomNumber].url)
        // setMeme(memesArray[randomNumber].url)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className='form'>
                <input
                    type="text"
                    placeholder='Top Text'
                    className='form--input'
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder='Bottom Text'
                    className='form--input'
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    className='form--button'
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className='meme'> 
                {/* <img src={memeImage} className='meme--image'/> */}
                <img src={meme.randomImage} className='meme--image'/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>

    );
}
