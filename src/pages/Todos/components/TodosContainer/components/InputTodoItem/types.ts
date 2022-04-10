import { MutableRefObject, RefObject } from "react"




export type TInputTodoItem = {
    innerRef?: RefObject<HTMLInputElement>
    onSaveClickListener?: () => void
}