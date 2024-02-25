import { useEffect } from "react"
import { useStore } from "../../store/store"
import { useState } from "react"
import { NewSerBut, NewSerHead,NewSerInput} from "../../styles/style"
import Loader from "../ui/load/Loader";
import Error from "../ui/load/Error";
import { Person } from "./About";

function Search(){
const {getQuery,getByIdQuery,date,id,load,
err,person,perErr,perLoad,setId} = useStore();
const [name,setName] = useState('');

useEffect(()=>{
  getQuery();
 },[]);

 useEffect(()=>{
  getByIdQuery(id);
 },[id]);

 const change = ({target}) => {
  const value = target.value.trim();
  setName(value.toLocaleLowerCase());
 };

 const press=()=>{
  const list = date.find(i=>(
    i.name.toLocaleLowerCase()
   .slice(0,name.length) == name
   ));
  setId(list.id);
 };

 if (load||perLoad) return <Loader />;
 if (err||perErr) return <Error send={''} />;
 
    return (
         <>
         <NewSerHead>
           <NewSerInput
            type="text"
            onChange={change}
             />
           <NewSerBut
            onClick={press}>
              find
           </NewSerBut>
         </NewSerHead>
         <Person
          id={person.id}
         />
      </>
    )
}

export default Search