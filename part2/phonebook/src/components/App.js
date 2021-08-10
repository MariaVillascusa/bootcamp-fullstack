import React, { useState, useEffect } from 'react'
import Persons from './Persons'
import Form from './Form'
import Filter from './Filter'
import personService from '../services/persons'
import Notification from './Notification'
import Error from './Error'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findValue, setFind] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setError(null)
    personService.getAll()
      .then(initialPersons => setPersons(initialPersons))
      .catch(error => showErrorMessage('Something went wrong'))
  }, [])

  const addPerson = e => {
    e.preventDefault()
    setError(null)

    const personObj = {
      name: newName,
      number: newNumber
    }
    const updatedPerson = persons.filter(person => person.name === newName)
    if (updatedPerson.length !== 0) {
      if (window.confirm(`${updatedPerson[0].name} is already added to phonebook, replace the old number with a new one?`)) {
        personService.update(updatedPerson[0].id, personObj)
          .then(changedPerson => {
            setPersons(persons.map(person => person.id !== updatedPerson[0].id ? person : changedPerson))
            clearForm()
            showMessage("Updated", personObj)
          }).catch(err => showErrorMessage(`${updatedPerson[0].name} can not be updated`))
      } else {
        clearForm()
      }
      return
    }

    personService.create(personObj)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        clearForm()
        showMessage("Add", personObj)
      }).catch(err => showErrorMessage(`${personObj.name} can not be created`))
  }

  const deletePerson = (id) => {
    setError(null)
    const person = persons.filter(person => person.id === id)
    if (window.confirm(`Delete ${person[0].name} ?`)) {
      personService
        .deletePersons(id)
        .then(deletedPerson => {
          setPersons(persons.filter(p => p.id !== id))
        }).catch(err => showErrorMessage(
          `${person[0].name} was already removed from server`,
        ))
    }
  }

  const handleNameChange = e => setNewName(e.target.value)
  const handleNumberChange = e => setNewNumber(e.target.value)
  const clearForm = () => {
    setNewName('')
    setNewNumber('')
  }
  const findPerson = e => {
    setFind(e.target.value)
    filter();
  }
  const filter = () => {
    const search = persons.filter(person => person.name.toLowerCase().includes(findValue.toLocaleLowerCase()))
    setPersons(search)
  }
  
  const showMessage = (message, person) => {
    setMessage(`${message} ${person.name}`)
    setTimeout(() => {
      setMessage(null)
    }, 2000)
  }

  const showErrorMessage = (errorMessage) => {
    setError(errorMessage)
    setTimeout(() => {
      setError(null)
    }, 7000)
  }

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <Notification message={message} />
      <Error error={error} />
      <Filter findValue={findValue} findPerson={findPerson} />
      <h2>Add a new</h2>
      <Form onSubmit={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} onClick={deletePerson} />
    </div>
  )
}

export default App
