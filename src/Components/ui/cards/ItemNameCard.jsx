import { useQuery } from "@tanstack/react-query";
import { memo } from "react"

function Name({id}) {
  const {data,isLoading,isError,isSuccess} = useQuery({
  queryKey:['data',id],
  queryFn:async ()=>await fetch(`${id}`)
  .then(res=>res.json())
 });

 return (
      <>
       {isLoading&&<>...</>}
       {isError&&<>err..</>}
       {isSuccess&&<>{data.name}</>}
     </>
    )
};

export default memo(Name)