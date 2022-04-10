import { useRef } from "react";
import { FC, SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input } from "../../../../../../components";
import { todoActions } from "../../../../../../store";
import { Container } from "./styled";
import { TInputTodoItem } from "./types";








const InputTodoItem: FC<TInputTodoItem> = ({ onSaveClickListener, innerRef }) => {

    const [form, setForm] = useState({ text: '' })

    const Events = {

        onInputChange: (e: SyntheticEvent) => {
            setForm((form) => ({ ...form, [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value }))
        },
        onSaveHandler: () => {
            onSaveClickListener && onSaveClickListener()
        }
    }

    return (
        <Container>
            <Input name='text' innerRef={innerRef} value={form.text} onChange={Events.onInputChange} />
            <Button onClick={Events.onSaveHandler}>Save</Button>
        </Container>
    )
}


export default InputTodoItem