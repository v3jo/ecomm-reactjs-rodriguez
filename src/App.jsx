import NavBar from "./components/navBar/navBar";
import Section from "./components/section/section";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/navBar/ItemListContainer";
import ItemDetailContainer from "./components/navBar/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function app() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
    </Routes>
    <Section/>
    <Footer/>
    </BrowserRouter>
  );
}

export default app;
