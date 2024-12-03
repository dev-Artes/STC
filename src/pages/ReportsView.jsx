
// Components
import { Layout } from '../components'
import { ReportsTable } from '../components/reports'
import { CircularProgress } from '@mui/material'

// Hooks
import useReports from '../hooks/useReports'

const ReportsView = () => {
    
    const { error, headers, loading, reports } = useReports()

    if ( error ) return <div>{error}</div>
    if ( loading ) return <div className="fixed inset-0 flex items-center justify-center z-50" > <CircularProgress /> </div>

    return (
        <Layout>
            <div className='container mx-auto'>
                <h2 className='text-2xl font-bold mb-4'>
                    Informes de Baja
                </h2>
                <div className='bg-white p-6 shadow rounded'>
                    <ReportsTable
                        data={ reports }
                        headers={ headers }
                    />
                </div>
            </div> 
        </Layout>
    )
}

export default ReportsView
