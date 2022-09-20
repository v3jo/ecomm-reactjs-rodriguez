import React from "react";
import Item from "./Item";

const ItemList = ({ListProducts})=>{

    return(
        <>
        {ListProducts.map((product)=>(
            <Item product={product} key={product.id} />
    ))
        
        
        }
        </>
    )
}

export default ItemList;