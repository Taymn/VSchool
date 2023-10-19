import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MHContext } from './Context';

export default function Monster() {
    const navigate = useNavigate()

    const { monsterContext } = React.useContext(MHContext)

    const monsterList = (array, type) => {

        let arr = []

        let filteredItems = array.filter((item) => {
            return item.type === type
        })

        filteredItems.forEach((item,index) => {
            if (item.type === type){
                arr.push(item)
            }
        })

       return (filteredItems.map((item, index) => <div key={index}>{item.name}</div>))
    }

    const monstersList = monsterContext.map(item => item.type)
    const monsterNames = [...new Set(monstersList)]

    const monsterSpeciesList = monsterNames.map(item => {
        let list = monsterList(monsterContext, item)
        return (<div><h3>{item} monster</h3>{monsterContext.length > 0 && list}</div>)
    })
    
    return (
        <div style={{ padding: 20 }}>

            <h2>Select Monster</h2>
            <div className='list'>
                {monsterSpeciesList}
            </div>
        </div>
    );
}