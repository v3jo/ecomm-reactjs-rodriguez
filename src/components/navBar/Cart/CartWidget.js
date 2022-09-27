import {BsCart} from 'react-icons/bs';
import { useContext } from 'react';
import { CartContext } from './CartContext';
function CartWidget() {
  const ctx = useContext(CartContext);
    return (
      <>
      <BsCart/>
      <span className="badge badge-secondary">{ctx.totalProducts() || ''}</span>
      </>
    );
  }
  
  export default CartWidget;
  