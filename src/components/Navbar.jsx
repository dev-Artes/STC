import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">STC</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                className="hover:underline"
                to="/"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline"
                to="/nueva-etiqueta"
              >
                Nueva etiqueta
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline"
                to="/informes-de-baja"
              >
                Actas
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline"
                to="/nuevo-informe"
              >
                Generar Acta
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar