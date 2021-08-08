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
    filter()
  }

  const filter = () => {
    const search = countries.filter(country => country.name.toLowerCase().indexOf(searchCountry.toLocaleLowerCase()) !== -1)
    setCountries(search)
  }

  return (
    <div className="App">
      <Filter onChange={handleChange} value={searchCountry} />
      <Countries countries={countries} />
    </div>
  );
}

export default App;
