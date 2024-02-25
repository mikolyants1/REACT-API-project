import React,{useState,useCallback} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Search,Main,SortButton,LocLink,View,
Title, Block} from '../../styles/style'
import SerInput from '../ui/inputs/SerInput'
import ItemMainCard from '../ui/cards/ItemMainCard'
import Loader from '../ui/load/Loader'

export const url = 'https://rickandmortyapi.com/api'

function App(){
  const [state,setState] = useState({name:'',gender:'',status:'',type:''});
  const [inf,setInf] = useState(null);
  const arr = ['name','gender','status','type'];

  async function Promise(){
   const res = await axios.get(`${url}/character`);
   const { results } = res.data;
   setInf(results);
   return results;
  };

  const {data,isLoading,isError,error,isRefetching} = useQuery(
  ["coins"],Promise,{staleTime:3*1000});

  const change = useCallback(({target}) =>{
    const val = target.value.trim().toLocaleLowerCase();
    setState(prev=>({...prev,[target.name]:val}));
  },[]);

  if (isRefetching) return <Block>update...</Block>;
  if (isLoading) return <Loader />;
  if (isError) return <Error send={error} />;
  if (!inf) return <Loader />;

  const sort = () =>{
    const {name,gender,status,type} = state;
    const list=data.filter(i=>{
     if (i.name.toLocaleLowerCase().indexOf(name)!==-1) return i
    }).filter(i=>{
     if (i.gender.toLocaleLowerCase().indexOf(gender)!==-1) return i
    }).filter(i=>{
     if (i.status.toLocaleLowerCase().indexOf(status)!==-1) return i
    }).filter(i=>{
     if (i.type.toLocaleLowerCase().indexOf(type)!==-1) return i
    })
    setInf(list);
  };
  
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
           {inf.map(i=>(
              <ItemMainCard
               key={i.id}
               id={i.id}
               name={i.name}
               status={i.status}
               gender={i.gender}
               type={i.type}
               image={i.image}
              />
            ))}
          </Main>
          <LocLink>
            <Link to='/loc'>
              <h2>
                Locations
              </h2>
            </Link>
            <Link to='/find'>
              <h2>
                Find Character
              </h2>
            </Link>
          </LocLink>
        </>
  }

export default App