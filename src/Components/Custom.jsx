import {useState,useEffect} from 'react'
import axios from 'axios'
export default function useAxios({url,method,body}){
 const [json,setJson]=useState({
  data:null,err:false,load:true,text:''
    })
 useEffect(()=>{
  const Data = async () => {
   const request=method=='GET'? axios.get(`${url}`)
    : method=='POST'? axios.post(`${url}`,body)
    : axios.delete(`${url}`,body)
   return await request
   .then(({data})=>setJson(prev=>({...prev,data:data})))
   .catch(err=>setJson(prev=>({...prev,err:true,text:err})))
   .finally(()=>setJson(prev=>({...prev,load:false})))
    }
   Data()
  
  },[url])

  return json
}