import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MHContext } from './Context';

export default function Monster() {
    const navigate = useNavigate()

    const { monsterContext } = React.useContext(MHContext)

    const monsterList = (array, type) => {

        let arr = []

        let filteredItems = array.filter((item) => {
            return item.type === type
        })

        filteredItems.forEach((item, index) => {
            if (item.type === type) {
                arr.push(item)
            }
        })

        return (filteredItems.map((item, index) => <div key={index}><Link to={`/monsters/${item.id}`}>{item.name}</Link></div>))
    }

    const monstersList = monsterContext.map(item => item.type)
    const monsterNames = [...new Set(monstersList)]

    const monsterSpeciesList = monsterNames.map((item, index) => {
        let list = monsterList(monsterContext, item)
        return (<div key={index}><h3>{item} monster</h3>{monsterContext.length > 0 && list}</div>)
    })

    return (
        <div style={{ paddingBottom: 10 }}>
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
                    Select Monster
                </h1>
                <div className='list'>
                    {monsterSpeciesList}
                </div>
            </div>
        </div>
    );
}