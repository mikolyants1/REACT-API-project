import React,{useState} from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
export default function App(){
  const [name,setName]=useState('')
  const [gender,setGender]=useState('')
  const [status,setStatus]=useState('')
  const [type,setType]=useState('')
  const [inf,setInf]=useState({list:null})
  async function Fetch(){
  const data=(await axios.get(`https://rickandmortyapi.com/api/character`)).data
  setInf({list:data.results})
   return data.results
    }
  const {data,isLoading,isError}=useQuery(["coins"],Fetch,{keepPreviousData:true,refetchOnWindowFocus:false})
  if (isLoading)  return <div>load...</div>
  if (isError)  return <div>err</div>
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
       setInf({list:list})
      }
    return <div>
      <header>
       <h1>React Api project</h1>
      </header>
      <div className='ser'>
        <div className='ser1'>
         <span>
           <label htmlFor="name">name:</label>
            <input type="text" id='name'
             onChange={(e)=>setName(e.target.value)} />
        </span>
       </div>
      <div className='ser1'>
       <span>
        <label htmlFor="gender">gender:</label>
         <input type="text" id='name'
          onChange={(e)=>setGender(e.target.value)} />
       </span>
      </div>  
      <div className='ser1'>
       <span>
        <label htmlFor="status">status:</label>
         <input type="text" id='status'
          onChange={(e)=>setStatus(e.target.value)} />
       </span> 
      </div>
       <div className='ser1'>
        <span>
         <label htmlFor="type">type:</label>
          <input type="text" id='type'
           onChange={(e)=>setType(e.target.value)} />
       </span>
      </div>
      </div>
      <div>
      <button className='sort'
       onClick={sort}>sort</button>
      </div>
      <div className='main'>
      {inf.list.map(({image,id,name,status,gender,type},index)=>{
      return <div className='item' key={index}>
      <img className='img' src={image} alt="" />
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
    </div>
  })}
    </div>
    </div>
  }
