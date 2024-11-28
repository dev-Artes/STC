import React, { useState, useEffect } from 'react';
import { loginUser, monitorAuthState } from '../firebase/firebase-auth';

const Login = () => {

  const [ email, setEmail ] = useState( '' )
  const [ password, setPassword ] = useState( '' )
  const [ user, setUser ] = useState( null )

  useEffect(() => {
    monitorAuthState(setUser);
  }, [])

  const handleLogin = async () => {
    try {
      await loginUser(email, password);
      console.log('Usuario logueado con éxito')
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
    }
  }

  return (
    <div className="flex h-screen">
      <div className="bg-blue-500 flex-1 flex items-center justify-center">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48" />
      </div>
    
      <div className="bg-white flex-1 p-8 pl-16 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
        <form onSubmit={ handleLogin } className="ml-4 w-3/4">
        <label className="block mb-2">
          <span className="block text-sm font-medium text-gray-700">Correo electrónico</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value) }
            className="block w-full p-2 border border-gray-300 rounded-md"
            />
        </label>
        <label className="block mb-4">
          <span className="block text-sm font-medium text-gray-700">Contraseña</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
        </label>
        
        <div className='flex justify-center'>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Iniciar Sesión
          </button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login