import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MHContext } from './Context';

export default function Monster() {
    const navigate = useNavigate()

    const {monsterContext} = React.useContext(MHContext)

    const monsterList = monsterContext.map(item => (
        <h5 key={item.id}>
            <Link>{item.name}</Link>
        </h5>
    ))

    return (
        <div style={{ padding: 20 }}>

            <h2>Select Monster</h2>
            {monsterList}
            
        </div>
    );
}