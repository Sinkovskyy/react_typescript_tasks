import { TTodo } from "../../types"







export type TTodoItem = TTodo & {
    removeClickListener?: (id: number) => void
    checkToggleHandler?: (id: number, checked: boolean) => void
}


export type TTodoText = {
    lineThrough: boolean
}

