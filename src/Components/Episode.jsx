import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'
import { EpisodeForm,Table,View } from '../styles/style'
import {Link} from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import useApi from './Custom.jsx'
function Name({id}) {
const {data,isLoading,isError}=useQuery({queryKey:['data',id],
queryFn:async ()=>await fetch(`${id}`).then(res=>res.json()),
keepPreviousData:true,refetchOnWindowFocus:false})
return <>
  {isLoading&&<>...</>}
  {isError&&<>err..</>}
  {!isLoading&&!isError&&<>{data.name}</>}
      </>
}
export default function Episode(){
  const {par:id}=useParams()
  const {data,load,err}=useApi({url:`https://rickandmortyapi.com/api/episode`,id:id})
   if (load) return <div>....</div>
   if (err) return <div>error...</div>
return <>
        <EpisodeForm>
          <tr>
             <Table>
                 Episode
             </Table>
             <Table>
               {data.episode}
             </Table>
          </tr>
          <tr>
            <Table>
               name
            </Table>
            <Table>
               {data.name}
            </Table>
        </tr>
        <tr>
           <Table>
             date
           </Table>
           <Table>
             {data.air_date}
           </Table>
        </tr>
           <tr> 
              <Table>
                characters
              </Table>
              <Table>
                <View>
                 {data.characters.map(item=>(
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

