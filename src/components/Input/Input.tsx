import { useEffect } from "react";
import { useRef } from "react";
import { FC } from "react";
import { Container, Label, StyledInput } from "./styled";
import { TInput } from "./types";





const Input: FC<TInput> = ({ label = '', onChange, type = 'text', isValid = true, value, name, innerRef }) => {

    return (

        <Container>
            <Label>{label}</Label>
            <StyledInput
                type={type}
                onChange={onChange}
                isValid={isValid}
                defaultValue={value}
                ref={innerRef}
                name={name} />

        </Container>
    )
}

export default Input