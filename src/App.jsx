import NavBar from "./components/navBar/navBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/navBar/ItemListContainer";
import ItemDetailContainer from "./components/navBar/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/navBar/Cart/Cart"
import CartContextProvider from "./components/navBar/Cart/CartContext"
function app() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default app;
