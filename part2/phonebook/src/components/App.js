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

  const deletePerson = (id) => {
    console.log(persons[4].id);
    console.log(id);
    const person = persons.filter(person => person.id === id)
    console.log(person);
    if (window.confirm(`Delete ${person[0].name} ?`)) {
      personService
        .deletePersons(id)
        .then(deletedPerson => {
          console.log(deletedPerson);
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  return (
    <div className="container">
      <h2>Phonebook</h2>
      <Filter findValue={findValue} findPerson={findPerson} />
      <h2>Add a new</h2>
      <Form onSubmit={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} onClick={deletePerson} />
    </div>
  )
}

export default App
