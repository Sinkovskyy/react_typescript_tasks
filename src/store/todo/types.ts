


export type TInitialState = {
    todos: TTodo[]
}


export type TTodo = {
    id: number
    text: string
    condition: TCondition
}

export type TCondition = 'done' | 'processed'

export type TChangeTodoPayload = {
    id: number
    text?: string
    condition?: TCondition

}