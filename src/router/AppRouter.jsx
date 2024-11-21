import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PublicRoute } from './PublicRoute'

// Component
import Login from '../components/Login'
import Home from '../pages/Home'

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={ 
                    <PublicRoute>
                        <Routes>
                            <Route 
                                path='/'
                                element = { <Home /> }
                            />
                        </Routes>
                    </PublicRoute>
                } />
            </Routes>
        </>
    )
}

export default AppRouter
