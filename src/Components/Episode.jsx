import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'
import { EpisodeForm } from '../styles/style'
import {Link} from 'react-router-dom'
import  axios from 'axios'
import { useQuery } from '@tanstack/react-query'
async function Fetch(id) {
    return (await axios.get(`${id}`)).data  
}
function Name({id}) {
const {data,isLoading,isError}=useQuery(['data',id],()=>Fetch(id),{keepPreviousData:true,refetchOnWindowFocus:false})
if (isLoading) return <div>...</div>
if (isError) return <div>error</div>
return <div>{data.name}</div>
}
export default function Episode(){
    const params=useParams()
    const [json,setJson]=useState(null)
    const [err,setErr]=useState(false)
    const [load,setLoad]=useState(true)
    useEffect(()=>{
    const Data=async ()=>{
    return await fetch(`https://rickandmortyapi.com/api/episode/${params.par}`)
    .then(res=>res.json())
    .then(setJson)
    .catch(()=>setErr(true))
    .finally(()=>setLoad(false))
      }
    Data()
    },[])
    if (load)  return <div>....</div>
    if (err) return <div>error</div>
    return <div>
        <EpisodeForm>
          <tr>
             <td>Episode</td>
             <td>{json.episode}</td>
          </tr>
          <tr>
            <td>name</td>
            <td>{json.name}</td>
        </tr>
        <tr>
           <td>date</td>
           <td>{json.air_date}</td>
        </tr>
           <tr> 
              <td>characters</td>
                 <td>
                     <div>
                        {json.characters.map((item,index)=>(
                            <div key={index}>
                               <Link to={`/${item.split('/')[5]}`}>
                                  <Name id={item} />
                               </Link>
                            </div>
                        ))}
                     </div>
                  </td>
               </tr>
            </EpisodeForm>
          <div>
        <Link to='/'>Main</Link>
       </div>
    </div>
}