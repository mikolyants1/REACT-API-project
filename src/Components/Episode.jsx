import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'
import { EpisodeForm,Table,View } from '../styles/style'
import {Link} from 'react-router-dom'
import  axios from 'axios'
import { useQuery } from '@tanstack/react-query'
function Name({id}) {
const {data,isLoading,isError}=useQuery({queryKey:['data',id],
queryFn:async ()=>await fetch(`${id}`).then(res=>res.json()),
keepPreviousData:true,refetchOnWindowFocus:false})
if (isLoading) return <div>...</div>
if (isError) return <div>error</div>
return <div>{data.name}</div>
}
export default function Episode(){
    const [json,setJson]=useState(null)
    const [err,setErr]=useState(false)
    const [load,setLoad]=useState(true)
    const {par}=useParams()
    useEffect(()=>{
    const cancelHand=axios.CancelToken.source()
    const Data=async ()=>{
    return await axios.get(`https://rickandmortyapi.com/api/episode/${par}`)
    .then(({data})=>setJson(data))
    .catch(()=>setErr(true))
    .finally(()=>setLoad(false))
      }
    Data()
    return ()=>{
   cancelHand.cancel()
      }
    },[])
    if (load) return <div>....</div>
    if (err) return <div>error</div>
return <>
        <EpisodeForm>
          <tr>
             <Table>
                 Episode
             </Table>
             <Table>
               {json.episode}
             </Table>
          </tr>
          <tr>
            <Table>
               name
            </Table>
            <Table>
               {json.name}
            </Table>
        </tr>
        <tr>
           <Table>
             date
           </Table>
           <Table>
             {json.air_date}
           </Table>
        </tr>
           <tr> 
              <Table>
                characters
              </Table>
              <Table>
                <View>
                 {json.characters.map(item=>(
                   <View key={item}>
                     <Link to={`/${item.split('/').at(-1)}`}>
                       <Name id={item} />
                     </Link>
                   </View>
                    ))}
                </View>
              </Table>
            </tr>
          </EpisodeForm>
          <View>
            <Link to='/'>
             <h2>
               Main
             </h2>
           </Link>
         </View>
       </>
}