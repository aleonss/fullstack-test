import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import CompaniesPage from './pages/CompaniesPage';
import EmployeesPage from './pages/EmployeesPage';

function App() {
  return (
    <Router>
      <a href='/'><h1>Tu Empleado Perfecto</h1></a>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
