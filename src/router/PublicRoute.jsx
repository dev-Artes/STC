import React, { useContext } from 'react'
import { AuthContext } from '../auth/CreateContext'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({ children }) => {
    const { isLogged } = useContext( AuthContext )

    return ( !isLogged )
        ? children
        : <Navigate to='/' />

}

