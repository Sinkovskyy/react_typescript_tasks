import { HomeIndexPage, PhotosIndexPage, TodoPage, TodosIndexPage } from "../pages";
import { TRoutes } from "./types";




const routes: TRoutes = {


    home: {
        path: '*',
        component: HomeIndexPage
    },
    photos: {
        path: '/photos',
        component: PhotosIndexPage
    },
    todos: {
        path: '/todos',
        component: TodosIndexPage
    },
    todo: {
        path: '/todos/:id',
        component: TodoPage
    }



}


export default routes