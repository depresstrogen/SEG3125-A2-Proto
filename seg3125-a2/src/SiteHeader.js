import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

class SiteHeader extends Component{
    render() {
        return (
            <div className = "row ">
                <div className = "col">
                    <h1>E Computer Design</h1>
                </div>
                <div className = "col">
                        <Link to="/">
                        <a class = "btn btn-primary btn-large " style={{backgroundColor: "#D3432D"}} href="/" >Home</a>
                        </Link>
                        <Link to="/ProductPage">
                        
                            <a class = "btn btn-primary btn-large " style={{backgroundColor: "#D3432D"}} href="/ProductPage" >Products</a>
                        </Link>
                </div>
            </div>
        )

    }
}

export default SiteHeader;