import { useDispatch, useSelector } from 'react-redux'
import { addMore, decrement, increment, reset } from './store/counter/counterSlice'
import Todo from './components/todo/Todo'
import TodoList from './components/todo/TodoList'


function App() {
  const value = useSelector(state => state.counter.value)//Value değerinin alınması işlemi.
  const dispatcher = useDispatch()//Kullanılacak olan fonk. çağirilması işlemi.

  return (
    <>
      <h1>App</h1>
      <hr />
      <h2>Conter : {value}</h2>
      <button onClick={() => dispatcher(increment())}> Arttır</button>
      <button onClick={() => dispatcher(decrement())}> Azalt</button>
      <button onClick={() => dispatcher(reset())}> Sıfırla</button>
      <button onClick={() => dispatcher(addMore({item : 10}))}> Ekle (10)</button>
      <hr />
      <Todo/>
      <hr />
      <TodoList/>
    </>
  )
}

export default App
