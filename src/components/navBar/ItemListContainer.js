import React, {useState,useEffect}from "react";
import products from "./products";
import {customFetch} from "./customFetch";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, where, query} from "@firebase/firestore";
import {db} from "../utils/fireBaseConfig"


function ItemListContainer() {

  const[ListProducts,setListProducts] = useState([]);
  const {id}=useParams();
 

  useEffect(() => {
    async function fetchData(){
      if(id){
        //traer productos
        const q = query(collection(db, "products"), where('categoryId' , '==', parseInt(id)))
        const querySnapshot = await getDocs(q);
        const dataFromFirestore = querySnapshot.docs.map(item =>({
          id: item.id,
          ...item.data()
        }));
        setListProducts(dataFromFirestore)
      }else{
        const querySnapshot = await getDocs(collection(db, "products"));
      const dataFromFirestore = querySnapshot.docs.map(item =>({
        id: item.id,
        ...item.data()
      }));
      setListProducts(dataFromFirestore)
      console.log(dataFromFirestore)
      }

    }

    
    
   
    fetchData()
    
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


    /*    if(id){
      customFetch(products.filter(item => item.categoryId===parseInt(id)))
      .then(data=> setListProducts(data))
    }else{
   //mostrar todos los productos-id indefinido
   customFetch(products)
   .then(data=> setListProducts(data))
    }

  --------------Metodo anterior para llamar a los productos-------
    */
