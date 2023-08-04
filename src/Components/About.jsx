import {useEffect,useState} from 'react'
import {useParams,Link,} from 'react-router-dom'
import { Character,Types,Series } from '../styles/style.jsx'
export default function About(){
const params=useParams()
const [json,setJson]=useState(null)  
useEffect(()=>{
fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
.then(res=>res.json())
.then(setJson)
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
    return <div key={index}>
    <Link to={`${item.split('/')[5]}`}>episode {item.split('/')[5]},</Link>   
    </div>
})}
</Series>
<div>
    <Link to='/'>Main</Link>
    </div>
</Character>

}