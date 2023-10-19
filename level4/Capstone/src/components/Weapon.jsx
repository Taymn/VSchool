import React from 'react';
import { useNavigate } from 'react-router-dom';
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

        return (combinedFilteredItems.map((item, index) => <div key={index}><a href=''>{item.name}</a></div>))
    }

    const weaponTypeList = weaponContext.map(item => item.type)
    const uniqueWeaponList = [...new Set(weaponTypeList)]

    // const weaponLists = uniqueWeaponList.map(item => {
    //     let list = weaponList(weaponContext, item)
    //     return (< div ><a href=''>{item}</a>{weaponContext.length > 0} </div >)
    // })

    const weaponLists = uniqueWeaponList.map(item => {
        let list = weaponList(weaponContext, item)
        return (< div ><h3>{item}</h3>{weaponContext.length > 0 && list} </div >)
    })

    return (
        <div style={{paddingBottom: 10}}>
            <button onClick={() => navigate('/')}>
                Go Home
            </button>
            <button onClick={() => navigate(- 1)}>
                Go Back
            </button>
            <button onClick={() => navigate(1)}>
                Go Forward
            </button>
            <div className='home'>

                <h1>
                    Select Weapon Type
                </h1>
                <div className='list'>
                    {weaponLists}
                </div>
            </div>
        </div>
    );
}