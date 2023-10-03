import React, { useEffect, useState } from 'react';

// 1) create function
function Meme(props) {

    const { setSavedMeme } = props

    //5) Make initial state for 1st meme
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        url: "https://static.tvtropes.org/pmwiki/pub/images/one_does_not_simply.jpg"

    });

    // 6) Make state for all created memes
    // Workshop State
    // const [allMemes, setAllMemes] = useState(data.data.memes);
    const [allMemes, setAllMemes] = React.useState([])

    // Project axios request
    // useEffect(() => {
    //     setAllMemes(data)
    // },[])
    // console.log(allMemes)

    // 7) Create function to generate random meme
    function memePicker(e) {
        e.preventDefault()
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        // console.log(randomNumber)
        setMeme(prevMeme => ({
            ...prevMeme,
            url: allMemes[randomNumber].url
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Meme Saved")
        setSavedMeme(prevSavedMeme => {
            return [
                ...prevSavedMeme,
                meme
            ]
        })
    }

    //9) Ceate useState to call random meme when site starts
    // useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //     .then(res => res.json())
    //     .then(data => setAllMemes(data.data.memes))
    //     .catch(err => console.log(error))
    // }, [])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    // 2) Create a return for showing output

    return (
        <>
            <form onSubmit={handleSubmit} className='meme-container'>
                {/* 3) add input boxes for text */}
                <input
                    className='line-one'
                    type="text"
                    placeholder='top line'
                    name='topText'
                    value={meme.topText}
                    onChange={(e) => setMeme(prevMeme => ({
                        ...prevMeme,
                        topText: e.target.value
                    }))}

                />

                {/* 3) add input boxes for text */}

                <input
                    className='line-two'
                    type="text"
                    placeholder='bottom line'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={(e) => setMeme(prevMeme => ({
                        ...prevMeme,
                        bottomText: e.target.value
                    }))}

                />

                {/* 4) add button to submit data */}

                <button className='click-button'
                    onClick={memePicker}>
                    Get a new meme image 🖼
                </button>
                <button
                    type="submit"
                    className='submit-button'
                    >
                    Save Meme to List
                </button>

                {/* 8) Print results to screen */}

                <div className='meme'>
                    <img className='meme-image'
                        src={meme.url}>
                    </img>
                    <h2 className='meme-text top'
                    >{meme.topText}
                    </h2>
                    <h2 className='meme-text bottom'
                    >{meme.bottomText}
                    </h2>
                </div>
            </form>
        </>
    );
}

export default Meme;