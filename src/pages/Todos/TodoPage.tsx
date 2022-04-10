import { FC, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "../../components";
import { useTypedSelector } from "../../hooks";
import { getTodosSelector, todoActions } from "../../store";
import { TTodo } from "../../store/todo/types";
import { FormContainer } from "./styled";




const TodoPage: FC = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { id } = useParams()

    const [todos, setTodos] = useState<TTodo[]>(useTypedSelector(getTodosSelector))

    const todo: TTodo | null = useMemo(() => id ? todos.filter(todo => todo.id == parseInt(id))[0] : null, [todos])

    const textRef = useRef<HTMLInputElement>(null)

    const Events = {

        saveClickHandler: () => {
            setTodos(todos => todos.map(item => {

                if (id && item.id == parseInt(id)) {
                    return { ...item, text: textRef.current ? textRef.current.value : item.text }
                }
                return item
            }))

            navigate('/todos')
        }
    }

    useEffect(() => {
        !todo && navigate('/')
    }, [todo])

    useEffect(() => {
        dispatch(todoActions.setTodos(todos))
    }, [todos])

    return (
        <>
            <h1>Todo</h1>
            <FormContainer>
                {todo && <Input value={todo.text} innerRef={textRef} />}
                <Button onClick={Events.saveClickHandler}>Save</Button>
            </FormContainer>
        </>)
}


export default TodoPage