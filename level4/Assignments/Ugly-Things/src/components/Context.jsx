// Ugly Things array and functions
import React, { useEffect } from 'react';

const UglyContext = React.createContext()

function ContextProvider(props) {
    // state/setState
    // any useEffects to gather data
    // handle change
    // all of your axios reqs can be here
    // edit and delete funcitons in here
    // at the end we export it to comp that need it


    const [thingArray, setThingArray] = React.useState([])

    const [thing, setThing] = React.useState({
        title: '',
        imgUrl: '',
        description: ''
    })

    React.useEffect(() => {
        fetch("https://api.vschool.io/AdamTaylor/thing/")
            .then(res => res.json())
            .then(data => setThingArray(data))
    }, [thingArray.length])



    return (
        <ContextProvider value={{
            thingArray,
            setThingArray
        }}>
            {props.children}
        </ContextProvider>
    );
}

export { UglyContext, ContextProvider };