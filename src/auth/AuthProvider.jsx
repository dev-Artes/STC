// Firebase
import { 
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth'

import { auth } from '../firebase/firebase-config'

// React
import { useEffect, useState } from 'react'

// Prop-types
import PropTypes from 'prop-types'
import { AuthContext } from './CreateContext'

const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    const createUser = ( email, passaword) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, passaword)
    }

    const loginUser = ( email, password) => {
        setLoading( true )
        return signInWithEmailAndPassword( auth, email, password )
    }

    const logOut = ( email, password ) => {
        setLoading( true )
        return signOut( auth )
    }

    useEffect( () => {
        const unsuscribe = onAuthStateChanged( auth, ( currentUser ) => {
            setUser( currentUser )
            setLoading( false )
        })
        return () => {
            unsuscribe()
        }
    }, [])

    const authValue = {
        user, 
        logOut, 
        loading,
        loginUser, 
        createUser, 
    }

    return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
}

AuthProvider.PropTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider
