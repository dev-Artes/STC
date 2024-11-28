import React from 'react'

// Components
import { Layout, ComputerForm } from '../components'

const GenerateTag = () => {
    return (
        <Layout>
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4">Registrar etiqueta</h2>
                <div className="max-w-md mx-auto bg-white p-6 shadow rounded-md shadow-md">
                    <ComputerForm />
                </div>
            </div>
        </Layout>
    )
}

export default GenerateTag
