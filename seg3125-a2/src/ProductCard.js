import React from 'react';
import { useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import useLocalStorageState from "use-local-storage-state";
import ProductPage from './ProductPage';


function ProductCard(obj) {
    console.log(obj.obj)
    let product = obj.obj
    return (
        <div className = "col-sm-4 text-center"> 
            <img src={require("./img/products/" + product.img)} alt="Logo" style={{width:"90%"}} />;
            <h1>{product.name}</h1> 
            <h1>${product.price}</h1>
            
            <a class = "btn btn-primary btn-large " style={{backgroundColor: "#D3432D"}} onClick={useNavigate("/ProductPage")}>Add to Cart</a>
        </div>
    )
}



export default ProductCard;