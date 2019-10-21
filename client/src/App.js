import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(({ data }) => this.setState({ products: data }))
      .catch(err => console.error(err))
  }

  render() {
    const { products } = this.state
    return (
      <div className="App" >
        <header className="App-header">
          <ul>
            {products.map(product => <li key={product.product_id}>{product.item} is ${product.price}</li>)}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
