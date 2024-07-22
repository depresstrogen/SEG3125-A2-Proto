import React, { Component } from "react";
import './Home.css'
import productData from './products.json';
import ProductCard from './ProductCard';
import SiteHeader from "./SiteHeader";

class ProductPage extends Component{

    render() {
        let code = ""
        let items = []
        productData.forEach((product)  => {
            console.log(product)
            console.log(product.name)
           
            items.push(<ProductCard obj={product}/>)
        }
        )
        
        return (
            <div>
                <div className="row">
                    <div className="col-sm-3">
                        <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>CPUs</h2>
                        <h2 className = "p-3" style = {{backgroundColor: "#880088", color: "#FFFFFF"}}>AMD CPUs</h2>
                        <h2 className = "p-3" style = {{backgroundColor: "#660033", color: "#FFFFFF"}}>Intel CPUs</h2>
                        <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Motherboards</h2>
                        <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Memory</h2>
                        <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Graphics Cards</h2>
                        <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Power Supplies</h2>
                        <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Cooling</h2>
                        <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Storage</h2>
                        <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Cases</h2>
                        <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Mice & Keyboards</h2>
                        <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Monitors</h2>
                        <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Headphones</h2>
                        <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Accessories</h2>
                    </div>
                    <div className = "col-sm-9" >
                        <h1 style = {{fontSize : "45pt", }}>AMD CPUs</h1>
                        <ui className = "row">{items}</ui>
                    </div>
                </div>
            </div>
        )
    }
    
    
}

export default ProductPage;