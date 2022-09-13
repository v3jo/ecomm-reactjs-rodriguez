import React from "react";
import { useState, useEffect} from "react";
const ItemCount = ({initial, stock}) => {

    const[ItemCount, setItemCount] = useState(initial);

    const sumar = () =>{
        if (ItemCount<stock){
            setItemCount(ItemCount + 1);
        }
    }

    const restar = () =>{
        if(ItemCount > initial){
            setItemCount(ItemCount - 1);
        }
       
    }
    const addCart = ()=>{
        setItemCount(ItemCount);
        console.log(`add cart ${ItemCount} items`);
    }

    useEffect(()=>{
        console.log("ejecute")
    },[])
    return (
      <>
      <button onClick={()=> sumar()}>+</button>
      <button onClick={()=> restar()}>-</button>
      <span>{ItemCount}</span>
      <button onClick={()=> addCart()}>Agregar al carrito</button>
      
      </>
    );
  }
  
  export default ItemCount;
  