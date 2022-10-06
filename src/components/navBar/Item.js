import React from "react";
import {Link} from "react-router-dom";
import "./Cart/CartStyle.css"

const Item = ({product})=>{
    return(
        <>
        <div className="card">
        <h3><div>{product.nombre}</div></h3>
        <div><b>{product.precio}</b></div>
        <div>{product.detail}</div>
        <img src={product.img} alt={product.nombre}></img>
        <p>{product.stock} productos</p>
        <Link to={`/item/${product.id}`}><button>Detalles producto</button></Link>
        <br/>
        </div>
        </>
    )
}

export default Item;