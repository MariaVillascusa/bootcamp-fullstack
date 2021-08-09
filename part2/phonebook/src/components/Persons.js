
const Person = ({ name, number }) => <p>{name} {number}</p>

const Persons = ({ persons }) => {
    return (
        <div className="numbers">
            {persons.map(person => <Person key={person.id} name={person.name} number={person.number} />)}
        </div>
    )
}

export default Persons