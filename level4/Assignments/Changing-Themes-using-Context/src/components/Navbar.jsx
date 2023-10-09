import { useContext } from 'react';
import {ThemeProvider} from './ThemeProvider';

function Navbar(props) {

const {color} = useContext(ThemeProvider)
// console.log(context)

    return (
        <div className={`${color}-theme`}>
            <div className='title'>
                <h4>Home</h4>
                <h4>About</h4>
                <h4>Contact</h4>
            </div>
        </div>
    );
}

export default Navbar;