import {useEffect, useState} from 'react'
import {customFetch} from "./customFetch";
import products from './products'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [data, setData] = useState({})

    useEffect(() => {
      customFetch(products[0])
      .then(result => setData(result))
      .catch(err => console.log(err))
    }, []);
    

console.log(data)
  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer