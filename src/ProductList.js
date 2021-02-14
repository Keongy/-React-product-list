import React from 'react';
import './App.css';

function ProductList({ product }) {

    const name = product.stocked ? product.name : <span className="text-danger line-through text-shadow-red">{product.name}</span>
    const price = product.stocked ? product.price : <span className="text-danger line-through text-shadow-red">{product.price}</span>


    return (
        <tr className="text-white">
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}


export default ProductList