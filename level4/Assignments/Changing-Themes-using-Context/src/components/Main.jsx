import React from 'react';
import { useContext } from 'react';
import {ThemeProvider} from './ThemeProvider';

function Main(props) {

    const {color, toggleTheme} = useContext(ThemeProvider)
   
    return (
        <div className={`${color}-theme`}>
            <div className='main'>
                <h1>Click the button to toggle {color == "light" ?  "dark" : "light"} theme!</h1>
                <button onClick={toggleTheme} className={`${color == "light" ?  "dark" : "light"}-theme`}>Toggle Theme</button>
            </div>
        </div>
    );
}

export default Main;