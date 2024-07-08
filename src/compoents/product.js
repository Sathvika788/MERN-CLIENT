import { createContext } from "react";
export const Mycontext = createContext("")
import React from 'react';

const Product = ({ product }) => {
    return (
        <div className="card">
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">${product.price}</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    );
};

export default Product;
