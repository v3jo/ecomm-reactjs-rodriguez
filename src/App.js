import NavBar from "./components/navBar/navBar";
import Section from "./components/section/section";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/navBar/ItemListContainer";
function app() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Hola bienvenidos a nuestro futuro e-comm!"/>
    <Section/>
    <Footer/>
    </>
  );
}

export default app;
