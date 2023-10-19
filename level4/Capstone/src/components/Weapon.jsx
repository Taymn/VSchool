import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MHContext } from './Context';

export default function Weapon() {
    // console.log(weapons)
    const navigate = useNavigate()

    const { weaponContext } = React.useContext(MHContext)

    const weaponList = (array, type) => {

        let combinedFilteredItems = array.filter((item) => {
            return item.type === type && !item.name.includes('2') && !item.name.includes('3');
        });

        combinedFilteredItems.forEach(item => {
            if (item.name.includes('1')) {
                item.name = item.name.replace(' 1', '');
            }
        });

        return (combinedFilteredItems.map((item, index) => <div key={index}>{item.name}</div>))
    }

    const weaponTypeList = weaponContext.map(item => item.type)
    const uniqueWeaponList = [...new Set(weaponTypeList)]

    const weaponLists = uniqueWeaponList.map(item => {
        let list = weaponList(weaponContext, item)
        return (< div ><h3>{item}</h3>{weaponContext.length > 0 && list} </div >)
    })

    return (
        <div style={{ padding: 20 }}>

            <h2>Select Weapon Type</h2>
            <div className='list'>
                {weaponLists}
            </div>
        </div>
    );
}