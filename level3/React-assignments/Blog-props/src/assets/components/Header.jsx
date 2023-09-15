import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <header>
            <div className='nav--title'>
                <a>Start Bootstrap</a>
                <Navbar />
            </div>
            <div className='nav--theme'>
                <h1>Clean Blog</h1>
               <span> A Blog Theme by Start Bootstrap</span>
            </div>
        </header>
    );
}

export default Header;