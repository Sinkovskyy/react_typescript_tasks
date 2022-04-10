import { FC } from "react"




export type TRoutes = {
    [index: string]: TRoute
}

export type TRoute = {
    path: string
    component: FC
}
