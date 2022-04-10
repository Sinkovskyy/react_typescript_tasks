import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import routes from './routes'



const AppRoutes: FC = () => {


    return (
        <Routes>

            <Route
                path={routes.home.path}
                element={<routes.home.component />}
            />

            <Route
                path={routes.photos.path}
                element={<routes.photos.component />}
            />

            <Route
                path={routes.todos.path}
                element={<routes.todos.component />}
            />

            <Route
                path={routes.todo.path}
                element={<routes.todo.component />}
            />

        </Routes>

    )


}

export default AppRoutes
