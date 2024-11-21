import { 
    doc,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    collection,
} from "firebase/firestore";

import { db } from "../firebase/firebase-config";

    const addComputer = async (computer) => {
        console.log('comp', computer);
        try {
          const docRef = await addDoc(collection(db, "pc_tag"), computer);
          console.log('Document written with ID: ', docRef.id);
          alert('Document with Id: ' + docRef.id + ' has been created');
        } catch (error) {
          console.error('Error adding document: ', error);  // Usa console.error para más detalles
          alert('Error adding document');
        }
      }
      

const getComputerById = async ( computerId ) => {
    try {
        const computerDoc = doc( db, "pc_tag", computerId )
        const computer = await getDoc( computerDoc )
        if ( computer.exist() ) return computer.data()
    } catch ( error ) {
        
    }
}

const getComputers = async () => {
    try {
        const data = await getDocs( collection(db, "pc_tag") )
        const computerList = data.docs.map( doc => ({
            id: doc.id,
            ...doc.data()
        }) )

        return computerList

    } catch ( error ) {
        throw new Error("Computers not found: ", error )
        
    }
}

const updateComputer = async ( computerId, updatedComputer ) => {
    try {
        const computer = doc(db, "pc_tag", computerId)
        await updateDoc( computer, updatedComputer )

        alert('Computer with Id: ', computerId, 'has been updated')
    } catch ( error ) {
        
    }
}

const deleteComputer = async ( computerId ) => {
    try {
        console.log('Id', computerId);
        
        const computer = doc(db, "pc_tag", computerId)
        await deleteDoc(computer )
    } catch ( error)  {
        throw new Error("Error to delete computer", error);

    }
}

export {
    addComputer,
    getComputers,
    updateComputer,
    deleteComputer,
    getComputerById,
}