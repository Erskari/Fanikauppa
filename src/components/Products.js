import React, { useState } from 'react'
import '../App.css';

const ProductInfo = ({productData, addProduct}) => {
    const [show, setShow] = useState(true);
    if(show){
    return (
            <div className="column">
                <h3 onClick={e => setShow(false)}> {productData.productname}</h3>                
                <img src={productData.url}alt="lmao"></img>
                <p>{productData.price}€</p>
                <button className="button2" onClick={e => addProduct(productData.id)}> Lisää koriin </button>
                
            </div>
    )
    } else {
        return(
            <div className="column">
                <h3 onClick={e => setShow(true)}>{productData.productname}</h3>
                <img src={productData.url} alt="lmao"></img>
                <p>{productData.description}</p>
                <p>{productData.price}</p>
                <button className="button2" onClick={e => addProduct(productData.id)}> Lisää koriin </button>

            </div>
        )
    }
}
const ProductsInfo = ({products, setproducts}) => {
    const addProduct = id => {
        const tempProducts = [...products];
    tempProducts.find(url => url.id === id).amount++; 
    setproducts(tempProducts);
    }
        return (
        <div className="row">
            <h1>Tuotteet</h1>
            {products.map(c => (<ProductInfo productData = {c} key = {c.id} addProduct = {addProduct}/>))}
        </div>
    )      
}
export default ProductsInfo;