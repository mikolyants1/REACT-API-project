import React,{useState} from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Search,SerLink,Main,Item,SortButton,LocLink} from '../styles/style'
export default function App(){
const [name,setName]=useState('')
const [gender,setGender]=useState('')
const [status,setStatus]=useState('')
const [type,setType]=useState('')
const [inf,setInf]=useState(null)
async function Fetch(){
const {results}=(await axios.get(`https://rickandmortyapi.com/api/character`)).data
  setInf(results)
  return results
  }
const {data,isLoading,isError}=useQuery(["coins"],Fetch,
{keepPreviousData:true,refetchOnWindowFocus:false})
if (isLoading) return <div>load...</div>
if (isError) return <div>err</div>
if (!inf) return <div>...</div>
const sort=()=>{
const val=[name,gender,status,type].map(item=>item.trim().toLocaleLowerCase())
const list=data.filter((item)=>{
if (item.name.toLocaleLowerCase().indexOf(val[0])!==-1) return item
  }).filter((item)=>{
if (item.gender.toLocaleLowerCase().indexOf(val[1])!==-1) return item
  }).filter((item)=>{
if (item.status.toLocaleLowerCase().indexOf(val[2])!==-1) return item
  }).filter((item)=>{
if (item.type.toLocaleLowerCase().indexOf(val[3])!==-1) return item
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
            <SerLink>
              <span>
                <label htmlFor="name">
                  name:
                </label>
                <SetInfo set={setName} />
              </span>
            </SerLink>
            <SerLink>
              <span>
                <label htmlFor="gender">
                  gender:
                </label>
                <SetInfo set={setGender} />
              </span>
           </SerLink>  
           <SerLink>
             <span>
               <label htmlFor="status">
                 status:
               </label>
               <SetInfo set={setStatus} />
             </span> 
           </SerLink>
           <SerLink>
             <span>
               <label htmlFor="type">
                 type:
               </label>
               <SetInfo set={setType} />
             </span>
          </SerLink>
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
function SetInfo({set}){
    const change=(e)=>{
      set(e.target.value)
    }
     return <>
      <input type="text" id='type'
       onChange={change} />
     </>
  }
