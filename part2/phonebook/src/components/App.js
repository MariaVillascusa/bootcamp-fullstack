import React, { useState, useEffect } from 'react'
import Persons from './Persons'
import Form from './Form'
import Filter from './Filter'
import personService from '../services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findValue, setFind] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

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
    personService
    .create(personObj)
    .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
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
      <Filter findValue={findValue} findPerson={findPerson} />
      <h2>Add a new</h2>
      <Form onSubmit={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App
