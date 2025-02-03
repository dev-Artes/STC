import React, { useState } from 'react'

// Services
import { updateComputer } from "../services"

// Components
import Modal from './Modal'
import Button from './Button'

// Utils
import { checkTagExists } from '../utils/checkTag'


const EditForm = ({ setIsOpen, item }) => {
  const [ modalMessage, setModalMessage ] = useState('')
  const [ inputTag, setInputTag ] = useState( item.tag )
  const [ isModalOpen, setIsModalOpen ] = useState( false )

  const handleInputChange = ( e ) => {
    setInputTag( e.target.value )
  }

  const handleFormSubmit = async ( e ) => {
    e.preventDefault()

    if ( inputTag ) {
      const tagExists = await checkTagExists( inputTag )
      
      if ( tagExists ) {
        setModalMessage(`Ya existe un registro con el nombre de '${inputTag}'`)
        setIsModalOpen(true)
        return
      } else {
        const updatedComputerData   = {
          ...item,
          tag: inputTag,
        }
        await updateComputer( item.id, updatedComputerData )
        setIsOpen( false )
      }
    } else {
      throw new Error("Form not valid: missing computer tag")
    }
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen( false )
        }
      }}
      >
        {isModalOpen && <Modal message={modalMessage} type="info" handleCloseModal={() => setIsModalOpen(false)} />}
        <div
          className="bg-white rounded-lg shadow-lg p-4 w-1/2"
          onClick={(e) => e.stopPropagation()}
          >
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
                >
                Etiqueta
              </label>
              
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="inputTag"
                name="name"
                type="text"
                required
                value={ inputTag }
                placeholder={ item.tag }
                onChange={handleInputChange}
              />
            </div>
                
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
                >
                  Asignado a
              </label>
                    
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="created_by"
                name="created_by"
                type="created_by"
                value={ item.assignedTo }
                readOnly
                disabled
              />
            </div>
              
            <div className="flex justify-between">
              <Button 
                color='gray-200'
                hoverColor='gray-400'
                textColor='gray'
                content='Cancelar'
                type='button'
                onClick={() => setIsOpen(false)}
              />

              <Button
                color='green-500'
                hoverColor='green-700'
                textColor='white'
                content='Actualizar'
                type='submit'
              />
            </div>
          </form>
        </div>
    </div>
  )
}

export default EditForm
