import React, { useState } from 'react';

const MHContext = React.createContext()

function MHContextProvider(props) {
    const [monsterContext, setMonsterContext] = useState([])
    const [weaponContext, setWeaponContext] = useState([])
    const [armourContext, setArmourContext] = useState([])

    async function monsterGetter() {
        const response = await fetch("https://mhw-db.com/monsters")
        const monsters = await response.json()
        // console.log(monsters)
        setMonsterContext(monsters)
    }

    async function weaponGetter() {
        const response = await fetch("https://mhw-db.com/weapons")
        const weapons = await response.json()
        // console.log(weapons)
        setWeaponContext(weapons)
    }

    async function armourGetter() {
        const response = await fetch("https://mhw-db.com/armor")
        const armour = await response.json()
        console.log(armour)
        setArmourContext(armour)
    }

    React.useEffect(() => {
        // fetch('https://mhw-db.com/monsters')
        // .then(res=> res.json())
        // .then(monsters => setMonsterContext(monsters))
        monsterGetter()
        weaponGetter()
        armourGetter()
    }, []
    )




    return (
        <MHContext.Provider value={{
            monsterContext,
            weaponContext,
            armourContext,
        }}>
            {props.children}
        </MHContext.Provider>
    );
}

export { MHContext, MHContextProvider };