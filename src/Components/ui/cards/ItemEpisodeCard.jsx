import {memo} from 'react'
import { View } from '../../../styles/style';
import { Link } from 'react-router-dom';

function ItemEpisideCard(props) {
    const {item} = props;
    
    return (
      <View>
        <Link
         to={`${item.split('/').at(-1)}`}>
            episode {item.split('/').at(-1)},
        </Link>   
      </View>
    )
}

export default memo(ItemEpisideCard);