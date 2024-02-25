import {Component} from 'react'
import {useParams,Link,} from 'react-router-dom'
import { Character,Types,Series,Status,Title,Span,View } from '../../styles/style.jsx'
import { url } from './App.jsx'
import ItemEpisodeCard from '../ui/cards/ItemEpisodeCard.jsx'
import Error from '../ui/load/Error.jsx'
import Loader from '../ui/load/Loader.jsx'

export class Person extends Component {
 constructor(props){
    super(props);
    this.state = {
     json:null,
     err:false,
     text:''
    };
  }
async componentDidMount(){
  const controller = new AbortController();
  const { signal } = controller;
  const { id } = this.props;
  await fetch(`${url}/character/${id}`,{signal:signal})
  .then((res)=>{
     if (!res.ok){
      this.setState({err:true,text:res.status});
     return;
     };
    return res.json();
   })
   .then(data=>this.setState({json:data}))
   .catch(error=>this.setState({err:true,text:error}))

     return ()=>{
      controller.abort();
    };
  };

render(){
  const {json,err,text} = this.state;

  if (err) return <Error send={text} />;
  if (!json) return <Loader />;
   return (
       <Character>
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
            <ItemEpisodeCard 
              key={item}
              item={item}
            />
           ))}
         </Series>
         <View>
           <Link to='/'>
             Main
           </Link>
         </View>
       </Character>
      )
    }
}
const About = () =><Person params={useParams().id} />;

export default About