import styled from "styled-components";
import { colors } from "../../assets";



export const Container = styled.div`


    display:flex;
    flex-direction: column;
    gap:10px;


`


export const Link = styled.a`

    background-color: ${colors.blue};
    width: 100px;
    height: 30px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;

    transition: color .4s ease, background-color .4s ease;

    &:hover
    {
        color:black;
        background-color: transparent;
    }

`