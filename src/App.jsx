import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { CategoryPage } from './pages/category/CategoryPage.jsx';
import { CompaniesPerJobPage } from './pages/companies/CompaniesPerJobPage.jsx';
import {CompanyDetails} from "./pages/company/CompanyDetails.jsx";
import {Navbar} from "./layout/Navbar.jsx";
import './index.css'
import {LogInCard} from "./pages/log-in/LogInCard.jsx";
import {RegisterCard} from "./pages/RegisterCard.jsx";
import {CompanyRating} from "./pages/rating/CompanyRating.jsx";
import {HomePage} from "./pages/home/HomePage.jsx";
import {Asset} from "./Asset.jsx"
function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/categories" element={<CategoryPage />} />
                <Route path="/jobs/:id" element={<CompaniesPerJobPage />} />
                <Route path="/details/:id" element={<CompanyDetails/>}/>
                <Route path="/rating" element={<CompanyRating/>}/>
                {/*<Route path="/login" element={<LogInCard/>}/>*/}
                {/*<Route path="/register" element={<RegisterCard/>}/>*/}
                {/*<Route path="/home" element={<HomePage/>}/>*/}
                <Route path="/asset" element={<Asset/>}/>
                <Route path="*" element={<Navigate to="/categories"/>}/>
            </Routes>
        </Router>
    );
}


export default App;
