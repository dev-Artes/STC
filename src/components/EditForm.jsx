import React, { useState } from 'react'

// Services
import { updateComputer } from "../services";

const EditForm = ({ setIsOpen, item }) => {
  const [ inputTag, setInputTag ] = useState( item.tag )

  const handleInputChange = ( e ) => {
    setInputTag( e.target.value )
  }

  const handleFormSubmit = async ( e ) => {
    e.preventDefault()

    const updatedComputerData   = {
      ...item,
      tag: inputTag,
    }
    await updateComputer( item.id, updatedComputerData )
    setIsOpen( false )
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
                  Ti 
              </label>
                    
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="created_by"
                name="created_by"
                type="created_by"
                value={ item.created_by.name }
                readOnly
                disabled
              />
            </div>
              
            <div className="flex justify-between">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={() => setIsOpen(false)}
                >
                  Cancelar
              </button>
                
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
                >
                  Actualizar
              </button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default EditForm
