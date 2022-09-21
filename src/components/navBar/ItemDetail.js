import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({data})=>{

    const[CountItem, setCountItem] = useState(0);
    const  onAdd = (cartNumber)=>{
        console.log(`add cart ${cartNumber} items`);
        setCountItem(cartNumber)
    
        
    }
    return(
        <>
        <h3><div>{data.nombre}</div></h3>
        <div><b>{data.precio}</b></div>
        <div>{data.detail}</div>
        <img src={data.img}></img>
        <br></br>
        {
            CountItem ===0 
            ?<ItemCount initial={CountItem} stock={data.stock} onAdd={onAdd}/>
            :<Link to="/cart" type="button" class="btn btn-success">Carrito</Link>
        }
        </>
    )
}

export default ItemDetail;
