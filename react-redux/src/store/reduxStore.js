import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./counter/counterSlice"
import todoSlice from "./todos/todoSlice"

//Provider ile verilere erişme işlemi.
export const store = configureStore({
    reducer : {
        counter : counterSlice,
        todo: todoSlice
    }
})