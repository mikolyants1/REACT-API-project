import { useStore } from "../../store/store";
import { View } from "../../styles/style";
import Location from "../paths/Location";
import StepButton from "../ui/buttons/stepButton";

function Place(){
    const page = useStore(state=>state.page);
    const next = useStore(state=>state.nextPage);
    const prev = useStore(state=>state.prevPage);
     return (
       <Location page={page}>
         <View>
           <StepButton
            onClick={prev}
            step={page!==1}
            text='prev'
            />
           <StepButton
            onClick={next}
            step={page!==7}
            text='next'
            />
         </View>
       </Location>
     )
   }
 export default Place;