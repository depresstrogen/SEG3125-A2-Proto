import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import ProductPage from './ProductPage';


function RouteManager() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/ProductPage" element={<ProductPage />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RouteManager;