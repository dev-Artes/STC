import React, { useState } from 'react'

import { Timestamp } from 'firebase/firestore'

// Services
import { addComputer } from '../services'

// Utils
import { checkTagExists } from '../utils/checkTag'

const ComputerForm = () => {
  const [ tagComputer, setTagComputer ] = useState( '' )
  const [ assignedTo, setAssignedTo ] = useState( '' )


  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if ( assignedTo && tagComputer ) {
      const tagExists = await checkTagExists( tagComputer )

      if ( tagExists ) {
        throw new Error('tag name already exists')
      } else { 
        const date_added = Timestamp.fromDate(new Date())
        
        const computerData = {
          tag: tagComputer,
          isActive: true,
          assignedTo: assignedTo,
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

      <div className='mb-2'>
        <label htmlFor = "asigned_to">Asignado a:</label>
        <input
          className="border rounded p-2 w-full mb-4"
          type = "text"
          id = "tag"
          value = {assignedTo}
          onChange = {(e) => setAssignedTo(e.target.value)}
          required
        />
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