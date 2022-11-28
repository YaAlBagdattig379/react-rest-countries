import React, { useEffect, useState } from 'react';
import Country from '../country/Country';

const Countries = () => {
    const [countries,setCountries] = useState([]); // declare 'useState'
    useEffect( () =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())// declare 'useEffect' with annonymous 
                                      //arrow function
        .then(data => setCountries(data))
    },[]); 
    return (
        <div>
            <h1>total countries numbs : {countries.length}</h1>
            {/* to show data on UI  */}
            {
              countries.map(country => <Country name={country.name.common} population={country.population} area={country.area}></Country>)
            }
        </div>
    );
};

export default Countries;
