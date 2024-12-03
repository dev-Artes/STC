import React from 'react'
import { addReport } from '../../services'
import { Timestamp } from 'firebase/firestore'

const ReportsForm = () => {
    const date_added = Timestamp.fromDate(new Date())

    const sendData = async () => {
        const data = {
            numReport: 27,
            brand: 'HP',
            model: 'Pavilion 23 Touch All-In-One',
            serie: '4CS43700QJ',
            assign: 'PCART-0170',
            user: 'Mabel Urrutia',
            observation: 'Equipo presenta error crítico con su disco duro y su procesador no cumple con los requisitos que se piden hoy en día',
            recommendation: '',
            date: date_added
        }

        try {
            await addReport(data)
        } catch (error) {
            console.error("Error:", error)
        }
    }

    return (
        <button
            className='px-2 py-2 rounded bg-green-400'
        >
            Add Report
        </button>
    )
}

export default ReportsForm;
