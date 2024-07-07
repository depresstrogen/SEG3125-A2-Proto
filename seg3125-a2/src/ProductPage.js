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

                <div className = "" >
                    <ui className = "row">{items}</ui>
                </div>
            </div>
        )
    }
    
    
}

export default ProductPage;