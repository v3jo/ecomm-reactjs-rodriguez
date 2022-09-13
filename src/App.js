import NavBar from "./components/navBar/navBar";
import Section from "./components/section/section";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/navBar/ItemListContainer";
import ItemCount from "./components/navBar/ItemCount";
function app() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Hola bienvenidos a nuestro futuro e-comm!"/>
    <ItemCount initial={1} stock={10}/>
    <Section/>
    <Footer/>
    </>
  );
}

export default app;
