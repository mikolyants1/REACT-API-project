import { useStore } from "../store/store"
import axios from 'axios'
import { useQuery } from "@tanstack/react-query"
import { LocMain,LocItem,SortButton } from "../styles/style"
import {Link} from 'react-router-dom'
async function Pages(page){
    return await axios.get(`https://rickandmortyapi.com/api/location?page=${page}`)
    .then(({data})=>data.results)   
}
export default function Location(){
const page=useStore(state=>state.page)
const nextPage=useStore(state=>state.nextPage)
const prevPage=useStore(state=>state.prevPage)
const {data,isLoading,isError}=useQuery(["pages",page],()=>Pages(page))
if (isLoading) return <div>loading...</div>
if (isError) return <div>error</div>
const Next=page!==7?<SortButton onClick={()=>nextPage(page)}>next</SortButton>:null
const Prev=page!==1?<SortButton onClick={()=>prevPage(page)}>prev</SortButton>:null
    return <div>
     <LocMain>
      {data.map(({created,dimension,name,type},index)=>(
      <LocItem key={index}>  
      <div className='info'>
      <div className='name'>
      <h1>
       {name}
      </h1>
    </div>
   <div><span>dimension:</span>{dimension}</div>
   <div><span>type:</span> {type}</div>
   <div><span>created:</span>{created}</div>
   </div>
    </LocItem>
  ))}
    </LocMain>
    <div>
        {Prev}
        {Next}
    </div>
    <div>
        <Link to='/'>Main</Link>
    </div>
    </div>
}