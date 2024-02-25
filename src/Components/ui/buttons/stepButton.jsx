import { memo } from "react"
import { SortButton } from "../../../styles/style"

const StepButton = (props) => {
    if (props.step) {
    return <>
          <SortButton {...props}>
            {props.text}
          </SortButton>
        </>
        }
    return null
}

export default memo(StepButton)