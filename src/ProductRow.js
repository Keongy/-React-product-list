import React from 'react';
import ProductCategory from './ProductCategory'
import ProductList from './ProductList';


function ProductRow({ products, textFilter, inStock }) {

    const rows = []
    let lastCategory = null

    products.forEach(product => {
        if (lastCategory !== product.category) {
            lastCategory = product.category
            rows.push(<ProductCategory key={product.category} category={product.category} />)
        }
        if ((inStock && !product.stocked) || product.name.toLowerCase().indexOf(textFilter.toLowerCase())) {
            return
        }

        
        
        rows.push(<ProductList key={product.name} product={product} />)
    });

    return (
        <tbody>
            {rows}
        </tbody>
    )
}


export default ProductRow