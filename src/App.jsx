import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import AppRouter from './router/AppRouter';
// import AuthProvider from './auth/AuthProvider';

// Components
import { Home, GenerateTag, ReportsView, GenerateReport } from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/nueva-etiqueta" element={ <GenerateTag /> } />
        <Route path="/informes-de-baja" element={ <ReportsView /> } />
        <Route path="/nuevo-informe" element={ <GenerateReport /> } />
      </Routes>
    </Router>
  
    // <AuthProvider>
      /* <AppRouter/> */
    /* </AuthProvider> */

  )
}

export default App
