import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from '@firebase/firestore';

const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    const {id}=useParams();
    useEffect(() => {
      if(id){
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', id);
        getDoc(queryDoc)
        .then(res => {
          let product = {id:id,...res.data()}
          setData(product)})
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