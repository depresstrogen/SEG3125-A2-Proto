import React, { useState, Component } from "react";
import './Home.css'
import productData from './products.json';
import ProductCard from './ProductCard';
import SiteHeader from "./SiteHeader";

let categories = ["CPU", "Intel"]

const ProductPage = () => {
    const [items, setItems] = useState();
    const [title, setTitle] = useState("");
    
    const searchQuery = (newTitle, cat) => {
        let tempItems = []
        console.log("IN with cats " + cat)
        categories = cat
        //console.log(categories.length)
        productData.forEach((product)  => {
            //console.log(product)
            //console.log(product.name)
            //let through = sortProduct(product.categories)
            let through = sortProduct(product.categories)
            if (through) {
                tempItems.push(<ProductCard obj={product}/>)
            }
        }
        )
        setItems(tempItems)
        setTitle(newTitle)
    }

    const sortProduct = (product) => {
        let bool = true
        console.log(product)
        categories.forEach((gcat) => {
            if (product.includes(gcat)) {

            } else {
                bool = false
            }
        })

        return bool
    }

    
    
    const render = () => {
        return(
        <div>
            <div className="row">
                <div className="col-sm-3">
                
                    <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}} onClick={() => searchQuery("All CPUs", ["CPU"])}>CPUs</h2>
                    
                    <h2 className = "p-3" style = {{backgroundColor: "#880088", color: "#FFFFFF"}} onClick={() => searchQuery("AMD CPUs", ["CPU", "AMD"])}>AMD CPUs</h2>
                    <h2 className = "p-3" style = {{backgroundColor: "#660033", color: "#FFFFFF"}} onClick={() => searchQuery("Intel CPUs", ["CPU", "Intel"])}>Intel CPUs</h2>
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
                    <h1 style = {{fontSize : "45pt", }}>{title}</h1>
                    <ui className = "row">{items}</ui>
                </div>
            </div>
        </div>
    )
    }
    return render()
}
    
    


export default ProductPage;