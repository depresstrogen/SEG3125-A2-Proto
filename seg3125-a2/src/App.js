import React from "react";
import * as ReactDOM from 'react-dom';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from "./Home";

import SiteHeader from "./SiteHeader";
import ProductPage from "./ProductPage";
import Expert from "./Expert";
import Learn from "./LearnPage";
import Cart from "./CartPage";

const App = () => {
    return (
    <div>
    
      <HashRouter>
            <SiteHeader/>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/ProductPage" exact element={<ProductPage/>} />
            <Route path="/Expert" exact element={<Expert/>} />
            <Route path="/Learn" exact element={<Learn/>} />
            <Route path="/Cart" exact element={<Cart/>} />
          </Routes>
      </HashRouter>
      
    </div>
    );
  }
  
export default App;
