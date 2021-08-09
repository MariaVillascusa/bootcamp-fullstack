import { useState, useEffect } from "react"
import axios from 'axios'
import Button from './Button'
import Data from './Data'

const OneCountry = ({ country }) => {
    const [weather, setWeather] = useState([])
    const api_key = process.env.REACT_APP_API_KEY
    const url = 'http://api.weatherstack.com/current?access_key=' + api_key + '=' + country.capital
    useEffect(() => {
        axios
            .get(url)
            .then(response => {
                const temperature = (response.data.current.temperature)
                const icon = (response.data.current.weather_icons[0])
                const wind = response.data.current.wind_speed + " mph direction " + response.data.current.wind_dir
                setWeather(weather.concat(temperature).concat(icon).concat(wind))
            })
    }, [url, weather])

    return (
        <Data country={country} weather={weather} />
    )
}

const Country = ({ name }) => <div><p>{name}</p></div>

const Countries = ({ countries, handleClick }) => {

    if (countries.length === 1) return <OneCountry country={countries[0]} />
    if (countries.length > 10) return <p>Too many matches, specify another filter</p>
    return (
        <div className="countries">
            {countries.map((country, index) => {
                return (
                    <div className="country" id={index} key={country.name}>
                        <Country name={country.name} />
                        <Button onClick={handleClick} />
                    </div>
                )
            })}
        </div>
    )
}

export default Countries