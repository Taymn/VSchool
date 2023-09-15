import React from 'react';


export default function vacationSpots(props) {
   let season
   let price
    if (props.timeToGo === "Spring" ) {
            season = "green"
        }    
        if (props.timeToGo === "Summer" ) {
            season = "yellow"
        }    
        if (props.timeToGo === "Fall" ) {
            season = "red"
        }    
        if (props.timeToGo === "Winter" ) {
            season = "lightblue"
        }    

        if (props.price <= 500 ) {
           price= `($)${props.price}`
        }
        if (props.price > 500 && props.price < 1000 ) {
           price= `($$)${props.price}`
        }
        if (props.price > 1000 ) {
           price= `($$$)${props.price}`
        }
       

        return (

        <section style={{backgroundColor: `${season}`}} >
            <h1>{props.place}</h1>
            <span>{price}</span>
            <span>{props.timeToGo}</span>
            <hr />
        </section>
    )
}
