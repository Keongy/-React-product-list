import React from 'react';

function ProductList({ product }) {

    const name = product.stocked ? product.name : <span className="text-danger">{product.name}</span>


    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}


export default ProductList