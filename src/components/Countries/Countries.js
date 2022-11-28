import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'

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
           <div className='countries-container'> {/* to show data on UI  */}
                {
                // to use Map so each and every data never been missed out.
                 countries.map(country => <Country 
                    country = {country}
                    key = {country.ccn3} ></Country>)
                }
            </div>
        </div>
    );
};
export default Countries;
    /**
     * return (
        <div >
            <h1>total countries numbs : {countries.length}</h1>
            {/* to show data on UI  */
            // to use Map so each and every data never been missed out.
               // <div className='countries-container'>
          //      countries.map(country => <Country country = {country}></Country> )
            //    {/* /// name={country.name.common} population={country.population} area={country.area} region={country.region} ></Country>) */}
//            </div>
               
  //          }
  //      </div>
//    );
  //   **/


