import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    products: [],
    product: {
      item: '',
      price: '',
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
      .then(this.setState({ product: { item: '', price: '' } }));
  }

  deleteProduct = productItem => {
    fetch(`http://localhost:4000/products/delete?item=${productItem}`)
      .then(this.fetchProducts)
  }

  render() {
    const { products, product } = this.state
    return (
      <div className="App" >
        <header className="App-header">
          <ul>
            {
              products.map(({ product_id, item, price }) => item.endsWith('s') ?
                <li data-type="list-item" key={product_id}>{item} are ${price}<button onClick={() => this.deleteProduct(item)}>x</button></li>
                :
                <li data-type="list-item" key={product_id}>{item} is ${price}<button onClick={() => this.deleteProduct(item)}>x</button></li>
              )
            }
          </ul>
          <form className="Form" data-test="Form">
            <input type="text" data-type='item-input' value={product.item} placeholder='Enter item name' onChange={e => this.setState({ product: { ...product, item: e.target.value } })} />
            <input type="text" data-type='price-input' value={product.price} placeholder='Enter price' onChange={e => this.setState({ product: { ...product, price: e.target.value } })} />
            <button data-type='add-product' onClick={this.addProduct}>Submit</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
