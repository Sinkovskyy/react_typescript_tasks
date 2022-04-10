import { SyntheticEvent } from "react"
import { TCondition } from "../../../../store/todo/types"




export type TTodoContainer = {
    todos: TTodo[],
    checkItemToggleHandler?: (id: number, cheked: boolean) => void
    removeItemClickHandler?: (id: number) => void
    addTodoClickHandler?: (text: string) => void
}



export type TTodo = {
    id: number
    condition: TCondition
    text: string
}
