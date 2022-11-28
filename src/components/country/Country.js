import React from 'react';
import'./Country.css'
const Country = (props) => {
    return (
        <div className='country'>
            <h3><small> country name</small> : {props.name}</h3>
            <h4>population : {props.population}</h4>
            <p>area no : {props.area}</p>
        </div>
    );
};
export default Country;