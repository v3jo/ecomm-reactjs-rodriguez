import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./Cart/CartContext";

const ItemDetail = ({data})=>{

    const[CountItem, setCountItem] = useState(0);
    const ctx = useContext(CartContext);

    const  onAdd = (cartNumber)=>{
        console.log(`add cart ${cartNumber} items`);
        setCountItem(cartNumber);
        ctx.addItem(data, cartNumber);
    
        
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
            ?<ItemCount initial={0} stock={data.stock} onAdd={onAdd}/>
            :<Link to="/cart" type="button" class="btn btn-success">Terminar Compra</Link>
        }
        </>
    )
}

export default ItemDetail;
