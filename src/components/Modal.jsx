// Components
import { Button } from '.'

const Modal = ({ type, message, handleCloseModal, handleConfirmDelete }) => {
    const modalContent = () => {
        if ( type === 'info' ) {
            return <p>{ message }</p>
        } else if ( type === 'confirm' ) {
            return (
                <>
                    <h2 className='text-lg font-bold mb-4'>
                        { message }
                    </h2>
                    <div className="flex justify-between bg-">
                        <Button
                            color='gray-200'
                            hoverColor='gray-400'
                            textColor='gray'
                            content='Cancelar'
                            type='button'
                            onClick={ handleCloseModal }
                        />
                        <Button 
                            color='red-600'
                            hoverColor='red-800'
                            content='Eliminar'
                            textColor='white'
                            type='submit'
                            onClick={ handleConfirmDelete }
                        />        
                    </div>
                </>
            )
        }
    }
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg relative">
                <button 
                    onClick={handleCloseModal} 
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold text-xl"
                    >
                    X
                </button>
                {modalContent()}
            </div>
        </div>
    )
}

export default Modal
