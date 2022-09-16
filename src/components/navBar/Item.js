import React from "react";

const Item = ({product})=>{
    console.log(product)
    return(
        <>
        <h3><div>{product.nombre}</div></h3>
        <div><b>{product.precio}</b></div>
        <div>{product.detail}</div>
        <img src={product.img}></img>
        <br></br>
        </>
    )
}

export default Item;