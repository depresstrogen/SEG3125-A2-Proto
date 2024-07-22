import React, { Component } from "react";
import './Home.css'
import CartCard from "./CartCard";
import productData from './products.json';
import { Outlet, Link } from "react-router-dom";

class CartPage extends Component{
    render() {
        let code = ""
        let items = []
        productData.forEach((product)  => {
            console.log(product)
            console.log(product.name)
           
            items.push(<CartCard obj={product}/>)
        }
        )
        
        return (
            <div>
                <div className="row">
                    <div className = "col-sm-9" >
                        <ui className = "row">{items}</ui>
                    </div>
                    <div className='col-sm-3' style={{backgroundColor: "#440000", color: "#FFFFFF", textAlign: "center"}}>
                        <h1 className="p-4" > Shopping Cart</h1>
                        <h3 className="p-3"> Bottlenecks: Not a Complete System</h3>
                        <h3 className="p-3"> Missing Components:</h3>
                        <h4 className="">Motherboard</h4>
                        <h4 className="">Memory</h4>
                        <h4 className="">Power Supply</h4>
                        <h4 className="">Cooling</h4>
                        <h4 className="">Storage</h4>
                        <h4 className="">Case</h4>
                        <h3 className="p-3"> Subtotal: $2849.94</h3>
                        <h3 className="p-3"> Tax: $370.49</h3>
                        <h3 className="p-3"> Total: $3250.43</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartPage;
