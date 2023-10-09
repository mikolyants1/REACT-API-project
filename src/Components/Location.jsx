
import axios from 'axios'
import { useQuery } from "@tanstack/react-query"
import { LocMain,LocItem,InfoDiv,Text,Title,Span,View } from "../styles/style"
import Loader,{Error} from './Loader'
import {Link} from 'react-router-dom'
async function Pages(id){
return await axios.get(`https://rickandmortyapi.com/api/location?page=${id}`)
.then(({data})=>data.results)   
}
export default function Location({page,children}){
const {data,isLoading,isError,error,isRefetching}=useQuery({
queryKey:["pages",page],queryFn:()=>Pages(page),staleTime:3*1000})
if (isRefetching) return <Block>update...</Block>
if (isLoading) return <Loader />
if (isError) return <Error send={error} />
    return <>
            <LocMain>
             {data.map(({created,dimension,name,type})=>(
              <LocItem key={created}>  
                <InfoDiv>
                  <Text>
                    <Title>
                      {name}
                    </Title>
                  </Text>
                  <View>
                    <Span>
                      dimension:
                    </Span>
                    {dimension}
                  </View>
                  <View>
                    <Span>
                      type:
                    </Span> 
                    {type}
                  </View>
                  <View>
                    <Span>
                      created:
                    </Span>
                    {created}
                  </View>
                </InfoDiv>
              </LocItem>
              ))}
            </LocMain>
            {children}
           <View>
             <Link to='/'>
              <h2>Main</h2>
            </Link>
          </View>
        </>
}
