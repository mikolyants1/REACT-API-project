import {useEffect,useState} from 'react'
import axios from 'axios'
import {useParams,Link,} from 'react-router-dom'
import { Character,Types,Series } from '../styles/style.jsx'
export default function About(){
const params=useParams()
const [json,setJson]=useState(null)  
async function Fetch(){
 return await axios.get(`https://rickandmortyapi.com/api/character/${params.id}`)
 .then(({data})=>setJson(data))   
}
useEffect(()=>{
Fetch()
},[])
if (!json) return <div>loading...</div>
return <Character>
<img  src={json.image} alt="" />
<div><h1>{json.name}</h1></div>
<div style={{marginTop:'-25px'}}><span>status:</span>{json.status}</div>
<div><span>origin:</span>{json.origin.name}</div>
<Types><span>species:</span>{json.species}</Types>
<Types><span>gender:</span>{json.gender}</Types>
<Types><span>location:</span>{json.location.name}</Types>
<div><span>Episodes:</span></div>
<Series>
    {json.episode.map((item,index)=>{
    return <div className='episode' key={index}>
    <Link to={`${item.split('/')[5]}`}>episode {item.split('/')[5]},</Link>   
    </div>
})}
</Series>
<div>
    <Link to='/'>Main</Link>
    </div>
</Character>

}