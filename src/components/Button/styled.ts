import styled, { css } from "styled-components";
import { colors } from "../../assets";
import { TStyledButton } from "./types";





export const StyledButton = styled.button<TStyledButton>`


    cursor: pointer;
    border: none;   

    color:white;

    min-width: 70px;
    height: 25px;

    transition: all .7s ease;
    border: 1px solid transparent;
    border-radius: 5px;

    &:hover
    {
        background-color: transparent;
    }


    ${({ colorTheme }) => (

        css`
        
            background-color: ${colors[colorTheme]};

            &:hover
            {
                border-color: ${colors[colorTheme]};
                color:${colors[colorTheme]}
            }
        
        `
    )}



`