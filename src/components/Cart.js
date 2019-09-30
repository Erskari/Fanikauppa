import React, { useState } from 'react'
import '../App.css';

const Cartt = ({productData, removeProduct}) => {
    const [show, setShow] = useState(true);
    const yeet = productData.price * productData.amount;
    if(productData.amount == 0){
        return(
        <div>
        </div>
        )
        } else {
            return(
            <div>
                <h1>{productData.productname} : {productData.amount} <button onClick={e => removeProduct(productData.id)}> poista </button>  {yeet}€ </h1>
            </div>
            )
        }
}
const Cart = ({products, setproducts, amount}) => {
    const removeProduct = id =>{
        const tempProducts = [...products];
    tempProducts.find(url => url.id === id).amount--;
    setproducts(tempProducts);
    }
    if (amount == 0) {
        return (
            <div className="row">
                {products.map(c => (<Cartt productData = {c} key = {c.id} removeProduct = {removeProduct}/>))}
            </div>
    )
    } else {
        return (
            <div className="row">
            <h1>Ostoskori</h1>
                {products.map(c => (<Cartt productData = {c} key = {c.id} removeProduct = {removeProduct}/>))}
            </div>
        )
    }
}
export default Cart;