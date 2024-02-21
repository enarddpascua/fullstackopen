import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [phone, setNewPhone] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([1,2,3,4])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])


  const handleName = (e) => {
    setNewName(e.target.value)
  }

  const handlePhone = (e) => {
    setNewPhone(e.target.value)
  }

  const handleSearch = (e) => {
    const filteredContacts = persons.filter(person => person.name.toLowerCase().includes(e.target.value)).map(el => el.id)
    setFilteredPersons(filteredContacts)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const checkIfExist = persons.filter((person) => person.name === newName )
    if (checkIfExist.length > 0){
      alert(`${newName} is already added to phonebook`)
    }else{
      setPersons(persons.concat({name: newName, number: phone, id: persons.length + 1}))
      setNewName('')
      setNewPhone('')
      setFilteredPersons(filteredPersons.concat(persons.length + 1))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
     <Filter onChange={handleSearch}/>
      <form>
       <PersonForm text={"name"} value={newName} onChange={handleName}/>
       <PersonForm text={"phone"} value={phone} onChange={handlePhone}/>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(el => <Person key={el.id} show={filteredPersons.includes(el.id)} name={el.name} number={el.number}/>)}
    </div>
  )
}

export default App