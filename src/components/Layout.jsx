import React from 'react'

// Components
import { Navbar, Footer } from './'


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-section-padding bg-gray-100">
        { children }
      </main>
      <Footer />
    </div>
  )
}

export default Layout