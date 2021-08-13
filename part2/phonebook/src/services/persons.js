import axios from 'axios'

const url = 'http://localhost:3001/api/persons'

const getAll = () => {
    return axios.get(url).then((response) => response.data)
}

const create = newPerson => {
    return axios.post(url, newPerson).then((response) => response.data)
}

const deletePersons = (id) => {
    return axios.delete(`${url}/${id}`).then((response) => response.data)
}

const update = (id, newNumber) => {
    return axios.put(`${url}/${id}`, newNumber).then((response) => response.data)
}

const personService = {
    getAll,
    create,
    deletePersons,
    update
}

export default personService