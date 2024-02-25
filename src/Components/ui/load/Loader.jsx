import {useState,useEffect} from 'react'
import { Block ,Spin } from '../../../styles/style';

function Loader(){
 const [spin,setSpin] = useState(0);
  useEffect(()=>{
   setInterval(()=>{
    setSpin(x=> x==360 ? 0 :x+10)
    }, 50);
  },[])
    return (
      <Block>
        <Spin spin={spin} />
      </Block>
      )
}
export default Loader
