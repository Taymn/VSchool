import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate()
    return (
        <div className='home'>
            <div style={{ padding: 20, marginBottom: 20 }}>

                <h2>Level 4 Capstone</h2>
                {<p>
                    This MHW API App provides users stats about Monsters, Weapons and Armour. 
                </p>}

            </div>
            <div className='img' style={{ margin: 20 }}>
                <a href='/armour'>
                    <img src="https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/baan-beta+-armor-mhw-wiki-guide.png" />
                </a>
                
                <a href='/weapons'>
                    <img src='https://www.1999.co.jp/itbig58/10583858.jpg' />
                </a>

                <a href='/monsters'>
                    <img src='https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-rathalos_render_001.png' style={{height: 270}}/>
                </a>
            </div>
        </div >
    );
}