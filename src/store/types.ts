import rootReducer from './reducer'

export type RootState = ReturnType<typeof rootReducer>


export type TResponse = {
    [index: string]: any
}



export type TDataWrapper<T> = {
    payload: T
}

