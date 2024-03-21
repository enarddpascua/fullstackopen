import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import personService from './service/personService'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [phone, setNewPhone] = useState('')
  const [notifMessage, setNotifMessage] = useState('')


  useEffect(() => {
    getAllPersons()
  }, [])

  const getAllPersons = () => {
    personService.getAll().then(res => setPersons(res))
  }

  const handleName = (e) => {
    setNewName(e.target.value)
  }

  const handlePhone = (e) => {
    setNewPhone(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const checkIfExist = persons.filter((person) => person.name === newName)
    if (checkIfExist.length > 0){
      if(window.confirm(`${checkIfExist[0].name} is already added to phonebook, replace the old number with a new one?`)){
        checkIfExist[0].number = phone
        personService.updatePerson(checkIfExist[0])
        setNotifMessage(`${checkIfExist[0].name} has been updated`)
      }
    }else{
      personService.create({name:newName, number:phone}).then(res => {
        setPersons(persons.concat(res))
        setNotifMessage(`${res.name} has been added`)
      }).catch(err => setNotifMessage(err.response.data.error))
    }
    setNewName('')
    setNewPhone('')
    setTimeout(() => {
      setNotifMessage('')
    }, 2000);
  }

  const handleDelete = (person) => {
    let id = person.id
    let personName = person.name
    if(window.confirm(`Delete ${personName}?`)){
      personService.deletePerson(id).then(() => {
        getAllPersons()
      }).catch(err => {
        setNotifMessage(`${personName} has already been removed from server`)
        setNotifMessage('')
      })
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
     <Filter/>
     <Notification message={notifMessage}/>
      <form>
       <PersonForm text={"name"} value={newName} onChange={handleName}/>
       <PersonForm text={"phone"} value={phone} onChange={handlePhone}/>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(el => {
        return(
            <Person key={el.id} name={el.name} number={el.number} onDelete={() => handleDelete(el)}/>)}
          )
      }
    </div>
  )
}

export default App