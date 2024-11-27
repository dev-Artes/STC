import { 
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  collection,
} from "firebase/firestore"
import { db } from '../firebase/firebase-config'

const addUser = async ( user ) => {
  try {
    const docRef = await addDoc(collection(db, "users"), user)
    alert('Document with Id: ', docRef.id, 'has been created')
  } catch ( e ) {
    console.error("Error to create user: ", e)
  }
};

const getUserById = async ( userId ) => {
  try {
    const userDoc = doc( db, "users", userId )
    const user = await getDoc( userDoc )

    if ( user.exists() ) return user.data()
    
  } catch ( error ) {
    throw new Error("User not found", e);
    
  }
}

const getUsers = async () => {
  try {
    const usersSnapshot = await getDocs(collection(db, "users"))
    const usersList = usersSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    return usersList

  } catch ( e ) {
    console.error("User not fount: ", e)
  }
};

const updateUser = async ( userId, updatedUser ) => {
  try {
    const userDocRef = doc(db, "users", userId)
    await updateDoc(userDocRef, updatedUser)
  
    // console.log("User with Id has been updated:", userId)
  
  } catch ( e ) {
    console.error("Error to update user: ", e)
  }
};

const deleteUser = async ( userId ) => {
  try {
    const userDocRef = doc(db, "users", userId)
    await deleteDoc(userDocRef)
    
    // console.log("Usuario eliminado con ID:", userId)
  
  } catch ( e ) {
    console.error("Error to delete user: ", e)
  }
};

export { 
  addUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserById,
}