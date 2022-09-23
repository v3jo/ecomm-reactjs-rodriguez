import { createContext, useState, } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    const[cartList, setCartList] = useState([]);

    const addItem =(item, quantity) =>{
        if(isInCart(item.id)){
            setCartList(cartList.map(product =>{
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }));
        } else {
            setCartList([...cartList, {...item,quantity}]);
        }
    }

    const clear =() =>{
        setCartList([]);
    }

    const removeItem =(id) =>{
        setCartList(cartList.filter(item => item.id !== id))
    }

    const isInCart=(id) =>{
        return cartList.find(item => item.id === id) ? true:false;
    }
    return(
<CartContext.Provider value={{cartList, addItem, clear, removeItem, isInCart}}>
    {children}
</CartContext.Provider>
    );
}

export default CartContextProvider;