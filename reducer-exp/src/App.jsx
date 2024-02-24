import { useContext, useReducer, useState } from 'react'
import { DECREMENT, INCREMENT, RESET} from './reducer'
import About from './About'
import ContextAboutPage from './ContextAboutPage'
import { CounterContext } from './context/counterContext'
import { ADD_TODO } from './reducer/todoActionType'


function App() {
  //Bu işlem sayesinde context-reducer ile yapılacak işlemleri diğer sayfalarda kullandık .
  //const [counter,dispatcher] = useReducer(counterReducer,initialCountState)

  const {counterContext : {counter: {counter,dispatcher}}} = useContext(CounterContext)
  const {todoContext:{todo : {todos,todoDispatcher}}} = useContext(CounterContext)

  function handleSubmit(event) {
    event.preventDefault()
    const todoValue = event.target.elements[0].value
    todoDispatcher({type :ADD_TODO , payload : todoValue})
  }


  return (
    <>
    <form  onSubmit={handleSubmit}>
      <input type="text" placeholder='Todo '/>
      <button type='submit'>Submit</button>
    </form>
    <hr />
      <ul>
        {todos.todoList?.map((item,index) => <li key={index} >{item}</li>)}
      </ul>

      <hr />
      <h1>{counter}</h1>
      <button onClick={() => dispatcher(INCREMENT)}>Arttır</button>
      <button onClick={() => dispatcher(DECREMENT)}>Azalt</button>
      <button onClick={() => dispatcher(RESET)}>Reset</button>
      <button onClick={() => dispatcher("HEBELE")}>Olmayan Deger</button>
      <hr />
      <ContextAboutPage/>
      <hr />
      <About/>
      <hr />
    </>
  )
}

export default App
