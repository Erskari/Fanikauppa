import React, { useState } from 'react'
import '../App.css';

const Cartt = ({productData, removeProduct}) => {
    //const [show, setShow] = useState(true);
    const productPrice = productData.price * productData.amount;
    if(productData.amount === 0){
        return(
        <div/>
        )
        } else {
            return(
            <div>
                <h3>{productData.productname} : {productData.amount} <button className="button1"onClick={e => removeProduct(productData.id)}> Poista </button>  {productPrice}€ </h3> 
            </div>
            )
        }
}

const Cart = ({products, setproducts, amount, shopstate, setshopstate}) => {
    const removeProduct = id =>{
        const tempProducts = [...products];
        tempProducts.find(yeet => yeet.id === id).amount--;
        setproducts(tempProducts);
    }

    const removeAllProducts = () =>{
        const temp = [...products];
        for (let i=0; i < temp.length; i++) {
            temp[i].amount = 0;
        }
        setproducts(temp);
    }
    if (amount === 0) {
        return (
            <div/>
    )
    } else {
        return (
            <div className="cart">
                <h1>Ostoskori</h1>
                {products.map(c => (<Cartt productData = {c} key = {c.id} removeProduct = {removeProduct}/>))}         
                <h2>Yhteensä : {amount}€</h2>
                <button className="button3" onClick={e => removeAllProducts()}> Tyhjennä ostoskori </button><br/>
                <button className="button2" onClick={e => setshopstate(true)}>Maksamaan</button>
            </div>
        )
    }
}
export default Cart;