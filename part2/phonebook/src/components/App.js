import React, { useState } from 'react'
import Persons from './Persons'
import Form from './Form'
import Filter from './Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findValue, setFind] = useState('')

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
  const isRepeat = (persons.findIndex(person => person.name === newName)) !== -1

  const handleNameChange = e => setNewName(e.target.value)
  const handleNumberChange = e => setNewNumber(e.target.value)

  const findPerson = e => {
    setFind(e.target.value)
    filter();
  }

  const filter = () => {
    const search = persons.filter(person => person.name.toLowerCase().includes(findValue.toLocaleLowerCase()))
    setPersons(search)
  }

  return (
    <div className="container">
      <h2>Phonebook</h2>
      <Filter findValue={findValue} findPerson={findPerson}/>
      <h2>Add a new</h2>
      <Form onSubmit={addPerson} />
      <h2>Numbers</h2>
      <Persons persons={persons} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
    </div>
  )
}

export default App
