import React, { useState } from 'react'
import './App.css';
import Products from './components/ProductData';
import ProductsInfo from './components/Products';
import Cart from './components/Cart';
import Info from './components/CustomerInfo';

const App = () => {
  const [myCheckout, setMyCheckout] = useState(true);
  const [myProducts, setMyProducts] = useState(Products);
  const [shopState, setShopState] = useState(false);
  const [newNote, setNewNote] = useState({name: "", email: "", address: "", postal: "", city: ""});
  const amounts = myProducts.map(myProducts => myProducts.amount * myProducts.price);
  const ordered = amounts.reduce((a,b) => a + b, 0);

  const handleNoteChange = (event, field) => {
    const tempInfo = {...newNote};
    tempInfo[field] = event.target.value;
    setNewNote(tempInfo);
  }

  const handleInfoSubmit = event => {
    event.preventDefault();
    //setNewNote({name: "", email: "", address: "", postal: "", city: ""})
    console.log("nimi", newNote.name, "email", newNote.email, "osoite", newNote.address, "postinumero", newNote.postal, "kaupunki", newNote.city);
  }
  if (shopState) {
    return (
      <Info products={myProducts} setproducts={setMyProducts} newnote={newNote} handlesubmit={handleInfoSubmit} handlechange={handleNoteChange}  setshopstate={setShopState} mycheckout={myCheckout} setmycheckout={setMyCheckout}/>
    )
  } else {
  return (
    <div className="App">
      <header className="App-header">
        </header>
        <Cart products={myProducts} setproducts={setMyProducts} amount={ordered} shopstate={shopState} setshopstate={setShopState}/>
        <ProductsInfo products={myProducts} setproducts={setMyProducts}/>
    </div>
  )
  }
}
export default App;