import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";




const Router: FC = () => {



    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )

}



export default Router
