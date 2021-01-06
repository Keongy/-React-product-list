import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const { products, textFilter, inStock } = this.props
        return (
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <ProductRow inStock={inStock} textFilter={textFilter} products={products} />
            </table>
        )
    }

}

export default ProductTable