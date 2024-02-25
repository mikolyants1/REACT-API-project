import {useParams} from 'react-router-dom'
import { Head,Cell,Table,View, Header, Body,Row  } from '../../styles/style.jsx'
import {Link} from 'react-router-dom'
import useAxios from '../helpers/Custom.jsx'
import Loader from '../ui/load/Loader.jsx'
import { url } from './App.jsx'
import ItemNameCard from '../ui/cards/ItemNameCard.jsx'

function Episode(){
  const {par} = useParams();
  const {data,load,err,text} = useAxios({
   url:`${url}/episode/${par}`,
   method:'GET',
   body:{},
  });

  if (load) return <Loader />;
  if (err) return <Error send={text} />;

  return (
       <>
        <Table>
          <Header>
            <Row>
              <Head>
                Episode
              </Head>
              <Head>
                {data.episode}
              </Head>
            </Row>
          </Header>
          <Body>
            <Row>
              <Cell>
                 name
              </Cell>
              <Cell>
                {data.name}
              </Cell>
            </Row>
            <Row>
              <Cell>
                date
              </Cell>
              <Cell>
               {data.air_date}
              </Cell>
            </Row>
            <Row> 
              <Cell>
                characters
              </Cell>
              <Cell>
                <View>
                 {data.characters.map(i=>(
                  <View key={i}>
                    <Link to={`/${i.split('/').at(-1)}`}>
                      <ItemNameCard id={i} />
                    </Link>
                  </View>
                  ))}
                </View>
              </Cell>
            </Row>
          </Body>
        </Table>
        <View>
          <Link to='/'>
            <h2>
               Main
            </h2>
          </Link>
        </View>
      </>
  )
}

export default Episode