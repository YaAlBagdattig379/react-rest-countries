import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [countries,setCountries]= useState([]);//diclare useState()
    useEffect( () =>{
       fetch('https://restcountries.com/v3.1/all')
       .then(res => res.json())
       .then(data => console.log(data))
    })
    return (
        <div>
            <h1>hello from countries !!</h1>
        </div>
    ,[]);
};
<h1>hello from countries !!</h1>
export default Countries;