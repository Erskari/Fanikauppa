import React, { useState } from 'react'
import './App.css';
import Products from './components/ProductData';
import ProductsInfo from './components/Products';
import Cart from './components/Cart';

const App = () => {
  const [myProducts, setMyProducts] = useState(Products);
  const amounts = myProducts.map(myProducts => myProducts.amount);
  const ordered = amounts.reduce((a,b) => a + b, 0);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Fanikauppa
        </p>
        </header>
        <ProductsInfo products={myProducts} setproducts={setMyProducts}/>
        <Cart products={myProducts} setproducts={setMyProducts} amount={ordered}/>
    </div>
  );
}
export default App;