import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const todo = {id:-1 , text:"" ,priority : false} 
  const [todoList,setTodoList] = useState([])
  const [update , setUpdate] = useState({clickedUpdate:false , id: -1 })
  const [inputText,setInputText] = useState("")
  const [inputCheckbox,setInputCheckbox] = useState(false)

  const todoFormValue = {
    inputText,
    setInputText,
    inputCheckbox,
    setInputCheckbox
  }

  const formUpdate = {
    update , 
    setUpdate
  } 
  
  //console.log(todoList)

  return (
    <>
      <TodoForm todoList={todoList} setTodoList = {setTodoList} todo= {todo} todoFormValue ={todoFormValue} formUpdate={formUpdate} />
      <TodoList todoList={todoList} setTodoList = {setTodoList} todo= {todo} todoFormValue ={todoFormValue} formUpdate ={formUpdate} />
    </>
  )
}

export default App
