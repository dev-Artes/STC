import React, { useState } from 'react'
import Input from './Input'

const UserForm = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addUser(user)
    }
    
    return (
        <div>
            <h1>Agregar Usuario</h1>
            <form onSubmit={handleSubmit}>
            <Input
                name = "name"
                type = 'text'
                placeholder = 'Nombre'
                value = { user.name }
                handleChange = {handleInputChange}
            />

            <Input
                name = "email"
                type = 'email'
                placeholder = "Email"
                value={ user.email }
                handleChange = { handleInputChange }
            />

            <button 
                type="submit"
                className="btn btn-success hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >Agregar Usuario</button>
            </form>
        </div>
    )
}

export default UserForm