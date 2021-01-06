import React from 'react'
import './App.css';
import SearchBarInput from './SearchBarInput';
import ProductTable from './ProductTable';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      textFilter: "",
      inStock: false
    }
    this.onChangeTextFilter = this.onChangeTextFilter.bind(this)
    this.handleChangeInStock = this.handleChangeInStock.bind(this)
  }

  onChangeTextFilter(textFilter) {
    this.setState({ textFilter })
  }

  handleChangeInStock(inStock) {
    this.setState({ inStock })
  }

  render() {
    const { products } = this.props
    const textFilter = this.state.textFilter
    return (
      <div className="row justify-content-center m-0 mt-5">
        <div className="col-3">
          <SearchBarInput inStock={this.state.inStock} inStockOnly={this.handleChangeInStock} textFilter={this.onChangeTextFilter} />
          <ProductTable inStock={this.state.inStock} textFilter={textFilter} products={products} />
        </div>
      </div>
    )
  }

}

export default App;
