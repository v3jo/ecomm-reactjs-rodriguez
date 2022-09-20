import React from "react";
import {Link} from "react-router-dom";

const Item = ({product})=>{
    return(
        <>
        <h3><div>{product.nombre}</div></h3>
        <div><b>{product.precio}</b></div>
        <div>{product.detail}</div>
        <img src={product.img}></img>
        <Link to={`/item/${product.id}`}><button>Detalles producto</button></Link>
        <hr/>
        <br></br>
        </>
    )
}

export default Item;