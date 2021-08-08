const OneCountry = ({ country }) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <h4>Languajes</h4>
            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={country.flag} alt="Flag"></img>
        </div>
    )
}

const Country = ({ name }) => <div><p>{name}</p></div>

const Countries = ({ countries }) => {
    if (countries.length === 1) return <OneCountry country={countries[0]} />
    if (countries.length > 10) return <p>Too many matches, specify another filter</p>
    return (
        <div>
            {countries.map(country => <Country key={country.name} name={country.name} />)}
        </div>
    )
}

export default Countries