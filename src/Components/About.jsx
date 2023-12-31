import {Component} from 'react'
import {useParams,Link,} from 'react-router-dom'
import { Character,Types,Series,Status,Title,Span,View } from '../styles/style.jsx'
import Loader,{Error} from './Loader.jsx'
class Person extends Component {
 constructor(props){
    super(props)
    this.state={
     json:null,
     err:false,
     text:''
    }
  }
async componentDidMount(){
const controller = new AbortController()
const { signal } = controller
const { id } = this.props.params
await fetch(`https://rickandmortyapi.com/api/character/${id}`,{signal:signal})
.then(res=>res.ok?res.json():this.setState({err:true,text:res.status}))
.then(data=>this.setState({json:data}))
.catch(error=>this.setState({err:true,text:error}))
return ()=>{
controller.abort()
  }
}
render(){
const {json,err,text}=this.state
if (err) return <Error send={text} />
if (!json) return <Loader />
return <Character>
         <img src={json.image} alt="" />
         <View>
           <Title>
             {json.name}
           </Title>
         </View>
         <Status>
           <Span>
             status:
           </Span>
           {json.status}
         </Status>
         <View>
           <Span>
             origin:
           </Span>
           {json.origin.name}
         </View>
         <Types>
           <Span>
            species:
           </Span>
           {json.species}
         </Types>
         <Types>
           <Span>
             gender:
           </Span>
           {json.gender}
         </Types>
         <Types>
           <Span>
             location:
           </Span>
           {json.location.name}
         </Types>
         <View>
           <Span>
             Episodes:
           </Span>
         </View>
         <Series>
           {json.episode.map(item=>(
             <View key={item}>
               <Link to={`${item.split('/').at(-1)}`}>
                 episode {item.split('/').at(-1)},
               </Link>   
             </View>
            ))}
         </Series>
         <View>
           <Link to='/'>
             Main
           </Link>
         </View>
       </Character>
    }
}
const About=()=><Person params={useParams()} />
export default About