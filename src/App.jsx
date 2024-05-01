import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CategoryPage } from './pages/category/CategoryPage.jsx';
import { CompaniesPerJobPage } from './pages/companies/CompaniesPerJobPage.jsx';
import {CompanyDetails} from "./pages/company/CompanyDetails.jsx";
import {Navbar} from "./layout/Navbar.jsx";
import './index.css'
import {LogInCard} from "./pages/log-in/LogInCard.jsx";
import {RegisterCard} from "./pages/RegisterCard.jsx";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<CategoryPage />} />
                <Route path="/companies" element={<CompaniesPerJobPage />} />
                <Route path="/details" element={<CompanyDetails/>}/>
                <Route path="/login" element={<LogInCard/>}/>
                <Route path="/register" element={<RegisterCard/>}/>
            </Routes>
        </Router>
    );
}


export default App;
