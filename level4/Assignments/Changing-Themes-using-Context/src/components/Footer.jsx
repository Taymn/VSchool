import React from 'react';
import { useContext } from 'react';
import {ThemeProvider} from './ThemeProvider';

function Footer(props) {

    const {color} = useContext(ThemeProvider)
   
    return (
        <div className={`${color}-theme`}>
            <div className='footer'>
                <h3>The amazing Footer</h3>
            </div>
        </div>
    );
}

export default Footer;