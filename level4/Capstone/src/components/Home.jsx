import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate()
    return (
        <>
            <div style={{ padding: 20 }}>

                <h2>Level 4 Capstone</h2>
                {<p>
                    This MHW API App provides players the resouces needed for crafting by selecting monsters to find weapons and armours they can create from monster materials.
                </p>}
                <button onClick={() => navigate(- 1)}>
                    Go Back
                </button>
                <button onClick={() => navigate(1)}>
                    Go Forward
                </button>
            </div>
            <div>
                <a href='/armour'><img src="https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/baan-beta+-armor-mhw-wiki-guide.png" />
                </a>

                <a href='/weapons'>
                    <img src='https://assets.mhw-db.com/weapons/great-sword/83f7ab6e7e5669ec416d772049b8b054e2624c2e.c7bad811e203c9bb55626e414659a4f7.png' />
                </a>
                
                <a href='/monsters'>
                    <img src='https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-rathalos_render_001.png' style={{height: 300}}/>
                </a>
            </div>
        </>
    );
}