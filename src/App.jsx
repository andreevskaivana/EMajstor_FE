import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CategoryPage } from './pages/category/CategoryPage.jsx';
import { CompaniesPerJobPage } from './pages/companies/CompaniesPerJobPage.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CategoryPage />} />
                <Route path="/companies" element={<CompaniesPerJobPage />} />
            </Routes>
        </Router>
    );
}

export default App;
