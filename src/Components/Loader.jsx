import {useState,useEffect} from 'react'
import { Block ,Spin } from '../styles/style';

export default function Loader(){
    const [spin,setSpin]=useState(0)
     useEffect(()=>{
       setInterval(() => {
        setSpin(prev=>(
         prev==360?0:prev+10
        ))
       }, 50);
     },[])
       return (
         <Block>
           <Spin spin={spin} />
         </Block>
       )
     }
export function Error({send}){
 const [err,setErr]=useState('')
 useEffect(()=>{
    setInterval(() => {
      setTimeout(() => {
        setErr('')
      },  0);
      setTimeout(() => {
        setErr('.')
      }, 200);
      setTimeout(() => {
        setErr('..')
      }, 400);
      setTimeout(() => {
        setErr('...')
      }, 600);
    }, 800);
  },[])
    return (
        <>
         <Block> error {err} </Block>
         <Block>{send.message}</Block>
        </>
    )
}