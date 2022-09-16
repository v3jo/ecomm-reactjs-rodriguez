import React, {useState,useEffect}from "react";
import products from "./products";
import {customFetch} from "./customFetch";
import ItemList from "./ItemList";

function ItemListContainer(props) {

  const[ListProducts,setListProducts] = useState([])

  useEffect(() => {
    customFetch(products)
    .then(data=> setListProducts(data))
    /*fetch('https://api.mercadolibre.com/sites/MLA/search?q=medias')
    .then(result => result.json())
    .then(result => setListProducts(result.results))
    .catch(err => console.log(err))*/
  

  },[])
  
  console.log(ListProducts)
    return (
      <>
      <h1>{props.greeting}</h1>
      <div><ItemList ListProducts={ListProducts}/></div>
      </>
    );
  }
  
  export default ItemListContainer;
  