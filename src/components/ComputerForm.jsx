import React, { useState, useEffect } from 'react';
import { addComputer } from '../services/computer-service'
import { getUsers } from '../services/user-service'

const ComputerForm = () => {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [tagComputer, setTagComputer] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      const usersFromDB = await getUsers()
      setUsers(usersFromDB)
    }
    fetchUsers()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (selectedUser && tagComputer) {
      const computerData = {
        tag: tagComputer,
        isActive: true,
        created_by: selectedUser,
        created_at: new Date(),
      }
  
      addComputer(computerData)
    } else {
      console.log('Form not valid: missing user or computer tag');
    }
  }
  

  return (
    <form onSubmit = { handleSubmit }>
      <div className='mb-2'>
        <label htmlFor = "tag_computer">Etiqueta del computador:</label>
        <input
          className="border rounded p-2 w-full mb-4"
          type = "text"
          id = "tag"
          value = {tagComputer}
          onChange = {(e) => setTagComputer(e.target.value)}
          required
        />
      </div>

      <div className='mb-4'>
        <label htmlFor="user" className='block text-sm font-medium text-gray-700'></label>
        <select
          className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          id="created_by"
          onChange={(e) => {
            const userId = e.target.value;
            const user = users.find((user) => user.id === userId);
            setSelectedUser(user);
          }}
          required
        >
          <option value="">Seleccionar usuario</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      <button 
        type="submit"
        className='w-full p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md docus:ring-blue-500 focus:border-blue-500'
        >
          Agregar Computador
        </button>
    </form>
  )
}

export default ComputerForm