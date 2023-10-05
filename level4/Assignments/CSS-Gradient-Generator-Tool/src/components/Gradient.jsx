import React, { useEffect, useState } from 'react';
import Callout from './Callout'
import randomcolor from "randomcolor"

function Gradient() {

    const [color1, setColor1] = useState(randomcolor())
    const [color2, setColor2] = useState(randomcolor())
    const [angle, setAngle] = useState(Math.floor(Math.random() * 360))


    useEffect(() => {
        const gradient = `linear-gradient:( ${angle}deg, ${color1}, ${color2})`
        document.body.style.background = gradient;
        // console.log(gradient)
    }, [color1, color2, angle])

    function handleChange1(e) {
        setColor1(e.target.value)
    }
    function handleChange2(e) {
        setColor2(e.target.value)
    }
    function handleChange3(e) {
        setAngle(e.target.value)
    }
    // textarea
    const gradient = [
        ` background: linear-gradient: linear-gradient:( ${angle}deg, ${color1}, ${color2})`,
        ` -moz-background: linear-gradient: linear-gradient:( ${angle}deg, ${color1}, ${color2})`,
        ` -webkit: linear-gradient:  linear-gradient:( ${angle}deg, ${color1}, ${color2})`
    ]

    return (
        <div className='app'>
            <header>
                CSS Gradient Code Generator
            </header>
            <div className='boxes'>
                {/*  Passing props */}
                <Callout color1={color1} color2={color2} angle={angle}>
                    <textarea
                        autoresize="false"
                        readOnly
                        value={gradient}
                    />
                </Callout>

                <form className='options'>
                    <h4>Options</h4>

                    <br />

                    <div className='color1' >
                        <label htmlFor="color1">
                            Color 1
                        </label>
                        <h5>{color1}</h5>
                        <input
                            className='input-color'
                            id="color1"
                            name="color1"
                            type='color'
                            placeholder='Color 1'
                            value={color1}
                            onChange={handleChange1}
                        />
                    </div>

                    <br />

                    <div className='color2'>
                        <label htmlFor="color2">
                            Color 2
                        </label>
                        <h5>{color2}</h5>
                        <input
                            className='input-color'
                            id="color2"
                            name="color2"
                            type='color'
                            placeholder='Color 2'
                            value={color2}
                            label='Color 2'
                            onChange={handleChange2}
                        />
                    </div>

                    <br />

                    <div className='angle' >
                        <label htmlFor="angle">
                            Angle
                        </label>
                        <input
                            className='input-angle'
                            id="anlge"
                            type="number"
                            name="angle"
                            placeholder='Angle'
                            value={angle}
                            label='Angle'
                            onChange={handleChange3}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Gradient;