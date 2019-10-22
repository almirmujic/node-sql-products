import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    products: [],
    product: {
      item: '',
      price: 0,
    }
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

  logProduct = e => {
    e.preventDefault();
    console.log(this.state.product);
  }

  addProduct = e => {
    e.preventDefault();
    const { product } = this.state;
    fetch(`http://localhost:4000/products/add?item=${product.item}&price=${product.price}`)
      .then(this.fetchProducts)
      .then(this.setState({ product: { item: '', price: 0 } }));
  }

  render() {
    const { products, product } = this.state
    return (
      <div className="App" >
        <header className="App-header">
          <ul>
            {products.map(product => <li key={product.product_id}>{product.item} is ${product.price}</li>)}
          </ul>
          <form>
            <input type="text" value={product.item} onChange={e => this.setState({ product: { ...product, item: e.target.value } })} />
            <input type="text" value={product.price} onChange={e => this.setState({ product: { ...product, price: e.target.value } })} />
            <button onClick={this.addProduct}>Submit</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
