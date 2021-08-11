import { useState, useEffect } from "react";
import axios from 'axios'
import Filter from './Filter'
import Countries from './Countries'

function App() {

  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleChange = e => {
    setSearchCountry(e.target.value)
  }

  const filteredCountries = searchCountry.length === 1 ?
    countries : countries.filter(country => country.name.toLowerCase().indexOf(searchCountry.toLocaleLowerCase()) !== -1)

  const handleClick = (e) => {
    const index = e.target.parentNode.getAttribute('id')
    const oneCountry = [].concat(countries[index])
    setCountries(oneCountry)
  }

  return (
    <div className="App">
      <Filter onChange={handleChange} value={searchCountry} />
      <Countries countries={filteredCountries} handleClick={handleClick} />
    </div>
  );
}

export default App;
