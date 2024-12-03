import React, { useEffect, useState } from 'react'

// Components
import { Table, Layout, EditForm } from '../components'

// Services
import { getComputers } from '../services'
import { CircularProgress } from '@mui/material'

const Home = () => {

    const [ error, setError ] = useState( null )
    const [ loading, setLoading ] = useState( true )
    const [ computers, setComputers ] = useState( [] )
    const [ isModalOpen, setIsModalOpen ] = useState( false )
    const [ selectedItem, setSelectedItem ] = useState( null )

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getComputers()
                setComputers(data)
            } catch ( error ) {
                setError('Error loading computers')
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [computers] )

    const handleEditClick = ( item ) => {
        setSelectedItem( item )
        setIsModalOpen( true )
    }

    const handleCloseModal = () => {
        setIsModalOpen( false )
        setSelectedItem( null )
    }


    if ( loading ) return <div className="fixed inset-0 flex items-center justify-center z-50" > <CircularProgress /> </div>

    if ( error ) return <div>{error}</div>

    return (
        <Layout>
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4">Etiquetas Registradas</h2>
                {/* <p className="mb-4">.-.</p> */}
                <div className="bg-white p-6 shadow rounded">
                    <Table data={ computers } onEditClick={handleEditClick} />
                    { isModalOpen && (
                        <EditForm
                            item = { selectedItem }
                            setIsOpen = { handleCloseModal }
                        />
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default Home