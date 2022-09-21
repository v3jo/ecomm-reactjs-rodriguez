import React from "react";
import { useState, useEffect} from "react";
const ItemCount = ({initial, stock,onAdd}) => {

    const[ItemCount, setItemCount] = useState(initial);
    const sumar = () =>{
        if (ItemCount<stock){
            setItemCount(ItemCount+1)
        }
    }

    const restar = () =>{
        if(ItemCount > initial){
            setItemCount(ItemCount - 1);
        }
       
    }


    useEffect(()=>{
        console.log("ejecute")
    },[])
    return (
      <>
      <button onClick={()=> sumar()}>+</button>
      <button onClick={()=> restar()}>-</button>
      <span>{ItemCount}</span>
      <button onClick={()=> onAdd(ItemCount)}>Agregar al carrito</button>
      
      </>
    );
  }
  
  export default ItemCount;
  