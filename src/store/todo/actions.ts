import { createAction } from "@reduxjs/toolkit";
import { SET_TODOS } from "./consts";
import { TTodo } from "./types";



export const todoActions = {

    setTodos: createAction(SET_TODOS, (payload: TTodo[]) => ({ payload }))
}