import {useEffect, useState} from 'react'
import {customFetch} from "./customFetch";
import products from './products'
import ItemDetail from './ItemDetail'
import ItemCount from './ItemCount';
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from '@firebase/firestore';

const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    const {id}=useParams();
    console.log(id)
    useEffect(() => {
      if(id){
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', id);
        getDoc(queryDoc)
        .then(res => setData(res.data()))
      }else{
        console.log("Articulo no encontrado");
      }
    }, [id]);
    
  return (
    <>
    <ItemDetail data={data}/>
    </>
  )
}

export default ItemDetailContainer