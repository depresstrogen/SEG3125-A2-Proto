import React from "react";
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Home";

import SiteHeader from "./SiteHeader";
import RouteManager from "./RouteManager";
import ProductPage from "./ProductPage";
import Expert from "./Expert";
import Learn from "./LearnPage";
import Cart from "./CartPage";

const App = () => {
    return (
    <div>
    
      <Router>
            <SiteHeader/>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/ProductPage" exact element={<ProductPage/>} />
            <Route path="/Expert" exact element={<Expert/>} />
            <Route path="/Learn" exact element={<Learn/>} />
            <Route path="/Cart" exact element={<Cart/>} />
          </Routes>
      </Router>
      
    </div>
    );
  }
  
export default App;
