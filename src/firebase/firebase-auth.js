import { 
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'

import { db } from './firebase-config'


const registerUser = async ( email, password, name ) => {
  const auth = getAuth();

  try {
    const userCredential = await createUserWithEmailAndPassword( auth, email, password )
    const user = userCredential.user

    await setDoc(doc( db, 'users', user.uid ), {
      name,
      email,
      created_at: new Date(),
    })

    alert("Usuario registrado con éxito")

  } catch ( error ) {
    throw new Error("Error al registrar el usuario:", error)
  }
}

const loginUser = async ( email, password ) => {
  const auth = getAuth()

  try {
    await signInWithEmailAndPassword( auth, email, password )
    console.log("Usuario logueado con éxito")
  } catch ( error ) {
    console.error("Error al iniciar sesión:", error)
  }
}

const monitorAuthState = (callback) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      callback( user )
    } else {
      callback( null )
    }
  })
}

export { 
  loginUser,
  registerUser,
  monitorAuthState,
}