import { FC, SyntheticEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../components";
import { useTypedSelector } from "../../hooks";
import { getTodosSelector, todoActions } from "../../store";
import { TodoContainer } from "./components";
import { TTodo } from "./components/TodosContainer/types";
import { Container, FilterContainer, } from "./styled";
import { TFilter } from "./types";



const IndexPage: FC = () => {

    const dispatch = useDispatch()

    const [todos, setTodos] = useState<TTodo[]>(useTypedSelector(getTodosSelector))

    const [filter, setFilter] = useState<TFilter>('all')

    const [inputTodosData, setInputTodosData] = useState<TTodo[]>(todos)

    const Events = {
        removeItemClickHandler: (id: number) => {
            setTodos((todos) => todos.filter(todo => (todo.id != id)))
        },
        addTodoClickListener: (text: string) => {
            const id = todos.length ? [...todos].sort((a, b) => (a.id - b.id))[todos.length - 1].id + 1 : 1
            setTodos(todos =>
                [{
                    id,
                    text,
                    condition: 'processed',
                } as TTodo].concat(todos))


        },
        checkItemToggleHandler: (id: number, checked: boolean) => {

            let todo: TTodo

            todos.forEach((item) => {
                if (item.id == id) {
                    todo = { ...item, condition: checked ? 'done' : 'processed' } as TTodo
                }
            })

            setTodos(todos => checked ? todos.filter(item => item.id != id).concat([todo]) : [todo].concat(todos.filter(item => item.id != id)))

        },
        allButtonClickHandler: () => {
            setFilter('all')
            setInputTodosData(todos)
        },
        todoButtonClickHandler: () => {
            setFilter('todo')
            setInputTodosData(todos.filter(todo => todo.condition == 'processed'))

        },
        doneButtonClickHandler: () => {
            setFilter('done')
            setInputTodosData(todos.filter(todo => todo.condition == 'done'))
        },
    }



    useEffect(() => {
        dispatch(todoActions.setTodos(todos))
        setFilter('all')
        setInputTodosData(todos)
    }, [todos])




    return (
        <Container>
            <FilterContainer>
                <Button colorTheme={filter == 'all' ? 'blue' : 'grey'} onClick={Events.allButtonClickHandler}>All</Button>
                <Button colorTheme={filter == 'todo' ? 'blue' : 'grey'} onClick={Events.todoButtonClickHandler}>Todo</Button>
                <Button colorTheme={filter == 'done' ? 'blue' : 'grey'} onClick={Events.doneButtonClickHandler}>Done</Button>
            </FilterContainer>
            <TodoContainer
                todos={inputTodosData}
                removeItemClickHandler={Events.removeItemClickHandler}
                addTodoClickHandler={Events.addTodoClickListener}
                checkItemToggleHandler={Events.checkItemToggleHandler} />



        </Container>
    )
}


export default IndexPage