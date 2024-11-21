import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import AppRouter from './router/AppRouter';
// import AuthProvider from './auth/AuthProvider';

import Home from './pages/Home';
import GenerateTag from './pages/GenerateTag';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/ingresar-etiqueta" element={ <GenerateTag /> } />
      </Routes>
    </Router>
  
    // <AuthProvider>
      /* <AppRouter/> */
    /* </AuthProvider> */

  )
}

export default App
