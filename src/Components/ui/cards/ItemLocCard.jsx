import {memo} from 'react'
import { InfoDiv, LocItem, Span, Text, Title, View } from '../../../styles/style';
import createLocItems from '../../helpers/createLocItems';

function ItemLocCard(props) {
  const {name,dimension,type,created} = props;
  const items = createLocItems(dimension,type,created);
  return (
        <LocItem>  
          <InfoDiv>
            <Text>
              <Title>
                {name}
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
        </LocItem>
  )
}

export default memo(ItemLocCard);