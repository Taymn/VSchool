import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { MHContext } from './Context';


export default function MonsterDetails() {
    const navigate = useNavigate()
    const { detail } = useParams()
    const monsterId = parseInt(detail)
    const { monsterContext } = React.useContext(MHContext)

    // console.log(useParams)
    // console.log( "deatail useParams " + monsterId)
    // console.log("Monster find func " + monster.name)
    
    const monster = monsterContext.find(item => item.id === monsterId)
    console.log(monster)

    const ailments = monster.ailments.map((item => {
        return (
            <>
                <li>
                    {item.name}: {item.description}
                </li>
            </>
        )
    }))
    const weakness = monster.weaknesses.map((item => {
        return (
            <>
                <li>
                    {item.element}: {item.stars} (star(s)),
                </li>
            </>
        )
    }))

    const locations = monster.locations.map((item => {
        return (
            <>
                <li> {item.name} </li>
            </>
        )
    }))


    return (
        <div>
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
            </div>
            <div className='home'>
                <h2>Name: {monster.name}</h2>
                <p>Type: {monster.type}</p>
                <p>Species: {monster.species}</p>
                <p style={{ listStyle: 'none' }}>
                    Locale: {locations}
                </p>
                <p>
                    Description: {monster.description}
                </p>
                <p style={{ listStyle: 'none' }} className='weakness'>
                    Ailments: {ailments}
                </p>
                <p style={{ listStyle: 'none' }} className='weakness'>
                    Weaknesses: {weakness}
                </p>
            </div>
        </div>
    );
}