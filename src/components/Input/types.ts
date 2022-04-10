import { MutableRefObject, RefObject, SyntheticEvent } from "react"




export type TInput = {
    name?: string
    label?: string
    value?: string
    type?: 'number' | 'text'
    onChange?: (e: SyntheticEvent) => void,
    isValid?: boolean,
    innerRef?: RefObject<HTMLInputElement>
}

export type TStyledInput = {
    isValid: boolean
}