import {useEffect,useState} from 'react'
import {useParams,Link} from 'react-router-dom'
export default function About(){
const params=useParams()
const [json,setJson]=useState(null)  
useEffect(()=>{
fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
.then(res=>res.json())
.then((data)=>setJson(data))
},[])
if (!json) return <div>loading...</div>

return <div className='item1'>
<img className='img1' src={json.image} alt="" />
<div><h1>{json.name}</h1></div>
<div style={{marginTop:'-25px'}}><span>status:</span>{json.status}</div>
<div><span>origin:</span>{json.origin.name}</div>
<div className='avatar'><span>species:</span>{json.species}</div>
<div className='avatar'><span>gender:</span>{json.gender}</div>
<div className='avatar'><span>location:</span>{json.location.name}</div>
<div><span>Episodes:</span></div>
<div className='episodes'>
    {json.episode.map((item,index)=>{
    return <div className='episode' key={index}>
    <Link to={`${item.split('/')[5]}`}>episode {item.split('/')[5]},</Link>   
    </div>
})}
</div>
<div>
    <Link to='/'>Main</Link>
    </div>
</div>

}