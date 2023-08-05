import React,{useState} from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Search,SerLink,Main,Item ,SortButton} from '../styles/style'
export default function App(){
  const [name,setName]=useState('')
  const [gender,setGender]=useState('')
  const [status,setStatus]=useState('')
  const [type,setType]=useState('')
  const [inf,setInf]=useState(null)
  async function Fetch(){
  const { results }=(await axios.get(`https://rickandmortyapi.com/api/character`)).data
  setInf(results)
   return results
    }
  const {data,isLoading,isError}=useQuery(["coins"],Fetch,{keepPreviousData:true,refetchOnWindowFocus:false})
  if (isLoading) return <div>load...</div>
  if (isError)  return <div>err</div>
  if (!inf) return <div>...</div>
  const sort=()=>{
      const val1=name.trim().toLocaleLowerCase()
      const val2=gender.trim().toLocaleLowerCase()
      const val3=status.trim().toLocaleLowerCase()
      const val4=type.trim().toLocaleLowerCase()
      const list=data.filter((item)=>{
        if (item.name.toLocaleLowerCase().indexOf(val1)!==-1)  return item
       }).filter((item)=>{
        if (item.gender.toLocaleLowerCase().indexOf(val2)!==-1)  return item
       }).filter((item)=>{
        if (item.status.toLocaleLowerCase().indexOf(val3)!==-1)  return item
       }).filter((item)=>{
        if (item.type.toLocaleLowerCase().indexOf(val4)!==-1) return item
       })
       setInf(list)
      }
    return <div>
      <header>
       <h1>React Api project</h1>
      </header>
      <Search>
        <SerLink>
         <span>
           <label htmlFor="name">name:</label>
            <input type="text" id='name'
             onChange={(e)=>setName(e.target.value)} />
        </span>
       </SerLink>
      <SerLink>
       <span>
        <label htmlFor="gender">gender:</label>
         <input type="text" id='gender'
          onChange={(e)=>setGender(e.target.value)} />
       </span>
      </SerLink>  
      <SerLink>
       <span>
        <label htmlFor="status">status:</label>
         <input type="text" id='status'
          onChange={(e)=>setStatus(e.target.value)} />
       </span> 
      </SerLink>
       <SerLink>
        <span>
         <label htmlFor="type">type:</label>
          <input type="text" id='type'
           onChange={(e)=>setType(e.target.value)} />
        </span>
       </SerLink>
      </Search>
      <div>
      <SortButton onClick={sort}>sort</SortButton>
      </div>
      <Main>
      {inf.map(({image,id,name,status,gender,type},index)=>(
      <Item key={index}>
      <img src={image} alt="" />
      <div className='info'>
      <div className='name'>
      <h1>
       <Link to={`/${id}`}>{name}</Link> 
      </h1>
    </div>
   <div><span>status:</span> {status}</div>
   <div><span>gender:</span> {gender}</div>
   <div><span>type:</span> {type}</div>
   </div>
    </Item>
  ))}
    </Main>
    <div>
      <Link to='/loc'>Locations</Link>
    </div>
    </div>
  }
