import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { MHContext } from './Context';

export default function Armour() {
    const navigate = useNavigate()

    const { armourContext } = React.useContext(MHContext)
    const armourList = (array, type) => {
        
        let arr = []
        let armorNames = []
        
        let filteredItems = array.filter((item) => {
            if (item.armorSet.rank === type) {
                return true
            }
        })
        
        filteredItems.forEach((item, index) => {
            if (!armorNames.includes(item.armorSet.name)) {
                arr.push(item)
                armorNames.push(item.armorSet.name)
            }
            
            console.log('get all armor call', item)
        })
        
        
        // return (filteredItems.map((item, index) => <div key={index}>{item.armorSet.name}</div>))
        return (arr.map((item, index) => <div key={index}>
            <a href=''>{item.armorSet.name}</a></div>))
    }
    
    const armorSetList = armourContext.map(item => item.armorSet.rank)
    const armorSetNames = [...new Set(armorSetList)]
    
    const armorSetName = armorSetNames.map(item => {
        let list = armourList(armourContext, item)
        return (<div><h3>{item} rank</h3>{armourContext.length > 0 && list}</div>)
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

                <h1>Select Armour Set</h1>
                <div className='list'>
                    {armorSetName}
                </div>

            </div>
         </div>
    );
}