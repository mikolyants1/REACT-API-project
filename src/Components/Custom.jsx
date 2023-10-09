import {useState,useEffect} from 'react'
import axios from 'axios'
export default function useApi({url,id}){
 const [json,setJson]=useState({data:null,err:false,load:true})
 useEffect(()=>{
  const Data = async () => {
  return await axios.get(`${url}/${id}`)
  .then(({data})=>setJson(prev=>({...prev,data:data})))
  .catch(()=>setJson(prev=>({...prev,err:true})))
  .finally(()=>setJson(prev=>({...prev,load:false})))
    }
    Data()
    },[url,id])

  return json
}