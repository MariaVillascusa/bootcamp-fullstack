const Data = ({ country, weather }) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h4>Spoken languages</h4>
            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={country.flag} alt="Flag"></img>
            <h4>Weather in {country.capital}</h4>
            <h5>Temperature: {weather[0]} </h5>
            <img className="weather" alt="Weather" src={weather[1]}></img>
            <h5>Wind: {weather[2]} </h5>

        </div>
    )
}

export default Data