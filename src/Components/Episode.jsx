import {useParams} from 'react-router-dom'
import { Head,Cell,Table,View, Header, Body,Row  } from '../styles/style'
import {Link} from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import useAxios from './Custom.jsx'
import Loader, { Error } from './Loader'
function Name({id}) {
const {data,isLoading,isError}=useQuery({queryKey:['data',id],
queryFn:async ()=>await fetch(`${id}`).then(res=>res.json())})
return <>
  {isLoading&&<>...</>}
  {isError&&<>err..</>}
  {!isLoading&&!isError&&<>{data.name}</>}
      </>
}
export default function Episode(){
  const {par}=useParams()
  const {data,load,err,text}=useAxios({
   url:`https://rickandmortyapi.com/api/episode/${par}`,
   method:'GET',
   body:null
    })
   if (load) return <Loader />
   if (err) return <Error send={text} />
return <>
        <Table>
          <Header>
            <Row>
              <Head>
                Episode
              </Head>
              <Head>
                {data.episode}
              </Head>
            </Row>
          </Header>
          <Body>
            <Row>
              <Cell>
                 name
              </Cell>
              <Cell>
                {data.name}
              </Cell>
            </Row>
            <Row>
              <Cell>
                date
              </Cell>
              <Cell>
               {data.air_date}
              </Cell>
            </Row>
            <Row> 
              <Cell>
                characters
              </Cell>
              <Cell>
                <View>
                 {data.characters.map(item=>(
                  <View key={item}>
                    <Link to={`/${item.split('/').at(-1)}`}>
                      <Name id={item} />
                    </Link>
                  </View>
                  ))}
                </View>
              </Cell>
            </Row>
          </Body>
        </Table>
        <View>
          <Link to='/'>
            <h2>
               Main
            </h2>
          </Link>
        </View>
      </>
}

