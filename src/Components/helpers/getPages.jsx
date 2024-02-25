import axios from "axios";
import { url } from "../paths/App";

async function Pages(id){
 return await axios.get(`${url}/location?page=${id}`)
  .then(({data})=>data.results)   
}

export default Pages