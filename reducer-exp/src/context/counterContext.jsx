import { createContext, useReducer } from "react";
import { counterReducer, initialCountState } from "../reducer";
import { initialTodo, reducerTodo } from "../reducer/todoReducer";

export const CounterContext = createContext()


export default function CounterContextProvider({children}){

    const [counter,dispatcher] = useReducer(counterReducer,initialCountState)
    const [todo,todoDispatcher] = useReducer(reducerTodo,initialTodo)


    const counterContext = {
        counter:{"counter": counter , dispatcher}
    }
    const todoContext = {
        todo:{"todos":todo,"todoDispatcher":todoDispatcher}
    }

    return(<CounterContext.Provider value={{counterContext,todoContext}}>
        {children}
    </CounterContext.Provider>)
}