import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'
import { EpisodeForm } from '../styles/style'
import {Link} from 'react-router-dom'
import  axios from 'axios'
import { useQuery } from '@tanstack/react-query'
function Name({id}) {
const {data,isLoading,isError}=useQuery(['data',id],
async ()=>await axios.get(`${id}`).then(({data})=>data),
{keepPreviousData:true,refetchOnWindowFocus:false})
if (isLoading) return <div>...</div>
if (isError) return <div>error</div>
return <div>{data.name}</div>
}
export default function Episode(){
    const {par}=useParams()
    const [json,setJson]=useState(null)
    const [err,setErr]=useState(false)
    const [load,setLoad]=useState(true)
    useEffect(()=>{
    const Data=async ()=>{
    return await fetch(`https://rickandmortyapi.com/api/episode/${par}`)
    .then(res=>res.json())
    .then(setJson)
    .catch(()=>setErr(true))
    .finally(()=>setLoad(false))
      }
    Data()
    },[])
    if (load) return <div>....</div>
    if (err) return <div>error</div>
    return <div>
        <EpisodeForm>
          <tr>
             <td>
               Episode
             </td>
             <td>
               {json.episode}
             </td>
          </tr>
          <tr>
            <td>
               name
            </td>
            <td>
               {json.name}
            </td>
        </tr>
        <tr>
           <td>
             date
           </td>
           <td>
             {json.air_date}
           </td>
        </tr>
           <tr> 
              <td>
                characters
              </td>
                 <td>
                     <div>
                        {json.characters.map((item,i)=>(
                            <div key={i}>
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