import Button from './Button'

const Country = ({ country }) => {
    return (
        <div>
            <h2>{country.name.common}</h2>
            <img src={country.flags.png} height='100' alt={`flag of ${country.name.common}`} />
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h4>Spoken languages</h4>
            <ul>
                {Object.values(country.languages)
                    .map(language => <li key={language}>{language}</li>)}
            </ul>
        </div>)
}

const CountryInList = ({ name }) => <div><p>{name}</p></div>

const Countries = ({ countries, handleClick }) => {
    if (countries.length === 1) return <Country country={countries[0]} />
    if (countries.length > 10) return <p>Too many matches, specify another filter</p>
    return (
        <div className="countries">
            {countries.map((country, index) => {
                return (
                    <div className="country" id={index} key={country.name.common}>
                        <CountryInList name={country.name.common} />
                        <Button onClick={() => handleClick(country)} />
                    </div>
                )
            })}
        </div>
    )
}

export default Countries