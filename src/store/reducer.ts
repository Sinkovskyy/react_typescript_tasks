import { combineReducers } from "redux";
import { PhotoReducer } from "./photo";
import { TodoReducer } from "./todo";


export default combineReducers({
    photo: PhotoReducer,
    todo: TodoReducer
});