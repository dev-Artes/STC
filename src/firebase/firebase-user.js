import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { db } from './firebase-config'
import { setDoc, doc } from 'firebase/firestore'

export const registerUser = async (email, password, name) => {
  const auth = getAuth()
  
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email,
      created_at: new Date(),
    })

    console.log("Usuario creado con éxito en Firebase Auth y Firestore")

  } catch (error) {
    console.error("Error al crear el usuario:", error)
  }
}