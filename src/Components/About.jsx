import {Component} from 'react'
import {useParams,Link,} from 'react-router-dom'
import { Character,Types,Series,Status } from '../styles/style.jsx'
class Hero extends Component {
 constructor(props){
    super(props)
    this.state={
      json:null,
      err:false,
    }
  }
async componentDidMount(){
const controller = new AbortController()
const { signal } = controller
const { id } = this.props.params
await fetch(`https://rickandmortyapi.com/api/character/${id}`,{ signal })
.then(res=>res.ok?res.json():this.setState({err:true}))
.then(data=>this.setState({json:data}))
.catch(()=>this.setState({err:true}))
return ()=>{
controller.abort()
  }
}
render(){
const {json,err}=this.state
if (err) return <div>error...</div>
if (!json) return <div>loading...</div>

return <Character>
         <img src={json.image} alt="" />
         <div>
           <h1>
             {json.name}
           </h1>
         </div>
         <Status>
           <span>
             status:
           </span>
           {json.status}
         </Status>
         <div>
           <span>
             origin:
           </span>
           {json.origin.name}
         </div>
         <Types>
           <span>
            species:
           </span>
           {json.species}
         </Types>
         <Types>
           <span>
             gender:
           </span>
           {json.gender}
         </Types>
         <Types>
           <span>
             location:
           </span>
           {json.location.name}
         </Types>
         <div>
           <span>
             Episodes:
           </span>
         </div>
         <Series>
           {json.episode.map(item=>(
             <div key={item}>
               <Link to={`${item.split('/')[5]}`}>
                 episode {item.split('/')[5]},
               </Link>   
             </div>
            ))}
         </Series>
         <div>
           <Link to='/'>
             Main
           </Link>
         </div>
       </Character>
    }
}
const About=()=><Hero params={useParams()} />
export default About