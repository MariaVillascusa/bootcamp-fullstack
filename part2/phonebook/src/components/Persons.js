
const Person = ({ name, number }) => <p>{name} {number}</p>

const Persons = ({ persons, onClick }) => {
    return (
        <div className="numbers">
            {persons.map(person => {
                return (
                    <div className="personData" key={person.id}>
                        <Person name={person.name} number={person.number} />
                        <button onClick={() => onClick(person.id)}>Delete</button>
                    </div>
                )
            })}

        </div>
    )
}

export default Persons