import {useEffect,useReducer} from 'react'
import axios from 'axios'
function useAxios({url,method,body}){
 const [state,dispatch] = useReducer(
 (state,action)=>({...state,...action}),
 {text:'',data:null,err:false,load:true});

 useEffect(()=>{
  const Data = async () => {
   const req = method === 'GET' ? axios.get(`${url}`)
   : method === 'POST' ? axios.post(`${url}`,body)
   : axios.delete(`${url}`,body)
   return await req
   .then(({data})=>dispatch({data:data}))
   .catch(err=>dispatch({err:true,text:err}))
   .finally(()=>dispatch({load:false}))
    }
   Data();
  },[url])
  return state;
};

export default useAxios