import React, { useEffect, useState } from 'react'

// Components
import Table from '../components/Table'
import Layout from '../components/Layout'
import EditForm from '../components/EditForm'

// Services
import { getComputers } from '../services/computer-service'

const Home = () => {

    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ computers, setComputers ] = useState([])
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const [ selectedItem, setSelectedItem ] = useState(null)


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
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedItem(null)
    }

    const handleUpdate = ( updatedComputer ) => {
        setComputers( ( prevComputers ) =>
            prevComputers.map((computer) =>
                computer.id === updatedComputer.id ? { ...item, ...updatedItem } : computer
            )
        )
    }

    if ( loading ) return <div>Loading...</div>

    if ( error ) return <div>{error}</div>

    return (
        <Layout>
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4">Lista de Etiquetas</h2>
                <p className="mb-4">.-.</p>
                <div className="bg-white p-6 shadow rounded">
                    <Table data={ computers } onEditClick={handleEditClick} />
                    { isModalOpen && (
                        <EditForm
                            item = { selectedItem }
                            setIsOpen = { handleCloseModal }
                            onUpdate = { handleUpdate }
                        />
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default Home