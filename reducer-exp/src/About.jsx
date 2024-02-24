import { useReducer } from "react"
import { DECREMENT, INCREMENT, RESET, counterReducer, initialCountState } from "./reducer"

export default function About () {
    
    const [counter , dispatcher] = useReducer(counterReducer,initialCountState)


    return (<div>
        <h1>About</h1>
        <h2>Counter : {counter}</h2>
        <button onClick={() => dispatcher(INCREMENT)}>Arttır</button>
        <button onClick={() => dispatcher(DECREMENT)}>Azalt</button>
        <button onClick={() => dispatcher(RESET)}>Reset</button>
        <button onClick={() => dispatcher("HEBELE")}>Default</button>
    </div>) 
 }