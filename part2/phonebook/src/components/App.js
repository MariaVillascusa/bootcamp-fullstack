import React, { useState } from 'react'

const Person = ({ name,number }) => <p>{name} {number}</p>

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (e) => {
    e.preventDefault()
    if (isRepeat) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const personObj = { 
      name: newName, 
      number: newNumber 
    }
    setPersons(persons.concat(personObj))
    setNewName("")
  }

  const handleNameChange = e => setNewName(e.target.value)
  const handleNumberChange = e => setNewNumber(e.target.value)

  const isRepeat = (persons.findIndex(person => person.name === newName)) !== -1

  return (
    <div className="container">
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input type="text" value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input  type="text" value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Person key={person.name} name={person.name} number={person.number}/>)}
    </div>
  )
}

export default App
