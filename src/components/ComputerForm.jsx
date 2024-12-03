import React, { useState, useEffect } from 'react'

import { Timestamp } from 'firebase/firestore'

// Services
import { addComputer, getUsers } from '../services'

// Utils
import { checkTagExists } from '../utils/checkTag'

const ComputerForm = () => {
  const [ users, setUsers ] = useState( [] )
  const [ selectedUser, setSelectedUser ] = useState( null )
  const [ tagComputer, setTagComputer ] = useState( '' )

  useEffect(() => {
    const fetchUsers = async () => {
      const usersFromDB = await getUsers()
      setUsers(usersFromDB)
    }
    fetchUsers()
  }, [])



  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if ( selectedUser && tagComputer ) {
      const tagExists = await checkTagExists( tagComputer )

      if ( tagExists ) {
        throw new Error('tag name already exists')
      } else { 
        const date_added = Timestamp.fromDate(new Date())
        
        const computerData = {
          tag: tagComputer,
          isActive: true,
          created_by: selectedUser,
          created_at: date_added,
        }
        await addComputer( computerData )
      }
    } else {
      throw new Error('Form not valid: missing user or computer tag');
    }
  }
  

  return (
    <form onSubmit = { handleSubmit }>
      <div className='mb-2'>
        <label htmlFor = "tag_computer">Etiqueta del equipo:</label>
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
          <option value="">Ti responsable</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      <button 
        type="submit"
        className='w-full p-2 bg-green-500 hover:bg-green-700 text-white rounded-md docus:ring-blue-500 focus:border-green-500'
        >
          Agregar etiqueta
        </button>
    </form>
  )
}

export default ComputerForm