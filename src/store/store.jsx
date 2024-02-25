import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'
import {devtools,persist} from 'zustand/middleware'
import axios from 'axios'
import { url } from '../Components/paths/App'
export const useStore = create(persist(
  devtools(immer((set)=>({
    page:1,
    date:[],
    id:'1',
    person:[],
    err:false,
    load:true,
    perErr:false,
    perLoad:true,
    nextPage:()=>set(state=>{
     state.page += 1;
    }),
prevPage:()=>set(state=>{
  state.page-=1
}),
setId:(id)=>{
  set({id:id})
},
getQuery:async ()=>{
 set({err:false,load:true})
 return await axios.get(`${url}/character`)
  .then(({data})=>set({date:data.results}))
  .catch(()=>set({err:true}))
  .finally(()=>set({load:false}))
},
getByIdQuery:async (id)=>{
  set({perErr:false,perLoad:true})
  return await axios.get(`${url}/character/${id}`)
  .then(({data})=>set({person:data}))
  .catch(()=>set({perErr:true}))
  .finally(()=>set({perLoad:false}))
}
}))),{name:'store1',version:1}))