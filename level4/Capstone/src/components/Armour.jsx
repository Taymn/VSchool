import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MHContext } from './Context';

export default function Armour() {
    const navigate = useNavigate()

    const { armourContext } = React.useContext(MHContext)

    const armourList = (array, type) => {
        // First thing - filter rank
        // Get uniques
        // loop through and populate a new array with the uniques

        let arr = []
        let armorNames = []

        let filteredItems = array.filter((item) => {
            if (item.armorSet.rank === type) {
                console.log(item.armorSet.rank)

                // check if exists in new arr, if not push

                return item
            }
        })

        filteredItems.forEach((item, index) => {
            // console.log('item' + index, item)
            // console.log(!armorNames.includes(item.armorSet.name))
            // If the name doesn't exist in array 
            if (!armorNames.includes(item.armorSet.name) === true) {
                arr.push(item)
                armorNames.push(item.armorSet.name)
            }
        })


        return (arr.map((item, index) => <div key={index}>{item.armorSet.name}</div>))
    }

    return (
        <div style={{ padding: 20 }}>

            <h2>Select Armour Set</h2>
            <div className='list'>
                <div>
                    <h4>Low Rank</h4>
                    {armourContext.length > 0 && armourList(armourContext, 'low')}
                </div>
                <div>
                    <h4>High Rank</h4>
                    {armourContext.length > 0 && armourList(armourContext, 'high')}
                </div>
                <div>
                    <h4>Master Rank</h4>
                    {armourContext.length > 0 && armourList(armourContext, 'master')}
                </div>
            </div>

        </div>
    );
}