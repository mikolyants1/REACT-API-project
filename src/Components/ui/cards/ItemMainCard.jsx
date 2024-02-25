import { memo } from 'react'
import { InfoDiv, Item, Span, Text, Title, View } from '../../../styles/style'
import { Link } from 'react-router-dom';
import createItems from '../../helpers/createItems';

function ItemMainCard(props) {
 const {image,id,name,status,gender} = props;
 const type = props.type ?? "unknown";
 const items = createItems(status,gender,type);
  return (
    <Item>
      <img
        src={image}
        alt=""
        />
      <InfoDiv>
        <Text>
          <Title>
            <Link to={`/${id}`}>
                {name}
            </Link> 
          </Title>
        </Text>
        {items.map(({name,value})=>(
        <View key={name}>
          <Span>
            {name}:
          </Span>
          {value}
        </View>
        ))}
      </InfoDiv>
    </Item>
  )
}

export default memo(ItemMainCard)