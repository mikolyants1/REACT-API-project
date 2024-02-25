import { memo, useId } from "react"
import { Input, Label, SerLink, Span } from "../../../styles/style";

const SerInput = (props) =>{
 const item = props.data;
 const id = useId();
 return (
    <SerLink>
      <Span>
        <Label htmlFor={id}>
            {item}:
        </Label>
        <Input
         {...props}
          id={id} 
         name={item}
          type="text" 
         />
      </Span>
    </SerLink>
    )
}

export default memo(SerInput)