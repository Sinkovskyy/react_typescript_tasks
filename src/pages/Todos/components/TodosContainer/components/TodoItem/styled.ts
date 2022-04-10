import styled, { css } from "styled-components";
import { TTodoText } from "./types";



export const Container = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

`

export const TodoText = styled.span<TTodoText>`

    cursor: pointer;
    text-align: center;
    max-width: 200px;
    ${({ lineThrough }) => (lineThrough && css`
    
        text-decoration: line-through;
    
    `)}


`