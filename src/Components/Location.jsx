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
const next=useStore(state=>state.nextPage)
const prev=useStore(state=>state.prevPage)
const {data,isLoading,isError}=useQuery(["pages",page],()=>Pages(page),
{keepPreviousData:true,refetchOnWindowFocus:false})
if (isLoading) return <div>loading...</div>
if (isError) return <div>error</div>
    return <div>
            <LocMain>
              {data.map(({created,dimension,name,type},i)=>(
                <LocItem key={i}>  
                  <div className='info'>
                    <div className='name'>
                      <h1>
                        {name}
                      </h1>
                    </div>
                    <div>
                      <span>
                        dimension:
                      </span>
                       {dimension}
                    </div>
                    <div>
                      <span>
                        type:
                      </span> 
                       {type}
                    </div>
                    <div>
                      <span>
                        created:
                      </span>
                       {created}
                    </div>
                  </div>
                </LocItem>
                ))}
            </LocMain>
            <div>
              <PrevButton
               page={page}
               onClick={()=>prev(page)}
               />
              <NextButton
               page={page}
               onClick={()=>next(page)}
              />
           </div>
           <div>
             <Link to='/'>Main</Link>
          </div>
        </div>
}
const PrevButton=(props)=>{
if (props.page!==1) {
return <>
      <SortButton {...props}>
         prev
      </SortButton>
    </>
    }
    return null
     }
const NextButton=(props)=>{
if (props.page!==7) {
return <>
      <SortButton {...props}>
         next
      </SortButton>
    </>
    }
    return null
}