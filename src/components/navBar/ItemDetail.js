import React from "react";

const ItemDetail = ({data})=>{
    return(
        <>
        <h3><div>{data.nombre}</div></h3>
        <div><b>{data.precio}</b></div>
        <div>{data.detail}</div>
        <img src={data.img}></img>
        <br></br>
        </>
    )
}

export default ItemDetail;
