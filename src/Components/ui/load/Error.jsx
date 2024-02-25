import { useEffect, useState } from "react";
import { Block } from "../../../styles/style";

function Error({send}){
    const [err,setErr] = useState('');
    useEffect(()=>{
      setInterval(() => {
       setTimeout(()=>setErr(''),0);
       setTimeout(()=>setErr('.'),200);
       setTimeout(()=>setErr('..'),400);
       setTimeout(()=>setErr('...'),600);
       }, 800);
    },[])

     return (
        <>
          <Block>
            error {err}
          </Block>
          <Block>
            {send.message ? send.message : send}
          </Block>
        </>
     )
    }

export default Error