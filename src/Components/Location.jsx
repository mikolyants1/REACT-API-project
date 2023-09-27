import { useStore } from "../store/store"
import axios from 'axios'
import { useQuery } from "@tanstack/react-query"
import { LocMain,LocItem,SortButton,InfoDiv,Text,Title,Span,View } from "../styles/style"
import {Link} from 'react-router-dom'
async function Pages(id){
return await axios.get(`https://rickandmortyapi.com/api/location?page=${id}`)
.then(({data})=>data.results)   
}
export default function Location(){
const page=useStore(state=>state.page)
const next=useStore(state=>state.nextPage)
const prev=useStore(state=>state.prevPage)
const {data,isLoading,isError}=useQuery({queryKey:["pages",page],
queryFn:()=>Pages(page),keepPreviousData:true,refetchOnWindowFocus:false})
if (isLoading) return <div>loading...</div>
if (isError) return <div>error</div>
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
            <View>
              <PrevButton
               page={page}
               onClick={prev}
               />
              <NextButton
               page={page}
               onClick={next}
              />
           </View>
           <View>
             <Link to='/'>
              <h2>
                Main
              </h2>
            </Link>
          </View>
        </>
}
const PrevButton=(props)=>{
if (props.page!==1) {
return <>
      <SortButton {...props}>
         prev
      </SortButton>
    </>
    }
  return null
     }
const NextButton=(props)=>{
if (props.page!==7) {
return <>
      <SortButton {...props}>
         next
      </SortButton>
    </>
    }
  return null
}