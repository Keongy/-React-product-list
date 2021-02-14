import React from 'react';
import './App.css'

class SearchBarInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleInStockChange = this.handleInStockChange.bind(this)
    }

    handleChange(e) {
        this.props.textFilter(e.target.value)
    }

    handleInStockChange(e) {
        this.props.inStockOnly(e.target.checked)
    }

    render() {
        const {inStock} = this.props
        return (
            <div className="form">
                <div className="form-group">
                    <input type="text" className="form-control bg-input-transparent" placeholder="Search..." onChange={this.handleChange} />
                </div>
                <div className="form-check">
                    <input type="checkbox" name="" id="" className="form-check-input" checked={inStock} onChange={this.handleInStockChange} />
                    <label htmlFor="" className="form-check-label">Only show products in stock</label>
                </div>
            </div>

        )
    }

}


export default SearchBarInput