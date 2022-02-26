import {React,useEffect,useState} from 'react'
import ItemCard from './ItemCard'
import axios from "axios";
function Item() {
    const [items, setitems] = useState([{}]);
    useEffect(() => {
     const getItems=async()=>{
       const {data}= await axios.get("https://nusstore.glitch.me/items");
        setitems(data);
      
     }
  
     getItems();
    }, [])
  return (
    <>
    
    <div className="row px-5 pt-5">
   {
        items.map((e)=>{
         
         return  <ItemCard itemId={e.itemId} name={e.name} price={e.price} />
        })
      }

   </div>
    
    </>
  )
}

export default Item