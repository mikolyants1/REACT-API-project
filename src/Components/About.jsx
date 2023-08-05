import {Component} from 'react'
import axios from 'axios'
import {useParams,Link,} from 'react-router-dom'
import { Character,Types,Series } from '../styles/style.jsx'
 class Hero extends Component {
constructor(props){
    super(props)
    this.state={
        json:null
    }
}
componentDidMount(){
const params=this.props.params
axios.get(`https://rickandmortyapi.com/api/character/${params.id}`)
.then(({data})=>this.setState({json:data}))
}
render(){
const json=this.state.json   
if (!json) return <div>loading...</div>
return <Character>
<img  src={json.image} alt="" />
<div><h1>{json.name}</h1></div>
<div style={{marginTop:'-25px'}}><span>status:</span>{json.status}</div>
<div><span>origin:</span>{json.origin.name}</div>
<Types><span>species:</span>{json.species}</Types>
<Types><span>gender:</span>{json.gender}</Types>
<Types><span>location:</span>{json.location.name}</Types>
<div><span>Episodes:</span></div>
<Series>
    {json.episode.map((item,index)=>{
    return <div className='episode' key={index}>
    <Link to={`${item.split('/')[5]}`}>episode {item.split('/')[5]},</Link>   
    </div>
})}
</Series>
<div>
    <Link to='/'>Main</Link>
    </div>
</Character>
}
}
const About=()=><Hero params={useParams()} />
export default About