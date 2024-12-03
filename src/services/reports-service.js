import { db } from '../firebase/firebase-config'
import { addDoc, collection, getDocs } from 'firebase/firestore'


const addReport = async ( report ) => {
    try {
        const docRef = await addDoc( collection(db, "reports"), report )
        if ( docRef ) alert ('Document with Id: ', docRef.id, 'has been created',)
    } catch ( error ) {
        throw new Error("Error adding document: ", error);        
    }
}

const getReports = async () => {
    try {
        const reportDoc = await getDocs( collection(db, "reports") )
        const reports = reportDoc.docs.map( doc => ({
            id: doc.id,
            ...doc.data()
            })
        )
        return reports
    } catch ( error ) {
        throw new Error( "Reports not found: ", error );
    }
}

const getReportById = async ( reportId ) => {
    try {
        const reportDoc = doc( db, "reports", reportId )
        const report = await getDocs( reportDoc )

        if ( report.exists() ) return report.data()
    } catch ( error ) {
        throw new Error("Computer not found: ", error);
        
        
    }

}

export {
    addReport,
    getReports,
    getReportById,
}