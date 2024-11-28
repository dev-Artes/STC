import React from 'react'

// Components
import { Button } from '.'
// import { deleteComputer } from '../services'

const ModalDialog = ({ modalContent, handleCloseModal, handleConfirmDelete }) => {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className='text-lg font-bold mb-4'>
                    { modalContent }
                </h2>
                <div className="flex justify-between">
                    <Button 
                        color='red-500'
                        hoverColor='red-700'
                        content='Eliminar'
                        textColor='white'
                        onClick={ handleConfirmDelete }
                    />

                    <Button
                        color='gray-300'
                        hoverColor='gray-400'
                        textColor='gray'
                        content='Cancelar'
                        onClick={ handleCloseModal }
                    />                    
                </div>
            </div>
        </div>
    )
}

export default ModalDialog
