import React,{useState} from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Search,SerLink,Main,Item,SortButton,LocLink} from '../styles/style'
export default function App(){
const [state,setState]=useState({name:'',gender:'',status:'',type:''})
const [inf,setInf]=useState(null)
const arr=['name','gender','status','type']
async function Promise(){
const {results}=(await axios.get(`https://rickandmortyapi.com/api/character`)).data
  setInf(results)
  return results
  }
const {data,isLoading,isError}=useQuery(["coins"],Promise,
{keepPreviousData:true,refetchOnWindowFocus:false})
if (isLoading) return <div>load...</div>
if (isError) return <div>err</div>
if (!inf) return <div>...</div>
const change=({target})=>{
const val=target.value.trim().toLocaleLowerCase()
setState(prev=>({...prev,[target.name]:val}))
}
const sort=()=>{
const {name,gender,status,type}=state
const list=data.filter((item)=>{
if (item.name.toLocaleLowerCase().indexOf(name)!==-1) return item
  }).filter((item)=>{
if (item.gender.toLocaleLowerCase().indexOf(gender)!==-1) return item
  }).filter((item)=>{
if (item.status.toLocaleLowerCase().indexOf(status)!==-1) return item
  }).filter((item)=>{
if (item.type.toLocaleLowerCase().indexOf(type)!==-1) return item
  })
setInf(list)
  }
  return <div>
          <header>
            <h1>
              React Api project
            </h1>
          </header>
          <Search>
            {arr.map(item=>(
              <SerLink key={item}>
               <span>
                 <label htmlFor={item}>
                     {item}:
                  </label>
                  <input  onChange={change} name={item}
                   id={item} type="text" />
               </span>
             </SerLink>
            ))}
        </Search>
        <div>
          <SortButton onClick={sort}>
             sort
          </SortButton>
        </div>
        <Main>
          {inf.map(({image,id,name,status,gender,type},index)=>(
            <Item key={index}>
              <img src={image} alt="" />
              <div className='info'>
                <div className='name'>
                  <h1>
                    <Link to={`/${id}`}>
                      {name}
                    </Link> 
                  </h1>
                </div>
                <div>
                  <span>
                    status:
                  </span>
                   {status}
                </div>
                <div>
                  <span>
                    gender:
                  </span> 
                   {gender}
                </div>
                <div>
                  <span>
                    type:
                  </span>
                   {type}
                </div>
              </div>
            </Item>
           ))}
       </Main>
       <LocLink>
         <Link to='/loc'>
           <h3>
             Locations
           </h3>
         </Link>
       </LocLink>
    </div>
  }
