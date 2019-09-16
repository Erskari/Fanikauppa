import React, { useState } from 'react'
import '../App.css';

const ProductInfo = ({productData}) => {
    const [show, setShow] = useState(true);
    if(show){
    return (
            <div className="column">
                <h3 onClick={e => setShow(false)}> {productData.productname}</h3>                
                <img src={productData.url}></img>
            </div>
    )
    } else {
        return(
            <div className="column">
                <h3 onClick={e => setShow(true)}>{productData.productname}</h3>
                <img src={productData.url}></img>
                <p>{productData.description}</p>
            </div>
        )
    }
}
const ProductsInfo = ({products}) => {
        return (
        <div className="row">
            <h1>Products</h1>
            {products.map(c => (<ProductInfo productData = {c} key = {c.id}/>))}
        </div>
    )      
}
export default ProductsInfo;