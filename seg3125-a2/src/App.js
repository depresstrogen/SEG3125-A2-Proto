import React from "react";
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Home";

import SiteHeader from "./SiteHeader";
import RouteManager from "./RouteManager";
import ProductPage from "./ProductPage";

const App = () => {
    return (
    <div>
    
      <Router>
            <SiteHeader/>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/ProductPage" exact element={<ProductPage/>} />
          </Routes>
      </Router>
      
    </div>
    );
  }
  
export default App;
