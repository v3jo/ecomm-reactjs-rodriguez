import React from "react";

const Item = ({product})=>{
    console.log(product)
    return(
        <>
        <div>{product.nombre}</div>
        <div>{product.precio}</div>
        <div>{product.detail}</div>
        <div>{product.image}</div>
        </>
    )
}

export default Item;