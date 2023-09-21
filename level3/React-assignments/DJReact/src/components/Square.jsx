import React from 'react';

function Square(props) {
    console.log(props)
    return ( 
        <div className="box" style={{backgroundColor: props.color}}></div>
     );
}

export default Square;