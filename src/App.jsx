import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import AppRouter from './router/AppRouter';
// import AuthProvider from './auth/AuthProvider';

// Components
import { Home, GenerateTag } from './pages';

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
