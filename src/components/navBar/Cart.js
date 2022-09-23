import React from 'react'
import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {

  const ctx = useContext(CartContext);
  return (
    <>
    <div><h1>Hola soy el carrito</h1></div>
    <button onClick={ctx.clear} className="btn btn-danger btn-sm ">Borrar productos</button>
    { 
      ctx.cartList.map(item => <li> <img src={item.img}/><br/>{item.nombre}${item.precio} cantidad:{item.quantity} <button onClick={() => ctx.removeItem(item.id)} type="button" className="btn btn-warning btn-sm " >borrar producto</button><br/></li>)
    }
    </>
  );
}

export default Cart