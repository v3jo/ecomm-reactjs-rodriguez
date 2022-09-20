import React, {useState,useEffect}from "react";
import products from "./products";
import {customFetch} from "./customFetch";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {

  const[ListProducts,setListProducts] = useState([]);
  const {id}=useParams();

  useEffect(() => {
    if(id){
      customFetch(products.filter(item => item.categoryId===parseInt(id)))
      .then(data=> setListProducts(data))
    }else{
   //mostrar todos los productos-id indefinido
   customFetch(products)
   .then(data=> setListProducts(data))
    }
    
  

  },[id]);
  
    return (
      <>
      <div><ItemList ListProducts={ListProducts}/></div>
      </>
    );
  }
  
  export default ItemListContainer;
  



  /*fetch('https://api.mercadolibre.com/sites/MLA/search?q=medias')
    .then(result => result.json())
    .then(result => setListProducts(result.results))
    .catch(err => console.log(err))
    ----------Usando API de ML---------------------
    */