import React, { useState } from 'react'
import '../App.css';

const Info = ({products, setproducts, newnote, handlechange, handlesubmit, setshopstate, setmycheckout, mycheckout
}) => {
    if(mycheckout){  
    return(
        <form onSubmit={handlesubmit}>
        Nimi: 
        <input onChange={e=>handlechange(e, 'name')}/><br></br>
        Email: 
        <input onChange={e=>handlechange(e, 'email')}/><br></br>
        Osoite: 
        <input onChange={e=>handlechange(e, 'address')}/><br></br>
        Postinumero: 
        <input onChange={e=>handlechange(e, 'postal')}/><br></br>
        postitoimipaikka: 
        <input onChange={e=>handlechange(e, 'city')}/><br></br>
        <button type="button" onClick={e => setmycheckout(false)}>Lähetä</button>
        </form>  
      )
    } else {
        const changestates = () =>{
            setshopstate(false);
            setmycheckout(true);
            const temp = [...products];
        for (let i=0; i < temp.length; i++) {
            temp[i].amount = 0;
        }
        setproducts(temp);
        }
        return(
            <div>
            <p>Paketti lähetetty</p>
            <button className="button2" onClick={e => changestates()}>Takaisin kauppaan</button>
            </div>

        )
    }
}
export default Info;