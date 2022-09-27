import React from 'react'
import { useContext } from 'react';
import { CartContext } from './CartContext';
import CartStyle from './CartStyle.css'
import { Link } from 'react-router-dom';

const Cart = () => {

  const ctx = useContext(CartContext);
  if (ctx.cartList.length === 0){
    return(
      <>
      <p><b>Carrito vacio</b></p>
      <Link to="/" type="button" class="btn btn-success">Ir a comprar productos!</Link>
      </>
    );
  }

  return (
    <>
    <div><h1>Hola soy el carrito</h1></div>
    <button onClick={ctx.clear} className="btn btn-danger btn-sm ">Borrar productos</button>
    { 
      ctx.cartList.map(item => <ul key={item.id}> 
      <div className="card" >
      <img src={item.img}/>
      <p>{item.nombre}</p>
      <p>${item.precio}</p>
      <p>cantidad:{item.quantity}</p>
      <p>Subtotal: ${item.quantity * item.precio}</p>
         <button onClick={() => ctx.removeItem(item.id)} type="button" className="btn btn-warning btn-sm " >borrar producto</button>
      </div>
      </ul>)
    }
    <p><b>Precio total: ${ctx.totalPrice()}</b></p>
    </>
  );
}

export default Cart

