import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}
function LoadCountries(){
  const [countries,setCountries] = useState([])
  useEffect( () => {
     fetch('https://restcountries.com/v3.1/all')
     .then(res => res.json())
     .then(data => setCountries(data))
  })
  return (
    <div>
      <h1>Visiting Every Countries Of The World</h1>
      <p>total Countries : {countries.length}</p>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country> )//{country.name.common}</p> )
      }
    </div>
  )
}
function Country(props){
  return (
    <div>
      <h3>Country Name : {props.name}</h3>
      <p>population : {props.population}</p>
    </div>
  )
}

export default App;
