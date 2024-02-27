import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/todos/todoSlice'

function Todo() {
    const dispatch = useDispatch()
    function handleClick(event){
        event.preventDefault()
        dispatch(addTodo(event.target[0].value))
        event.target[0].value = ""
    }

  return (
    <div>
        <form onSubmit={handleClick}  >
            <input type="text" placeholder='Todo Add' />
            <button type='submit'>Add Todo</button>

        </form>
    </div>
  )
}

export default Todo
