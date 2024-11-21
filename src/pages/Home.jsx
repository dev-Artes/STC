import React, { useEffect, useState } from 'react'

// Components
import Layout from '../components/Layout'
import Table from '../components/Table'
import { getComputers } from '../services/computer-service'

const Home = () => {

    const [ computers, setComputers ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

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
    }, [])

    if ( loading ) return <div>Loading...</div>

    if ( error ) return <div>{error}</div>

    return (
        <Layout>
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4">Lista de Etiquetas</h2>
                <p className="mb-4">.-.</p>
                <div className="bg-white p-6 shadow rounded">
                    <Table data={ computers }/>
                </div>
            </div>
        </Layout>
    )
}

export default Home