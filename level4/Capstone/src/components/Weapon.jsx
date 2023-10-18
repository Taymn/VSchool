import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MHContext } from './Context';

export default function Weapon() {
    const navigate = useNavigate()

    const { weaponContext } = React.useContext(MHContext)

    const weaponList = weaponContext.map(item => (
        <h5 key={item.id}>
            {item.name}
        </h5>
    ))
    return (
        <div style={{ padding: 20 }}>

            <h2>Select Weapon</h2>
            {weaponList}

        </div>
    );
}