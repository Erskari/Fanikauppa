import React, { useState } from 'react'
import './App.css';
import Products from './components/ProductData';
import ProductsInfo from './components/Products';

const App = () => {
  const [myProducts, setMyProducts] = useState(Products);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Fan Store
        </p>
        </header>
        <ProductsInfo products={myProducts}/>
    </div>
  );
}
export default App;