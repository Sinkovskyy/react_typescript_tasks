import { FC, SyntheticEvent, useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../../../components";
import { InputTodoItem, TodoItem } from "./components";
import { StyledTodoContainer } from "./styled";
import { TTodo, TTodoContainer } from "./types";







const TodoContainer: FC<TTodoContainer> = ({
    todos,
    checkItemToggleHandler,
    removeItemClickHandler,
    addTodoClickHandler
}) => {


    const todoInputRef = useRef<HTMLInputElement>(null)
    const [isTempInputActive, setIsTempInputActive] = useState<boolean>(false)

    const Events = {

        onAddClickHandler: () => {
            setIsTempInputActive(true)
        },
        onSaveClickHandler: () => {
            todoInputRef.current && addTodoClickHandler && addTodoClickHandler(todoInputRef.current.value)
            setIsTempInputActive(false)
        },
        removeClickHandler: (id: number) => {
            removeItemClickHandler && removeItemClickHandler(id)
        },
        checkItemToggleHandler: (id: number, checked: boolean) => {
            checkItemToggleHandler && checkItemToggleHandler(id, checked)
        }
    }




    return (

        <StyledTodoContainer>
            <Button onClick={Events.onAddClickHandler} >Add Todo</Button>
            {isTempInputActive && <InputTodoItem
                onSaveClickListener={Events.onSaveClickHandler}
                innerRef={todoInputRef} />}
            {todos.map((todo, index) => (<TodoItem
                key={index}
                id={todo.id}
                condition={todo.condition}
                text={todo.text}
                removeClickListener={Events.removeClickHandler}
                checkToggleHandler={Events.checkItemToggleHandler} />))}

        </StyledTodoContainer>
    )
}


export default TodoContainer