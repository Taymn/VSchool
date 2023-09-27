import React, { useEffect } from 'react';

function Badge({ person, index }) {

    return (
        <div className='badge'>
            <header>Badge</header>
            <div className='format--row' key={index}>
                <div className='format--column'>
                    <div>{person.firstName} {person.lastName}</div>
                    <div>{person.email}</div>
                </div>

                <div className='format--column'>
                    <div>{person.birthPlace}</div>
                    <div>{person.phoneNumber}</div>
                    <div>{person.favoriteFood}</div>
                </div>
            </div>
                    <div className='background'>{person.background}</div>
        </div>
    );

}

export default Badge;