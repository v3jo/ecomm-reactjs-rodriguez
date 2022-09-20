import {useEffect, useState} from 'react'
import {customFetch} from "./customFetch";
import products from './products'
import ItemDetail from './ItemDetail'
import ItemCount from './ItemCount';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    const {id}=useParams();
    console.log(id)
    useEffect(() => {
      if(id){
        customFetch(products.find(item=>item.id===parseInt(id)))
      .then(result => setData(result))
      .catch(err => console.log(err))
      }else{
        console.log("Articulo no encontrado");
      }
    }, [id]);
    
  return (
    <>
    <ItemDetail data={data}/>
    <ItemCount initial={1} stock={10}/>
    </>
  )
}

export default ItemDetailContainer