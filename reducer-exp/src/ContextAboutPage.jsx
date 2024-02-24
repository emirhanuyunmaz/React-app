import { useContext } from "react"
import { CounterContext } from "./context/counterContext"
import { DECREMENT, INCREMENT, RESET } from "./reducer"

export default function ContextAboutPage () {

    const {counterContext : {counter: {counter,dispatcher}}} = useContext(CounterContext)

    return (<div>
        <h1>Context About Page</h1>
        <h2>Counter :: {counter}</h2>
        <button onClick={() => dispatcher(INCREMENT)}>Arttır</button>
        <button onClick={() => dispatcher(DECREMENT)}>Azalt</button>
        <button onClick={() => dispatcher(RESET)}>Reset</button>
        <button onClick={() => dispatcher("HEHE")}>Default</button>

    </div>)
}