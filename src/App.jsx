import NavBar from "./components/navBar/navBar";
import Section from "./components/section/section";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/navBar/ItemListContainer";
import ItemDetailContainer from "./components/navBar/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/navBar/Cart"
import CartContextProvider from "./components/navBar/CartContext"
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
    <Section/>
    <Footer/>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default app;
