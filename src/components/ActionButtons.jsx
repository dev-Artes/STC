import React, { useState } from 'react'

// Components
import { EditForm } from './'

// Services
import { deleteComputer, updateComputer } from '../services'

const ActionButtons = ({ item }) => {

    const [ isActive, setIsActive ] = useState( item.isActive )
    const [ isOpen, setIsOpen ] = useState( false )

    const handleToggle = async() => {
        const newStatus = !isActive
        setIsActive( newStatus )
        
        const updateStatus   = {
            ...item,
            isActive: newStatus,
        } 
        
        await updateComputer( item.id, updateStatus )
    }

    const handleDelete = () => {
        deleteComputer( item.id )
    }

    return (
        <>
            <button
                className="text-red-500 hover:text-red-700"
                onClick={handleDelete}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                </svg>
            </button>

            <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => setIsOpen(true)}
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                </svg>
            </button>

                { isOpen && (
                    <EditForm item={ item } setIsOpen={setIsOpen}/>
                )}
                
            <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleToggle}
            >
                <div className="flex items-center">
                    <div
                        className={`w-4 h-4 rounded-full ${
                          isActive ? 'bg-green-500' : 'bg-gray-400'
                        }`}
                    />
                </div>
            </button>
        </>
    )
}

export default ActionButtons
