import { useEffect, useState } from 'react'

// Service
import { getReports } from '../services'


const useReports = () => {

    const [ reports, setReports ] = useState([])
    const [ error, setError ] = useState( null )
    const [ loading, setLoading ] = useState( true )    

    useEffect( () => {
        const fetchData = async () => {
            try {
                const data = await getReports()
                setReports( data )
            } catch ( error ) {
                setError('Error loading reports')
            } finally {
                setLoading( false )
            }
        }
        fetchData()
    }, [reports])

    const headers = [{
        id: 'idReport',
        numReport: 'N de informe',
        brand: 'Marca',
        model: 'Model',
        serie: 'N Serie',
        assign: 'N assignación',
        user: 'Usuario',
        observation: 'Observación',
        recommendation: 'Recomendación',
        date: 'Fecha',
    }]

    return {
        headers, loading, error, reports
    }
}

export default useReports
