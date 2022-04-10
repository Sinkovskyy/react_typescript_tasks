import { FC, SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../../components";
import { todoActions } from "../../../../../../store";
import { Container, TodoText } from "./styled";
import { TTodoItem } from "./types";




const TodoItem: FC<TTodoItem> = ({ id, text, condition, removeClickListener, checkToggleHandler }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const Events = {
        checkboxToggleHandler: (e: SyntheticEvent) => {
            const checked = (e.target as HTMLInputElement).checked
            checkToggleHandler && checkToggleHandler(id, checked)
        },
        clickHandler: () => {
            navigate(`./${id}`)
        },
        removeClickHandler: () => {
            removeClickListener && removeClickListener(id)
        }
    }

    return (

        <Container>
            <input
                type='checkbox'
                checked={condition == 'done'}
                onChange={Events.checkboxToggleHandler} />
            <TodoText lineThrough={condition == 'done'} onClick={Events.clickHandler}>{text}</TodoText>

            <Button colorTheme='red' onClick={Events.removeClickHandler}>Remove</Button>

        </Container>
    )


}

export default TodoItem