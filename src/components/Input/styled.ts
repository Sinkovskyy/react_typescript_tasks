import styled, { css } from "styled-components";
import { colors } from "../../assets";
import { TStyledInput } from "./types";



export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const Label = styled.label`
    color: black;
    font-size: 15px;
`


export const StyledInput = styled.input<TStyledInput>`


    ${({ isValid }) => (!isValid && css`
    
        border-color: ${colors.red};
    
    `)}

`