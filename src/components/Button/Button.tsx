import { FC } from "react";
import { StyledButton } from "./styled";
import { TButton } from "./types";





const Button: FC<TButton> = ({ children, colorTheme = 'blue', onClick }) => {


    return (
        <StyledButton colorTheme={colorTheme} onClick={onClick} >{children}</StyledButton>
    )

}


export default Button