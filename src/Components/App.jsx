import React,{useState,useId} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Search,SerLink,Main,Item,SortButton,LocLink,View,
Input,Label,InfoDiv,Text,Title,Span, Block} from '../styles/style'
import Loader,{Error} from './Loader'
export default function App(){
const [state,setState]=useState({name:'',gender:'',status:'',type:''})
const [inf,setInf]=useState(null)
const arr=['name','gender','status','type']
async function Promise(){
const {results}=(await axios.get(`https://rickandmortyapi.com/api/character`)).data
 setInf(results)
 return results
  }
const {data,isLoading,isError,error,isRefetching}=useQuery(
["coins"],Promise,{staleTime:3*1000})
if (isRefetching) return <Block>update...</Block>
if (isLoading) return <Loader />
if (isError) return <Error send={error} />
if (!inf) return <Loader />
const change=({target})=>{
const val=target.value.trim().toLocaleLowerCase()
setState(prev=>({...prev,[target.name]:val}))
}
const sort=()=>{
const {name,gender,status,type}=state
const list=data.filter(item=>{
if (item.name.toLocaleLowerCase().indexOf(name)!==-1) return item
  }).filter(item=>{
if (item.gender.toLocaleLowerCase().indexOf(gender)!==-1) return item
  }).filter(item=>{
if (item.status.toLocaleLowerCase().indexOf(status)!==-1) return item
  }).filter(item=>{
if (item.type.toLocaleLowerCase().indexOf(type)!==-1) return item
  })
setInf(list)
  }
  return <>
          <Title>
             React Api project
          </Title>
          <Search>
            {arr.map(item=>(
             <SerInput
              key={item}
              data={item}
              onChange={change}
             />
            ))}
          </Search>
          <View>
            <SortButton onClick={sort}>
               sort
            </SortButton>
          </View>
          <Main>
           {inf.map(({image,id,name,status,gender,type})=>(
            <Item key={id}>
              <img src={image} alt="" />
              <InfoDiv>
                <Text>
                  <Title>
                    <Link to={`/${id}`}>
                      {name}
                    </Link> 
                  </Title>
                </Text>
                <View>
                  <Span>
                    status:
                  </Span>
                   {status}
                </View>
                <View>
                  <Span>
                    gender:
                  </Span> 
                  {gender}
                </View>
                <View>
                  <Span>
                    type:
                  </Span>
                  {!type?'unknown':type}
                </View>
              </InfoDiv>
            </Item>
            ))}
          </Main>
          <LocLink>
            <Link to='/loc'>
              <h2>
                Locations
              </h2>
            </Link>
          </LocLink>
        </>
  }

function SerInput(props){
 const item=props.data
 const id=useId()
return (
    <SerLink>
      <Span>
        <Label htmlFor={id}>
            {item}:
         </Label>
         <Input {...props} id={id} 
          name={item} type="text" 
         />
      </Span>
    </SerLink>
    )
  }