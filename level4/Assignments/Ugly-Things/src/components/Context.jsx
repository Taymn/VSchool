// Ugly Things array and functions
import React from 'react';
import axios from 'axios';

const uglyContext = React.createContext()

// state/setState
// any useEffects to gather data
// handle change
// all of your axios reqs can be here
// edit and delete funcitons in here
// at the end we export it to comp that need it

function ContextProvider(props) {

    const [thingArray, setThingArray] = React.useState([])
    const thingUrl = "https://api.vschool.io/AdamTaylor/thing/"

    // get request
    function getAllThings() {
        fetch(thingUrl)
            .then(res => res.json())
            .then(data => setThingArray(data))
    }

    React.useEffect(() => {
        getAllThings()
    }, [])

    function postNewThing(info) {
        axios.post(thingUrl, info)
            .then(res => setThingArray(prev => [...prev, res.data]))
            .catch(err => console.log(err))
    }
    console.log(thingArray)

    // dele request
    function deleThing(thingId) {
        axios.delete(thingUrl + thingId).then(response => {
            setThingArray(prev => prev.filter(item => item._id !== thingId))
        }).catch(err => {
            console.log(err)
        });

    }
    function editThing(thingId, update) {
        axios.put(thingUrl+thingId, update).then(res => {
            setThingArray(prev => prev.map(item => item._id !== thingId ? item : res.data))
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <uglyContext.Provider value={{
            thingArray,
            setThingArray,
            postNewThing,
            deleThing,
            editThing,
        }}>
            {props.children}
        </uglyContext.Provider>
    );
}
export { uglyContext, ContextProvider };