import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import "./CartStyle.css";
import { Link } from "react-router-dom";
import {serverTimestamp,doc,setDoc,collection,updateDoc,increment,} from "@firebase/firestore";
import { db } from "../../utils/fireBaseConfig";

const Cart = () => {
  const ctx = useContext(CartContext);
  const createOrder = async () => {
    const itemsForDB = ctx.cartList.map((item) => ({
      id: item.id,
      title: item.nombre,
      price: item.precio,
      quantity: item.quantity,
    }));
    console.log(itemsForDB);
    let order = {
      buyer: {
        name: "messi",
        email: "leo@messi.com",
        phone: "123456789",
      },
      items: itemsForDB,
      date: serverTimestamp(),
      total: ctx.totalPrice(),
    };
    const newOrderRef = doc(collection(db, "orders"));
    await setDoc(newOrderRef, order);

    itemsForDB.forEach(async (item) => {
      const update = doc(db, "products", item.id);
      await updateDoc(update, {
        stock: increment(-item.quantity),
      });
    });
   
    ctx.clear();
    alert(
      "your order has been created! this is your ID's order :" + newOrderRef.id
    );
  };
  if (ctx.cartList.length === 0) {
    return (
      <>
        <p>
          <b>Carrito vacio</b>
        </p>
        <Link to="/" type="button" className="btn btn-success">
          Ir a comprar productos!
        </Link>
      </>
    );
  }

  return (
    <>
      <div>
        <h1>Hola soy el carrito</h1>
      </div>
      <button onClick={ctx.clear} className="btn btn-danger btn-sm">
        Borrar productos
      </button>
      {ctx.cartList.map((item) => (
        <ul key={item.id}>
          <div className="card">
            <img src={item.img} alt={item.nombre} />
            <p>{item.nombre}</p>
            <p>${item.precio}</p>
            <p>cantidad:{item.quantity}</p>
            <p>Subtotal: ${item.quantity * item.precio}</p>
            <button
              onClick={() => ctx.removeItem(item.id)}
              type="button"
              className="btn btn-warning btn-sm "
            >
              borrar producto
            </button>
          </div>
        </ul>
      ))}
      <p>
        <b>Precio total: ${ctx.totalPrice()}</b>
      </p>
      <button onClick={() => createOrder()} className="btn btn-success">
        Comprar
      </button>
    </>
  );
};

export default Cart;
