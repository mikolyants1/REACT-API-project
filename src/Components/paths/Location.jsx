import { useQuery } from "@tanstack/react-query"
import { LocMain,View,Block } from "../../styles/style"
import {Link} from 'react-router-dom'
import ItemLocCard from '../ui/cards/ItemLocCard'
import Pages from '../helpers/getPages'
import Loader from "../ui/load/Loader"
import Error from "../ui/load/Error"

function Location({page,children}){
const {data,isLoading,isError,error,isRefetching}=useQuery({
  queryKey:["pages",page],
  queryFn:()=>Pages(page),
  staleTime:3*1000
 });

if (isRefetching) return <Block>update...</Block>;
if (isLoading) return <Loader />;
if (isError) return <Error send={error} />;

    return <>
            <LocMain>
             {data.map(({created,dimension,name,type})=>(
              <ItemLocCard
                key={created}
                created={created}
                dimension={dimension}
                name={name}
                type={type}
              />
              ))}
            </LocMain>
            {children}
           <View>
             <Link to='/'>
              <h2>
                Main
              </h2>
            </Link>
          </View>
        </>
}

export default Location