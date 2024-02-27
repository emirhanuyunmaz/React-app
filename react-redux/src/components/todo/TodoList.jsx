import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../../store/todos/todoSlice"

export default function TodoList (){
    const todoList = useSelector(state => state.todo)
    const dispatch = useDispatch()

    function handleClick(index){
        dispatch(removeTodo(index))
    }

    return (<div>
        <ul>
            {todoList?.map((item,index) => {
                return <li onClick={ () => handleClick(index) } key={index}>{item}</li>
            })}
        </ul>
    </div>)
} 