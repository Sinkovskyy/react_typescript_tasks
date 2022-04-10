import { createReducer } from "@reduxjs/toolkit";
import { todoActions } from "./actions";
import { TInitialState } from "./types";





const InitialState: TInitialState = {
    todos: []
}


const reducer = createReducer<TInitialState>(InitialState, builder => {

    builder
        .addCase(todoActions.setTodos, (state, { payload }) => ({ ...state, todos: payload }))

})


export default reducer
