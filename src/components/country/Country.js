import React from 'react';
import'./Country.css'
const Country = (props) => {
    // console.log(props.country.name.common)

    // desctruction are used in here to reduce codes 
    const {name ,population,area, region,flags} = props.country;
    // console.log(props.country.flags.png)
    return (
        <div className='country'>
            <h3><small> country name</small> : {name.common}</h3>
            <img src={flags.png} alt="" />  {/** this way are used to img by dynamic */}
            <h4>population : {population}</h4>
            <p><b> area no</b> : {area}</p>
            <p>region : <b>{region}</b></p>
        </div>
    );
};
export default Country;