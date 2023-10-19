import React, { useState } from 'react';

const MHContext = React.createContext()

function MHContextProvider(props) {
    const [monsterContext, setMonsterContext] = useState([])
    const [weaponContext, setWeaponContext] = useState([])
    const [armourContext, setArmourContext] = useState([])

    async function monsterGetter() {
        const response = await fetch("https://mhw-db.com/monsters")
        const monsters = await response.json()
        setMonsterContext(monsters)
        // console.log('monser call get all monsters:', monsters)

    }

    async function weaponGetter() {
        const response = await fetch("https://mhw-db.com/weapons")
        const weapons = await response.json()
        setWeaponContext(weapons)
        // console.log('weapon call get all weapons:', weaponContext)
    }

    async function armourGetter() {
        const response = await fetch("https://mhw-db.com/armor")
        const armour = await response.json()
        setArmourContext(armour)
        console.log('armour call get all armour:', armour)
    }

    React.useEffect(() => {
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