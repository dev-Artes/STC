import { Layout } from '../components/'

import { ReportsForm } from '../components/reports'

const GenerateReport = () => {
    return (
        <Layout>
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4">Nuevo Informe</h2>
                <div className="max-w-md mx-auto bg-white p-6 shadow rounded-md">
                    <ReportsForm />
                </div>
            </div>
        </Layout>
    )
}

export default GenerateReport
